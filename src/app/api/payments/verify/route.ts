// @ts-nocheck - Supabase generated types causing build issues
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { stripe } from "@/lib/stripe";
import { createClient as createAdminClient } from "@supabase/supabase-js";

const supabaseAdmin = createAdminClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

export async function GET(request: NextRequest) {
  try {
    // Verify authentication
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    // Check if purchase exists
    let { data: purchase, error: purchaseError } = await supabase
      .from("purchases")
      .select("*")
      .eq("stripe_checkout_session_id", sessionId)
      .eq("user_id", user.id)
      .single();

    if (purchaseError || !purchase) {
      console.error("Purchase not found, checking Stripe:", {
        sessionId,
        userId: user.id,
        error: purchaseError,
      });
      
      // Check if session exists in Stripe and try to process it
      try {
        const stripeSession = await stripe.checkout.sessions.retrieve(sessionId);
        
        if (stripeSession.payment_status === "paid" && stripeSession.metadata?.userId === user.id) {
          console.log("Payment is complete, processing manually...");
          
          const userId = stripeSession.metadata.userId;
          const packageId = stripeSession.metadata.packageId;
          const packageName = stripeSession.metadata.packageName;
          const formsIncluded = JSON.parse(stripeSession.metadata.formsIncluded || "[]");

          // Create purchase record
          const { data: newPurchase, error: createError } = await supabaseAdmin
            .from("purchases")
            .insert({
              user_id: userId,
              stripe_checkout_session_id: stripeSession.id,
              stripe_payment_intent_id: stripeSession.payment_intent as string,
              package_id: packageId,
              package_name: packageName,
              forms_included: formsIncluded,
              amount_paid: stripeSession.amount_total || 0,
              currency: stripeSession.currency || "usd",
              status: "completed",
              completed_at: new Date().toISOString(),
            })
            .select()
            .single();

          if (createError) {
            console.error("Error creating purchase:", createError);
            return NextResponse.json(
              { 
                verified: false, 
                error: "Payment successful but not yet processed. Please wait a moment and refresh the page.",
                needsRetry: true
              },
              { status: 202 }
            );
          }

          // Grant access to all forms in the package
          for (const formId of formsIncluded) {
            const { data: existingAccess } = await supabaseAdmin
              .from("user_form_access")
              .select("id")
              .eq("user_id", userId)
              .eq("form_id", formId)
              .eq("is_active", true)
              .single();

            if (!existingAccess) {
              await supabaseAdmin.from("user_form_access").insert({
                user_id: userId,
                form_id: formId,
                purchase_id: newPurchase.id,
                granted_via: "purchase",
                is_active: true,
              });
            }
          }

          purchase = newPurchase;
          console.log("Purchase processed successfully:", purchase.id);
        } else if (stripeSession.payment_status === "paid") {
          return NextResponse.json(
            { 
              verified: false, 
              error: "Payment successful but not yet processed. Please wait a moment and refresh the page.",
              needsRetry: true
            },
            { status: 202 }
          );
        } else {
          return NextResponse.json(
            { verified: false, error: "Payment not completed" },
            { status: 400 }
          );
        }
      } catch (stripeError) {
        console.error("Error checking Stripe session:", stripeError);
        return NextResponse.json(
          { verified: false, error: "Purchase not found" },
          { status: 404 }
        );
      }
    }

    if (!purchase) {
      return NextResponse.json(
        { verified: false, error: "Purchase not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      verified: true,
      purchase: {
        id: purchase.id,
        packageId: purchase.package_id,
        packageName: purchase.package_name,
        formsIncluded: purchase.forms_included,
        status: purchase.status,
        completedAt: purchase.completed_at,
      },
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { error: "Failed to verify payment" },
      { status: 500 }
    );
  }
}
