'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Check for messages in URL params
  useEffect(() => {
    const urlError = searchParams.get('error');
    const message = searchParams.get('message');
    const confirmed = searchParams.get('confirmed');
    const reset = searchParams.get('reset');
    
    if (confirmed === 'true') {
      setSuccess('Email confirmed! You can now sign in with your credentials.');
    } else if (reset === 'success') {
      setSuccess('Password updated successfully! Please sign in with your new password.');
    } else if (urlError) {
      const errorMessages: Record<string, string> = {
        'no_code': 'Invalid verification link. Please try signing up again.',
        'verification_failed': message || 'Email verification failed. Please try again.',
        'no_session': 'Could not create session. Please try logging in.',
        'unexpected_error': message || 'An unexpected error occurred.',
        'auth_callback_failed': 'Authentication failed. Please try again.',
      };
      
      setError(errorMessages[urlError] || 'An error occurred. Please try again.');
    }
  }, [searchParams]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const supabase = createClient();
      console.log('🔐 Attempting login with email:', email);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('❌ Login error:', error);
        console.error('Error details:', {
          message: error.message,
          status: error.status,
          name: error.name,
        });
        setError(error.message);
        return;
      }

      console.log('✅ Login successful:', {
        userId: data.user?.id,
        email: data.user?.email,
        hasSession: !!data.session,
      });

      if (data.user && data.session) {
        console.log('✅ Login successful, redirecting to dashboard');
        router.push('/dashboard');
        router.refresh();
      } else {
        console.error('❌ Login succeeded but no session created');
        setError('Login succeeded but session creation failed. Please try again.');
      }
    } catch (err) {
      console.error('💥 Unexpected error during login:', err);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      {success && (
        <Alert className="border-green-200 bg-green-50">
          <AlertTitle className="text-green-900 font-semibold">Success</AlertTitle>
          <AlertDescription>
            <p className="text-sm text-green-800">{success}</p>
          </AlertDescription>
        </Alert>
      )}
      
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
          disabled={loading}
          className="h-11 border-slate-300 focus:border-[rgb(0,102,204)] focus:ring-[rgb(0,102,204)]"
        />
      </div>

      <Button type="submit" className="w-full bg-[rgb(0,102,204)] hover:bg-[rgb(0,76,153)] text-white font-semibold py-6 shadow-md hover:shadow-lg transition-all" disabled={loading}>
        {loading ? 'Signing in...' : 'Sign In'}
      </Button>

      <div className="flex items-center justify-between text-sm pt-2">
        <Link href="/auth/forgot-password" className="text-[rgb(0,102,204)] hover:underline font-medium">
          Forgot password?
        </Link>
        <p className="text-slate-600">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="text-[rgb(0,102,204)] hover:underline font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
}
