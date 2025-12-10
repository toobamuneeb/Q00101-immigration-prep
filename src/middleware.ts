import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Force users with recovery cookie to stay on reset page
  const recoveryCookie = request.cookies.get("recovery_in_progress")?.value;
  if (
    recoveryCookie &&
    !url.pathname.startsWith("/auth/reset-password") &&
    !url.pathname.startsWith("/auth/callback")
  ) {
    // return NextResponse.redirect(new URL('/auth/reset-password', url));
  }

  // Update Supabase session and continue
  const response = await updateSession(request);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
