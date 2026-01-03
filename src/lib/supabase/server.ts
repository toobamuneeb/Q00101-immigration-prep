import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { type SupabaseClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { Database } from '@/types/database';

export async function createClient(): Promise<SupabaseClient<Database>> {
    const cookieStore = await cookies();

    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value;
                },
                set(name: string, value: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ 
                            name, 
                            value, 
                            ...options,
                            sameSite: 'lax',
                            secure: process.env.NODE_ENV === 'production',
                            httpOnly: true,
                            path: '/',
                        });
                    } catch (error) {
                        // Handle cookies in Server Components
                        console.error('Error setting cookie:', error);
                    }
                },
                remove(name: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ 
                            name, 
                            value: '', 
                            ...options,
                            maxAge: 0,
                            path: '/',
                        });
                    } catch (error) {
                        // Handle cookies in Server Components
                        console.error('Error removing cookie:', error);
                    }
                },
            },
        }
    );
}
