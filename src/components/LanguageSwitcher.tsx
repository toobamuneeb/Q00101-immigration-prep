'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const [locale, setLocale] = useState(currentLocale);

  useEffect(() => {
    // Load locale from localStorage on mount
    const savedLocale = localStorage.getItem('locale') || 'en';
    if (savedLocale !== locale) {
      setLocale(savedLocale);
      // Trigger locale change
      document.cookie = `NEXT_LOCALE=${savedLocale}; path=/; max-age=31536000`;
      window.location.reload();
    }
  }, []);

  const switchLocale = (newLocale: string) => {
    // Save to localStorage
    localStorage.setItem('locale', newLocale);
    // Set cookie for server-side
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    setLocale(newLocale);
    // Reload to apply new locale
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-0.5 sm:gap-1 lg:gap-2 px-1.5 sm:px-2 lg:px-3 h-8 sm:h-9 lg:h-10 flex-shrink-0">
          <Globe className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="font-medium text-[10px] sm:text-xs lg:text-sm">{locale === 'en' ? 'EN' : 'ES'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 sm:w-48">
        <DropdownMenuItem
          onClick={() => switchLocale('en')}
          className={`text-xs sm:text-sm ${locale === 'en' ? 'bg-accent' : ''}`}
        >
          <span className="mr-2">🇺🇸</span> English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLocale('es')}
          className={`text-xs sm:text-sm ${locale === 'es' ? 'bg-accent' : ''}`}
        >
          <span className="mr-2">🇪🇸</span> Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
