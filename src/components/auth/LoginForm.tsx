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
    const verified = searchParams.get('verified');
    const reset = searchParams.get('reset');
    
    if (verified === 'true' || confirmed === 'true') {
      setSuccess(message || 'Email verified successfully! Please log in to continue.');
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
        <Alert>
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            <p className="text-sm">{success}</p>
          </AlertDescription>
        </Alert>
      )}
      
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            <p className="text-sm">{error}</p>
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
          disabled={loading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="••••••••"
          disabled={loading}
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Signing in...' : 'Sign In'}
      </Button>

      <div className="flex items-center justify-between text-sm">
        <Link href="/auth/forgot-password" className="text-primary hover:underline">
          Forgot password?
        </Link>
        <p className="text-muted-foreground">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
}
