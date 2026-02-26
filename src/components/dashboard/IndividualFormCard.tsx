'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Clock, DollarSign } from 'lucide-react';
import { FormDefinition } from '@/lib/constants/forms-registry';
import { useTranslations } from 'next-intl';

interface IndividualFormCardProps {
  form: FormDefinition;
}

export function IndividualFormCard({ form }: IndividualFormCardProps) {
  const router = useRouter();
  const t = useTranslations('forms');

  const handleStartForm = () => {
    // Navigate directly to the form page
    // Access control will be handled by the form page itself
    router.push(`/dashboard/forms/${form.id}`);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      family: 'bg-blue-50 text-blue-700 border-blue-200',
      citizenship: 'bg-purple-50 text-purple-700 border-purple-200',
      work_authorization: 'bg-green-50 text-green-700 border-green-200',
      employment: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      travel: 'bg-orange-50 text-orange-700 border-orange-200',
      humanitarian: 'bg-rose-50 text-rose-700 border-rose-200',
      status_change: 'bg-amber-50 text-amber-700 border-amber-200',
      other: 'bg-slate-50 text-slate-700 border-slate-200',
    };
    return colors[category] || 'bg-slate-50 text-slate-700 border-slate-200';
  };

  const getStatusColor = (status?: string) => {
    if (!status || status === 'active') {
      return 'bg-green-50 text-green-700 border-green-200 font-semibold';
    }
    return 'bg-amber-50 text-amber-700 border-amber-200 font-semibold';
  };

  const getStatusLabel = (status?: string) => {
    if (!status || status === 'active') return t('status.active');
    return t('status.beta');
  };

  const getCategoryLabel = (category: string) => {
    return t(`category.${category}` as any) || category;
  };

  return (
    <Card className="group relative transition-all duration-300 hover:shadow-2xl border-2 border-slate-200 hover:border-[rgb(0,102,204)] bg-white h-full flex flex-col overflow-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(0,102,204)] to-[rgb(0,76,153)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      
      <CardHeader className="pb-4 pt-6">
        <div className="flex items-start gap-4">
          {/* Icon with gradient background */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(0,102,204)] to-[rgb(0,76,153)] rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative h-14 w-14 rounded-xl bg-gradient-to-br from-[rgb(0,102,204)] to-[rgb(0,76,153)] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <FileText className="h-7 w-7 text-white" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            {/* Form Code */}
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-[rgb(0,102,204)] transition-colors">
                {form.code}
              </CardTitle>
              <Badge variant="outline" className={getStatusColor(form.status)}>
                {getStatusLabel(form.status)}
              </Badge>
            </div>
            
            {/* Form Name */}
            <CardDescription className="line-clamp-2 mb-3 text-slate-600 leading-relaxed">
              {form.name}
            </CardDescription>
            
            {/* Category Badge */}
            <Badge variant="outline" className={getCategoryColor(form.category)}>
              {getCategoryLabel(form.category)}
            </Badge>
          </div>
        </div>
      </CardHeader>

      {/* Divider */}
      <div className="mx-6 border-t border-slate-200"></div>

      <CardContent className="flex-1 pt-4 pb-4">
        <div className="space-y-3">
          {/* Price */}
          {form.price !== undefined && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-3xl font-bold text-[rgb(0,102,204)]">
                <DollarSign className="h-7 w-7" />
                <span>{form.price}</span>
              </div>
              <span className="text-sm text-slate-500 font-medium">USD</span>
            </div>
          )}
          
          {/* Estimated Time */}
          {form.estimatedTime && (
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-200">
              <Clock className="h-4 w-4 text-slate-600 flex-shrink-0" />
              <span className="text-sm text-slate-700 font-medium">
                {form.estimatedTime}
              </span>
            </div>
          )}
        </div>
      </CardContent>

      {/* Action Button */}
      <CardFooter className="pt-0 pb-6">
        <Button
          onClick={handleStartForm}
          className="w-full h-12 bg-gradient-to-r from-[rgb(0,102,204)] to-[rgb(0,76,153)] hover:from-[rgb(0,76,153)] hover:to-[rgb(0,102,204)] text-white font-bold shadow-lg hover:shadow-xl transition-all text-base"
        >
          {t('buyNow', { price: form.price || 70 })}
        </Button>
      </CardFooter>
    </Card>
  );
}
