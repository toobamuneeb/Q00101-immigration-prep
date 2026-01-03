import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          // Update request cookies
          request.cookies.set({ name, value, ...options });
          // Create new response with updated cookies
          response = NextResponse.next({
            request: { headers: request.headers },
          });
          // Set cookie on response with proper options
          response.cookies.set({ 
            name, 
            value, 
            ...options,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            path: '/',
          });
        },
        remove(name: string, options: CookieOptions) {
          // Update request cookies
          request.cookies.set({ name, value: "", ...options });
          // Create new response with updated cookies
          response = NextResponse.next({
            request: { headers: request.headers },
          });
          // Remove cookie from response
          response.cookies.set({ 
            name, 
            value: "", 
            ...options,
            maxAge: 0,
            path: '/',
          });
        },
      },
    }
  );

  // Refresh session if expired
  await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Allow callback and reset password routes to process without redirect
  if (pathname.startsWith("/auth/callback") || pathname.startsWith("/auth/reset-password")) {
    return response;
  }

  // Get session to check auth status
  const { data: { session } } = await supabase.auth.getSession();

  // Redirect authenticated users away from auth pages
  if (session && pathname.startsWith("/auth") && !pathname.startsWith("/auth/callback")) {
    console.log('🔄 Authenticated user on auth page, redirecting to dashboard');
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Redirect unauthenticated users to login
  if (!session && pathname.startsWith("/dashboard")) {
    console.log('🔄 Unauthenticated user on dashboard, redirecting to login');
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return response;
}
