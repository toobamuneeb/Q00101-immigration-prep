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
    type,
    intent,
  });

  try {
    if (!code) {
      console.log("⚠️ No code provided, redirecting to login");
      return NextResponse.redirect(`${origin}/auth/login?error=no_code`);
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
    console.log("📧 Email confirmation flow - exchanging code for session");
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("❌ Error exchanging code for session:", error);
      return NextResponse.redirect(
        `${origin}/auth/login?error=verification_failed&message=${encodeURIComponent(error.message)}`
      );
    }

    if (!data.session) {
      console.error("❌ No session created after code exchange");
      return NextResponse.redirect(
        `${origin}/auth/login?error=no_session`
      );
    }

    console.log("✅ Session exchange successful:", {
      userId: data.user?.id,
      email: data.user?.email,
    });

    // User is now authenticated, redirect to dashboard
    const response = NextResponse.redirect(`${origin}/dashboard?welcome=true`);
    
    // Ensure cookies are set properly
    response.cookies.set({
      name: 'sb-access-token',
      value: data.session.access_token,
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    response.cookies.set({
      name: 'sb-refresh-token',
      value: data.session.refresh_token,
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    console.log("🔄 Redirecting to dashboard");
    return response;
  } catch (err) {
    console.error("💥 Unexpected error in callback:", err);
    return NextResponse.redirect(
      `${origin}/auth/login?error=unexpected_error&message=${encodeURIComponent(String(err))}`
    );
  }
}
