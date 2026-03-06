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
      <div className="w-full px-2 sm:px-3 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between h-14 sm:h-16 items-center gap-1 sm:gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 group flex-shrink-0 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[rgb(0,102,204)] to-[rgb(0,76,153)] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <span className="font-bold text-xs sm:text-sm lg:text-base xl:text-xl text-slate-900 hidden min-[420px]:inline truncate">
              ImmigrationPrep
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-0.5 sm:gap-1 lg:gap-2 flex-shrink-0">
            <Link href="/browse" className="flex-shrink-0">
              <Button variant="ghost" className="text-[10px] sm:text-xs lg:text-sm xl:text-base font-medium text-slate-700 hover:text-[rgb(0,102,204)] hover:bg-blue-50 px-1.5 sm:px-2 lg:px-3 xl:px-4 h-8 sm:h-9 lg:h-10 whitespace-nowrap">
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
