'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'phone' | 'ssn';
}

export function TextInput({
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
}: TextInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // Format phone numbers
    if (type === 'phone') {
      inputValue = formatPhoneNumber(inputValue);
    }

    // Format SSN
    if (type === 'ssn') {
      inputValue = formatSSN(inputValue);
    }

    onChange(inputValue);
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      const parts = [match[1], match[2], match[3]].filter(Boolean);
      if (parts.length === 1) return parts[0];
      if (parts.length === 2) return `(${parts[0]}) ${parts[1]}`;
      if (parts.length === 3) return `(${parts[0]}) ${parts[1]}-${parts[2]}`;
    }
    return value;
  };

  const formatSSN = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,2})(\d{0,4})$/);
    if (match) {
      const parts = [match[1], match[2], match[3]].filter(Boolean);
      if (parts.length === 1) return parts[0];
      if (parts.length === 2) return `${parts[0]}-${parts[1]}`;
      if (parts.length === 3) return `${parts[0]}-${parts[1]}-${parts[2]}`;
    }
    return value;
  };

  const inputType = type === 'phone' || type === 'ssn' ? 'text' : type;
  const inputMode =
    type === 'phone' || type === 'ssn' ? 'numeric' : type === 'email' ? 'email' : 'text';

  return (
    <div className="space-y-2">
      <Input
        type={inputType}
        inputMode={inputMode}
        value={value || ''}
        onChange={handleChange}
        placeholder={placeholder}
        className={cn(error && 'border-red-500 focus-visible:ring-red-500')}
        aria-invalid={!!error}
        aria-describedby={error ? 'error-message' : undefined}
        autoComplete={
          type === 'email'
            ? 'email'
            : type === 'phone'
            ? 'tel'
            : type === 'ssn'
            ? 'off'
            : undefined
        }
      />
      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
          <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-600 font-medium">{error}</p>
        </div>
      )}
    </div>
  );
}
