"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const isLocal = window.location.origin == "http://localhost:3000";
    const base = isLocal ? "http://localhost:3000" : window.location.origin;
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${base}/auth/callback`,
      });

      if (error) {
        setError(error.message);
        return;
      }

      setSuccess(true);
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Alert className="border-green-200 bg-green-50">
        <AlertTitle className="text-green-900 font-semibold">Check your email</AlertTitle>
        <AlertDescription>
          <p className="text-sm text-green-800 mb-4">
            We sent a password reset link to your email. Open the link to set a
            new password.
          </p>
          <Link href="/auth/login">
            <Button variant="outline" className="border-green-300 hover:bg-green-100 text-green-900 font-semibold">
              Back to Login
            </Button>
          </Link>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <Alert variant="destructive" className="border-red-200 bg-red-50">
          <AlertTitle className="text-red-900 font-semibold">
            {/\d+\s*seconds?/i.test(error) ? "Please wait" : "Error"}
          </AlertTitle>
          <AlertDescription>
            <p className="text-sm text-red-800">
              {(() => {
                const match = error.match(/(\d+)\s*seconds?/i);
                const seconds = match?.[1];
                return seconds
                  ? `Try again in ${seconds} seconds before requesting another reset.`
                  : error;
              })()}
            </p>
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

      <Button type="submit" className="w-full bg-[rgb(0,102,204)] hover:bg-[rgb(0,76,153)] text-white font-semibold py-6 shadow-md hover:shadow-lg transition-all" disabled={loading}>
        {loading ? "Sending link..." : "Send Reset Link"}
      </Button>

      <p className="text-center text-sm text-slate-600 pt-2">
        Remembered your password?{" "}
        <Link href="/auth/login" className="text-[rgb(0,102,204)] hover:underline font-semibold">
          Sign in
        </Link>
      </p>
    </form>
  );
}
