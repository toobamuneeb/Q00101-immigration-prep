'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';

export function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    console.log('📝 Starting signup process for:', email);

    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      const supabase = createClient();
      console.log('🔐 Calling Supabase signUp...');
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        console.error('❌ Signup error:', error);
        setError(error.message);
        setLoading(false);
        return;
      }

      console.log('✅ Signup response received:', {
        userId: data.user?.id,
        email: data.user?.email,
        hasSession: !!data.session,
        identitiesCount: data.user?.identities?.length,
      });

      if (data.user) {
        // Check if email is already registered
        if (data.user.identities && data.user.identities.length === 0) {
          console.log('⚠️ Email already registered');
          setError('This email is already registered. Please log in instead.');
          setLoading(false);
          return;
        }
        
        // Check if user is confirmed (no email confirmation required)
        if (data.session) {
          // User is logged in immediately, redirect to dashboard
          console.log('✅ User signed up and logged in immediately');
          router.push('/dashboard');
          router.refresh();
          return;
        }
        
        // Email confirmation required
        console.log('📧 Email confirmation required');
        setSuccess(true);
        setLoading(false);
      }
    } catch (err) {
      console.error('💥 Unexpected signup error:', err);
      setError('An unexpected error occurred');
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Alert className="border-green-200 bg-green-50">
        <AlertTitle className="text-green-900 font-semibold">Check your email!</AlertTitle>
        <AlertDescription>
          <div className="space-y-3">
            <p className="text-sm text-green-800">
              We've sent a confirmation link to <strong>{email}</strong>.
            </p>
            <p className="text-sm text-green-800">
              Please check your email and click the link to verify your account. 
              After verification, you'll be automatically redirected back to the app and logged in.
            </p>
            <p className="text-xs text-green-700">
              Don't see the email? Check your spam folder.
            </p>
            <Link href="/auth/login" className="block mt-4">
              <Button variant="outline" className="w-full border-green-300 hover:bg-green-100 text-green-900 font-semibold">
                Go to Login
              </Button>
            </Link>
          </div>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSignup} className="space-y-4">
      {error && (
        <Alert variant="destructive" className="border-red-200 bg-red-50">
          <AlertTitle className="text-red-900 font-semibold">Error</AlertTitle>
          <AlertDescription>
            <p className="text-sm text-red-800">{error}</p>
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
          disabled={loading}
          className="h-11 border-slate-300 focus:border-[rgb(0,102,204)] focus:ring-[rgb(0,102,204)]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="••••••••"
          minLength={6}
          disabled={loading}
          className="h-11 border-slate-300 focus:border-[rgb(0,102,204)] focus:ring-[rgb(0,102,204)]"
        />
        <p className="text-xs text-slate-500">
          Must be at least 6 characters
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-slate-700 font-medium">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="••••••••"
          disabled={loading}
          className="h-11 border-slate-300 focus:border-[rgb(0,102,204)] focus:ring-[rgb(0,102,204)]"
        />
      </div>

      <Button type="submit" className="w-full bg-[rgb(0,102,204)] hover:bg-[rgb(0,76,153)] text-white font-semibold py-6 shadow-md hover:shadow-lg transition-all" disabled={loading}>
        {loading ? 'Creating account...' : 'Sign Up'}
      </Button>

      <p className="text-center text-sm text-slate-600 pt-2">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-[rgb(0,102,204)] hover:underline font-semibold">
          Sign in
        </Link>
      </p>
    </form>
  );
}
