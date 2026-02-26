import { ForgotPasswordForm } from '@/components/auth/ForgotPasswordForm';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Forgot Password | ImmigrationPrep',
  description: 'Reset your account password',
};

export default function ForgotPasswordPage() {
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
          <h1 className="text-2xl font-bold text-slate-900 mt-4">Reset your password</h1>
          <p className="text-slate-600 mt-2">We'll send you a link to reset it</p>
        </div>

        {/* Forgot Password Card */}
        <Card className="border-2 border-slate-200 shadow-xl bg-white">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-bold text-slate-900">Forgot Password</CardTitle>
            <CardDescription className="text-slate-600">
              Enter your email and we'll send you a reset link
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ForgotPasswordForm />
          </CardContent>
        </Card>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <Link href="/auth/login">
            <Button variant="ghost" className="text-slate-600 hover:text-[rgb(0,102,204)]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Login
            </Button>
          </Link>
        </div>

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

