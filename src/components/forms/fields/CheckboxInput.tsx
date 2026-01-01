'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

interface CheckboxInputProps {
  value: boolean;
  onChange: (value: boolean) => void;
  error?: string;
  placeholder?: string;
}

export function CheckboxInput({ value, onChange, error, placeholder }: CheckboxInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="checkbox-input"
          checked={value || false}
          onCheckedChange={onChange}
          className={cn(error && 'border-red-500')}
          aria-invalid={!!error}
          aria-describedby={error ? 'error-message' : undefined}
        />
        {placeholder && (
          <Label
            htmlFor="checkbox-input"
            className="text-sm font-normal cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {placeholder}
          </Label>
        )}
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
