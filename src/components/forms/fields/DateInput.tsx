'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Calendar, AlertCircle } from 'lucide-react';

interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

export function DateInput({ value, onChange, error, placeholder }: DateInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="space-y-2">
      <div className="relative">
        <Input
          type="date"
          value={value || ''}
          onChange={handleChange}
          placeholder={placeholder}
          className={cn(
            'pr-10',
            error && 'border-red-500 focus-visible:ring-red-500'
          )}
          aria-invalid={!!error}
          aria-describedby={error ? 'error-message' : undefined}
        />
        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      </div>
      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
          <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-600 font-medium">{error}</p>
        </div>
      )}
    </div>
  );
}
