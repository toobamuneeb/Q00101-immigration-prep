'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

interface SelectInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  options: Array<{ value: string; label: string }>;
}

export function SelectInput({
  value,
  onChange,
  error,
  placeholder = 'Select an option',
  options,
}: SelectInputProps) {
  return (
    <div className="space-y-2">
      <Select value={value || ''} onValueChange={onChange}>
        <SelectTrigger
          className={cn(error && 'border-red-500 focus-visible:ring-red-500')}
          aria-invalid={!!error}
          aria-describedby={error ? 'error-message' : undefined}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
          <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-600 font-medium">{error}</p>
        </div>
      )}
    </div>
  );
}
