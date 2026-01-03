'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function signOut() {
  const supabase = await createClient();
  
  // Sign out from Supabase (this clears the session)
  const { error } = await supabase.auth.signOut({
    scope: 'local' // Clear local session only
  });

  if (error) {
    console.error('Error signing out:', error);
    throw error;
  }

  // Revalidate all paths to clear cached data
  revalidatePath('/', 'layout');
  
  // Redirect to home page
  redirect('/');
}
