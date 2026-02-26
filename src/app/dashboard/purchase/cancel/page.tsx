import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';
import Link from 'next/link';

export default function PurchaseCancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-md border-2 border-slate-200 shadow-xl bg-white">
        <CardHeader className="text-center pb-6 pt-8">
          <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
            <XCircle className="h-12 w-12 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold text-slate-900 mb-3">Purchase Cancelled</CardTitle>
          <CardDescription className="text-lg text-slate-600">
            Your purchase was cancelled. No charges were made to your account.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-sm text-slate-600 text-center font-medium bg-slate-50 p-4 rounded-lg border border-slate-200">
            You can return to the dashboard to browse packages or try again when you're ready.
          </p>

          <div className="space-y-3">
            <Link href="/dashboard">
              <Button className="w-full h-12 bg-gradient-to-r from-[rgb(0,102,204)] to-[rgb(0,76,153)] hover:from-[rgb(0,76,153)] hover:to-[rgb(0,102,204)] text-white font-bold shadow-lg hover:shadow-xl transition-all">
                Return to Dashboard
              </Button>
            </Link>
            <Link href="/browse">
              <Button variant="outline" className="w-full h-12 border-2 border-slate-300 hover:border-[rgb(0,102,204)] hover:bg-blue-50 font-semibold text-slate-700 hover:text-[rgb(0,102,204)] transition-all">
                Browse Forms
              </Button>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 mt-6 border-2 border-blue-200">
            <p className="text-sm text-slate-700 font-medium">
              Need help choosing the right package? Check out our package recommendations or contact support.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
