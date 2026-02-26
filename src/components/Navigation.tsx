'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AuthButton } from '@/components/auth/AuthButton';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { Shield } from 'lucide-react';

export function Navigation() {
  const t = useTranslations('nav');

  return (
    <nav className="border-b bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[rgb(0,102,204)] to-[rgb(0,76,153)] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900">
              ImmigrationPrep
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-2">
            <Link href="/browse">
              <Button variant="ghost" className="text-base font-medium text-slate-700 hover:text-[rgb(0,102,204)] hover:bg-blue-50">
                {t('browseForms')}
              </Button>
            </Link>
            
            <LanguageSwitcher />
            <AuthButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
