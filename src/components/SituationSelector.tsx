'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowRight, Heart, Award, Briefcase, FileCheck, Clock, Grid3x3 } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Situation {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

const situations: Situation[] = [
  {
    id: 'marriage',
    title: "I'm married to a US citizen",
    description: 'Apply for a green card based on marriage to a U.S. citizen',
    icon: <Heart className="h-6 w-6" />,
    href: '/browse?package=marriage_greencard',
    color: 'text-rose-600 bg-rose-50 border-rose-200 hover:bg-rose-100',
  },
  {
    id: 'citizenship',
    title: 'I want to become a US citizen',
    description: 'Apply for U.S. citizenship through naturalization',
    icon: <Award className="h-6 w-6" />,
    href: '/browse?package=citizenship',
    color: 'text-blue-600 bg-blue-50 border-blue-200 hover:bg-blue-100',
  },
  {
    id: 'employment',
    title: 'Employer is sponsoring me',
    description: 'Employment-based visa or green card sponsorship',
    icon: <Briefcase className="h-6 w-6" />,
    href: '/browse?category=work_authorization',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
  },
  {
    id: 'work_permit',
    title: 'I need a work permit',
    description: 'Apply for employment authorization (EAD)',
    icon: <FileCheck className="h-6 w-6" />,
    href: '/browse?form=i-765',
    color: 'text-green-600 bg-green-50 border-green-200 hover:bg-green-100',
  },
  {
    id: 'extend_change',
    title: 'Extend/change my visa',
    description: 'Extend stay or change to a different nonimmigrant status',
    icon: <Clock className="h-6 w-6" />,
    href: '/browse?form=i-539',
    color: 'text-amber-600 bg-amber-50 border-amber-200 hover:bg-amber-100',
  },
  {
    id: 'view_all',
    title: 'View all forms',
    description: 'Browse all available USCIS forms and packages',
    icon: <Grid3x3 className="h-6 w-6" />,
    href: '/browse',
    color: 'text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-100',
  },
];

export function SituationSelector() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Disclaimer */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg px-6 py-4 shadow-sm">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-900 mb-1">Note:</p>
            <p className="text-sm text-blue-800 leading-relaxed">
              Select your situation for navigation only. We do not assess eligibility. Please consult with an immigration attorney or USCIS to determine your eligibility for any immigration benefit.
            </p>
          </div>
        </div>
      </div>

      {/* Situation Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {situations.map((situation) => (
          <Link key={situation.id} href={situation.href}>
            <Card
              className={cn(
                'h-full transition-all duration-300 cursor-pointer border-2 bg-white',
                'hover:shadow-xl hover:-translate-y-1',
                'hover:border-[rgb(0,102,204)]'
              )}
            >
              <CardHeader className="pb-4">
                <div
                  className={cn(
                    'h-14 w-14 rounded-xl flex items-center justify-center mb-4 border-2 transition-colors',
                    situation.color
                  )}
                >
                  {situation.icon}
                </div>
                <CardTitle className="text-lg leading-tight text-slate-900 font-bold">
                  {situation.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-slate-600 leading-relaxed">
                  {situation.description}
                </CardDescription>
                <div className="flex items-center text-sm font-semibold text-[rgb(0,102,204)] group-hover:gap-3 transition-all">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
