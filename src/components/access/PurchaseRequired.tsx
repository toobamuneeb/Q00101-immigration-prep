'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, ShoppingCart, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { FORM_PACKAGES } from '@/lib/constants/form-packages';
import { FORM_REGISTRY } from '@/lib/constants/forms-registry';
import { useTranslations } from 'next-intl';
import { useToast } from '@/hooks/use-toast';

interface PurchaseRequiredProps {
  formId: string;
  reason?: 'not_authenticated' | 'no_purchase' | 'access_revoked' | 'expired';
}

export function PurchaseRequired({ formId, reason }: PurchaseRequiredProps) {
  const t = useTranslations('purchaseRequired');
  const form = FORM_REGISTRY[formId.toLowerCase()];
  const [isPurchasing, setIsPurchasing] = useState<string | null>(null);
  const { toast } = useToast();

  // Find packages that include this form
  const availablePackages = FORM_PACKAGES.filter((pkg) =>
    pkg.formIds.some((f) => f.toLowerCase() === formId.toLowerCase())
  );

  const handlePurchase = async (packageId: string, isSingleForm: boolean = false) => {
    setIsPurchasing(packageId);

    try {
      const response = await fetch('/api/payments/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          packageId,
          singleFormId: isSingleForm ? formId : undefined 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.details || errorData.error || 'Failed to create checkout session');
      }

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Error creating checkout:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to start checkout. Please try again.',
        variant: 'destructive',
      });
      setIsPurchasing(null);
    }
  };

  const getMessage = () => {
    switch (reason) {
      case 'not_authenticated':
        return t('messages.notAuthenticated');
      case 'access_revoked':
        return t('messages.accessRevoked');
      case 'expired':
        return t('messages.expired');
      case 'no_purchase':
      default:
        return t('messages.noPurchase');
    }
  };

  if (reason === 'not_authenticated') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <Card className="w-full max-w-md border-2 border-slate-200 shadow-xl bg-white">
          <CardHeader className="text-center pb-6 pt-8">
            <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
              <AlertCircle className="h-12 w-12 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-slate-900">{t('authenticationRequired')}</CardTitle>
            <CardDescription className="text-lg text-slate-600">{getMessage()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/auth/login">
              <Button className="w-full h-12 bg-gradient-to-r from-[rgb(0,102,204)] to-[rgb(0,76,153)] hover:from-[rgb(0,76,153)] hover:to-[rgb(0,102,204)] text-white font-bold shadow-lg hover:shadow-xl transition-all">
                {t('signIn')}
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="outline" className="w-full h-12 border-2 border-slate-300 hover:border-[rgb(0,102,204)] hover:bg-blue-50 font-semibold text-slate-700 hover:text-[rgb(0,102,204)] transition-all">
                {t('createAccount')}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="container mx-auto max-w-5xl">
        <Card className="border-2 border-slate-200 shadow-xl bg-white">
          <CardHeader className="text-center pb-6 pt-8">
            <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
              <Lock className="h-12 w-12 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-slate-900">{t('title')}</CardTitle>
            <CardDescription className="text-lg text-slate-600">{getMessage()}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Form Info */}
            {form && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-slate-900 mb-3">{t('messages.tryingToAccess')}</h3>
                <p className="text-xl font-bold text-slate-900">
                  <span className="text-[rgb(0,102,204)]">{formId.toUpperCase()}</span>
                  {' - '}
                  {form.name}
                </p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{form.description}</p>
              </div>
            )}

            {/* Single Form Purchase Option */}
            {form && (
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-4">Option 1: Buy This Form Only</h3>
                <Card className="border-2 border-slate-300 hover:border-[rgb(0,102,204)] transition-all shadow-md hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <h4 className="font-bold text-2xl text-slate-900">{formId.toUpperCase()} - Single Form</h4>
                        <p className="text-base text-slate-600 mt-2 font-medium">
                          {form.name}
                        </p>
                        <p className="text-sm text-slate-500 mt-3">
                          Access to this form only
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-4xl font-bold text-[rgb(0,102,204)] mb-4">$60</p>
                        <Button
                          className="h-12 px-6 bg-gradient-to-r from-[rgb(0,102,204)] to-[rgb(0,76,153)] hover:from-[rgb(0,76,153)] hover:to-[rgb(0,102,204)] text-white font-bold shadow-lg hover:shadow-xl transition-all"
                          onClick={() => handlePurchase(`single-form-${formId}`, true)}
                          disabled={isPurchasing === `single-form-${formId}`}
                        >
                          {isPurchasing === `single-form-${formId}` ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          ) : (
                            <ShoppingCart className="mr-2 h-5 w-5" />
                          )}
                          {isPurchasing === `single-form-${formId}` ? t('processing') : 'Buy Single Form'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Available Packages */}
            {availablePackages.length > 0 && (
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-4">
                  Option 2: Buy a Package (Better Value!)
                </h3>
                <div className="grid gap-6">
                  {availablePackages.map((pkg) => (
                    <Card key={pkg.id} className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h4 className="font-bold text-2xl text-slate-900">{pkg.name}</h4>
                              {pkg.popular && (
                                <span className="text-xs bg-green-600 text-white px-3 py-1.5 rounded-full font-bold uppercase tracking-wide">
                                  POPULAR
                                </span>
                              )}
                            </div>
                            <p className="text-base text-slate-700 font-medium mb-3">
                              {pkg.description}
                            </p>
                            <p className="text-sm font-bold text-green-800 mb-2">
                              {t('includes')} {pkg.formIds.length} forms:{' '}
                              <span className="font-semibold">{pkg.formIds.map((f) => f.toUpperCase()).join(', ')}</span>
                            </p>
                            {pkg.formIds.length > 1 && (
                              <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                                💰 Save ${(pkg.formIds.length * 60) - pkg.price} vs buying individually!
                              </div>
                            )}
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-4xl font-bold text-green-700 mb-1">${pkg.price}</p>
                            <p className="text-sm text-green-600 font-semibold mb-4">${Math.round(pkg.price / pkg.formIds.length)}/form</p>
                            <Button
                              className="h-12 px-6 bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg hover:shadow-xl transition-all"
                              onClick={() => handlePurchase(pkg.id, false)}
                              disabled={isPurchasing === pkg.id}
                            >
                              {isPurchasing === pkg.id ? (
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              ) : (
                                <ShoppingCart className="mr-2 h-5 w-5" />
                              )}
                              {isPurchasing === pkg.id ? t('processing') : 'Buy Package'}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Back Button */}
            <div className="pt-4">
              <Link href="/dashboard">
                <Button variant="outline" className="w-full h-12 border-2 border-slate-300 hover:border-[rgb(0,102,204)] hover:bg-blue-50 font-semibold text-slate-700 hover:text-[rgb(0,102,204)] transition-all">
                  {t('backToDashboard')}
                </Button>
              </Link>
            </div>

            {/* Contact Support */}
            {(reason === 'access_revoked' || reason === 'expired') && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 text-sm text-blue-900">
                <p className="font-bold mb-2">{t('messages.needHelp')}</p>
                <p className="font-medium">
                  {t('messages.contactSupport')}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
