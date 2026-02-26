import { LoginForm } from '@/components/auth/LoginForm';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Suspense } from 'react';
import { Loader2, Shield } from 'lucide-react';

export const metadata = {
  title: 'Log In | ImmigrationPrep',
  description: 'Sign in to your account',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[rgb(0,102,204)] to-[rgb(0,76,153)] rounded-lg flex items-center justify-center shadow-md">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">ImmigrationPrep</span>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 mt-4">Welcome back</h1>
          <p className="text-slate-600 mt-2">Sign in to continue to your account</p>
        </div>

        {/* Login Card */}
        <Card className="border-2 border-slate-200 shadow-xl bg-white">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-bold text-slate-900">Sign In</CardTitle>
            <CardDescription className="text-slate-600">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={
              <div className="flex justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-[rgb(0,102,204)]" />
              </div>
            }>
              <LoginForm />
            </Suspense>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-sm text-slate-500 mt-6">
          By continuing, you agree to our{' '}
          <Link href="/terms" className="text-[rgb(0,102,204)] hover:underline font-medium">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-[rgb(0,102,204)] hover:underline font-medium">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
