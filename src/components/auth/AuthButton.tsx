"use client";

import { useEffect, useState, useTransition } from "react";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserIcon, LogOutIcon, CreditCardIcon, Loader2 } from "lucide-react";
import { signOut } from "@/app/actions/auth";

export function AuthButton() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const supabase = createClient();

    // Get initial user
    supabase.auth.getUser().then(({ data: { user } }) => {
      console.log('🔍 AuthButton: User check result:', user ? user.email : 'No user');
      setUser(user);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('🔍 AuthButton: Auth state changed:', session?.user?.email || 'No user');
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      // First, sign out on client side to clear local state
      const supabase = createClient();
      await supabase.auth.signOut({ scope: 'local' });
      
      // Clear user state immediately
      setUser(null);
      
      // Then call server action to clear server-side session
      startTransition(async () => {
        try {
          await signOut();
        } catch (error) {
          console.error('Server signout error:', error);
          // Even if server action fails, redirect to home
          router.push('/');
          router.refresh();
        }
      });
    } catch (error) {
      console.error('Client signout error:', error);
      // Fallback: force redirect even if signout fails
      router.push('/');
      router.refresh();
    }
  };

  if (loading) {
    return <div className="w-20 h-10 bg-slate-200 animate-pulse rounded-lg" />;
  }

  if (!user) {
    return (
      <div className="flex items-center gap-3">
        <Link href="/auth/login">
          <Button variant="ghost" className="font-medium text-slate-700 hover:text-[rgb(0,102,204)] hover:bg-blue-50">
            Log in
          </Button>
        </Link>
        <Link href="/auth/signup">
          <Button className="bg-[rgb(0,102,204)] hover:bg-[rgb(0,76,153)] text-white font-semibold shadow-md hover:shadow-lg transition-all">
            Sign Up
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 border-2 border-slate-300 hover:border-[rgb(0,102,204)] hover:bg-blue-50 font-medium">
          <UserIcon className="h-4 w-4" />
          <span className="max-w-[150px] truncate">{user.email}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 border-2 border-slate-200 shadow-xl">
        <DropdownMenuLabel className="font-semibold text-slate-900">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-slate-200" />
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="cursor-pointer hover:bg-blue-50 focus:bg-blue-50">
            <UserIcon className="mr-2 h-4 w-4 text-[rgb(0,102,204)]" />
            <span className="font-medium">Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/my-purchases" className="cursor-pointer hover:bg-blue-50 focus:bg-blue-50">
            <CreditCardIcon className="mr-2 h-4 w-4 text-[rgb(0,102,204)]" />
            <span className="font-medium">My Purchases</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-slate-200" />
        <DropdownMenuItem 
          onClick={handleLogout} 
          className="cursor-pointer hover:bg-red-50 focus:bg-red-50 text-red-600"
          disabled={isPending}
        >
          {isPending ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <LogOutIcon className="mr-2 h-4 w-4" />
          )}
          <span className="font-medium">{isPending ? 'Signing out...' : 'Sign Out'}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
