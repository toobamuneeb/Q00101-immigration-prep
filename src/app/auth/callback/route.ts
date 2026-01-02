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
    if (!code) {
      console.log("⚠️ No code provided, redirecting to login");
      return NextResponse.redirect(`${origin}/auth/login`);
    }

    const supabase = await createClient();
    
    // Check if this is a password recovery flow
    if (type === "recovery" || intent === "recovery") {
      console.log("🔑 Password recovery flow detected");
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

    // Normal signup/login flow - exchange code for session
    console.log("📧 Email confirmation flow detected");
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("❌ Error exchanging code for session:", error);
      return NextResponse.redirect(
        `${origin}/auth/login?error=auth_callback_failed`
      );
    }

    console.log("✅ Session exchange successful:", {
      userId: data.user?.id,
      email: data.user?.email,
    });
    console.log("🔄 Redirecting to login");

    return NextResponse.redirect(`${origin}/auth/login?confirmed=true`);
  } catch (err) {
    console.error("💥 Unexpected error in callback:", err);
    return NextResponse.redirect(`${origin}/auth/login?error=unexpected_error`);
  }
}
