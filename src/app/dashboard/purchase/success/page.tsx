'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

function PurchaseSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  const [isVerifying, setIsVerifying] = useState(true);
  const [purchase, setPurchase] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (!sessionId) {
      setError('No session ID provided');
      setIsVerifying(false);
      return;
    }

    const verifyPurchase = async () => {
      try {
        const response = await fetch(`/api/payments/verify?session_id=${sessionId}`);
        const data = await response.json();

        if (data.verified && data.purchase) {
          setPurchase(data.purchase);
          setIsVerifying(false);
        } else if (data.needsRetry && retryCount < 10) {
          // Payment is processing, retry after a delay
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, 2000);
        } else {
          setError(data.error || 'Purchase verification failed. Please contact support.');
          setIsVerifying(false);
        }
      } catch (err) {
        console.error('Error verifying purchase:', err);
        setError('Failed to verify purchase. Please contact support.');
        setIsVerifying(false);
      }
    };

    verifyPurchase();
  }, [sessionId, retryCount]);

  if (isVerifying) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Card className="w-full max-w-md border-2 border-slate-200 shadow-xl">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[rgb(0,102,204)] to-[rgb(0,76,153)] rounded-full opacity-20 animate-ping"></div>
              </div>
              <Loader2 className="h-16 w-16 animate-spin mx-auto text-[rgb(0,102,204)] relative" />
            </div>
            <p className="text-xl font-bold text-slate-900 mb-2">Verifying your purchase...</p>
            <p className="text-sm text-slate-600 font-medium">
              {retryCount > 0 
                ? `Processing payment... (${retryCount}/10)` 
                : 'This will only take a moment.'}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <Card className="w-full max-w-md border-2 border-red-200 shadow-xl">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-red-600" />
            </div>
            <CardTitle className="text-red-900 text-2xl font-bold">Verification Error</CardTitle>
            <CardDescription className="text-red-700 font-medium">{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard">
              <Button className="w-full h-12 bg-gradient-to-r from-[rgb(0,102,204)] to-[rgb(0,76,153)] hover:from-[rgb(0,76,153)] hover:to-[rgb(0,102,204)] text-white font-bold shadow-lg hover:shadow-xl transition-all">
                Return to Dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <Card className="w-full max-w-2xl border-2 border-slate-200 shadow-2xl bg-white">
        <CardHeader className="text-center pb-6 pt-8">
          <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <CardTitle className="text-4xl font-bold text-slate-900 mb-3">Purchase Successful!</CardTitle>
          <CardDescription className="text-lg text-slate-600">
            Thank you for your purchase. Your forms are now ready to use.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Purchase Details */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 space-y-3 border-2 border-blue-200">
            <h3 className="font-bold text-lg text-slate-900">Purchase Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-blue-200">
                <span className="text-slate-600 font-medium">Package:</span>
                <span className="font-bold text-slate-900">{purchase?.packageName}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600 font-medium">Forms Included:</span>
                <span className="font-bold text-[rgb(0,102,204)]">{purchase?.formsIncluded?.length || 0} Forms</span>
              </div>
            </div>
          </div>

          {/* Forms List */}
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-4">Your Forms</h3>
            <div className="grid gap-3">
              {purchase?.formsIncluded?.map((formId: string) => (
                <div
                  key={formId}
                  className="flex items-center justify-between p-4 border-2 border-slate-200 rounded-xl hover:border-[rgb(0,102,204)] hover:shadow-md transition-all bg-white"
                >
                  <span className="font-bold text-slate-900 text-lg">{formId.toUpperCase()}</span>
                  <Link href={`/dashboard/forms/${formId}`}>
                    <Button size="sm" className="bg-gradient-to-r from-[rgb(0,102,204)] to-[rgb(0,76,153)] hover:from-[rgb(0,76,153)] hover:to-[rgb(0,102,204)] text-white font-semibold shadow-md hover:shadow-lg transition-all">
                      Start Form
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
            <h3 className="font-bold text-green-900 mb-3 text-lg">What's Next?</h3>
            <ul className="space-y-2 text-sm text-green-900">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="font-medium">Fill out your forms at your own pace</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="font-medium">Your progress is automatically saved</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="font-medium">Download completed PDFs when ready</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="font-medium">Access your forms anytime from "My Purchases"</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Link href="/dashboard" className="flex-1">
              <Button variant="outline" className="w-full h-12 border-2 border-slate-300 hover:border-[rgb(0,102,204)] hover:bg-blue-50 font-semibold text-slate-700 hover:text-[rgb(0,102,204)] transition-all">
                Go to Dashboard
              </Button>
            </Link>
            <Link href="/dashboard/my-purchases" className="flex-1">
              <Button className="w-full h-12 bg-gradient-to-r from-[rgb(0,102,204)] to-[rgb(0,76,153)] hover:from-[rgb(0,76,153)] hover:to-[rgb(0,102,204)] text-white font-bold shadow-lg hover:shadow-xl transition-all">
                View My Purchases
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function PurchaseSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    }>
      <PurchaseSuccessContent />
    </Suspense>
  );
}
