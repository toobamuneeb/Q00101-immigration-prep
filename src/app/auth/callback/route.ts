import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const type = requestUrl.searchParams.get("type");
  const intent = requestUrl.searchParams.get("intent");
  const origin = requestUrl.origin;

  console.log("🔗 Auth callback received:", {
    hasCode: !!code,
    origin,
    fullUrl: requestUrl.toString(),
    intent,
    type,
    code,
    requestUrl,
  });

  try {
    if (code) {
      const res = NextResponse.redirect(
        `${origin}/auth/reset-password?code=${code}`
      );
      res.cookies.set({
        name: "recovery_in_progress",
        value: "1",
        path: "/",
        httpOnly: false,
      });
      return res;
    }

    if (code && intent != "recovery") {
      const supabase = await createClient();
      const { data, error } = await supabase.auth.exchangeCodeForSession(
        code as any
      );

      if (error) {
        console.error("❌ Error exchanging code for session:", error);
        if (type === "recovery" || intent === "recovery") {
          return NextResponse.redirect(
            `${origin}/auth/reset-password?error=recovery_exchange_failed`
          );
        }
        return NextResponse.redirect(
          `${origin}/auth/login?error=auth_callback_failed`
        );
      }

      console.log("✅ Session exchange successful:", {
        userId: data.user?.id,
        email: data.user?.email,
      });
      console.log("🔄 Redirecting to dashboard");

      return NextResponse.redirect(`${origin}/auth/login`);
    }
  } catch (err) {
    console.error("💥 Unexpected error in callback:", err);
    return NextResponse.redirect(`${origin}/auth/login?error=unexpected_error`);
  }

  // URL to redirect to after sign in process completes
}
