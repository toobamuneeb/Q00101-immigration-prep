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
        
        // Sign out immediately after signup to prevent auto-login
        if (data.session) {
          console.log('🔓 Signing out after signup to require manual login');
          await supabase.auth.signOut();
        }
        
        // Show success message - user must login manually
        console.log('✅ Signup successful - redirecting to login');
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
      <Alert>
        <AlertTitle>Account created successfully!</AlertTitle>
        <AlertDescription>
          <div className="space-y-3">
            <p className="text-sm">
              Your account has been created. Please log in to continue.
            </p>
            <Link href="/auth/login" className="block mt-4">
              <Button className="w-full">
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
          minLength={6}
          disabled={loading}
        />
        <p className="text-xs text-muted-foreground">
          Must be at least 6 characters
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="••••••••"
          disabled={loading}
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Creating account...' : 'Sign Up'}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
