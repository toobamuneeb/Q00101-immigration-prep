import { SignupForm } from '@/components/auth/SignupForm';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Sign Up | ImmigrationPrep',
  description: 'Create your account',
};

export default function SignupPage() {
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
          <h1 className="text-2xl font-bold text-slate-900 mt-4">Start your journey</h1>
          <p className="text-slate-600 mt-2">Create your account to get started</p>
        </div>

        {/* Signup Card */}
        <Card className="border-2 border-slate-200 shadow-xl bg-white">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-bold text-slate-900">Create Account</CardTitle>
            <CardDescription className="text-slate-600">
              Enter your email and password to create your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignupForm />
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>No Credit Card</span>
            </div>
          </div>
          
          <p className="text-center text-sm text-slate-500">
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
    </div>
  );
}
