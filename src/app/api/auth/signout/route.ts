import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const supabase = await createClient();
    
    // Sign out from Supabase
    await supabase.auth.signOut({ scope: 'local' });

    // Create response with redirect
    const response = NextResponse.json(
      { success: true },
      { status: 200 }
    );

    // Clear all Supabase cookies
    const cookiesToClear = [
      'sb-access-token',
      'sb-refresh-token',
    ];

    cookiesToClear.forEach(cookieName => {
      response.cookies.set({
        name: cookieName,
        value: '',
        maxAge: 0,
        path: '/',
      });
    });

    return response;
  } catch (error) {
    console.error('Error signing out:', error);
    return NextResponse.json(
      { error: 'Failed to sign out' },
      { status: 500 }
    );
  }
}
