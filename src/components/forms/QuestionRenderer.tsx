'use client';

import { useFormContext } from 'react-hook-form';
import { Question } from '@/lib/constants/forms-registry';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuestionRendererProps {
  question: Question;
  error?: string;
}

export function QuestionRenderer({ question, error }: QuestionRendererProps) {
  const { register, setValue, watch } = useFormContext();
  const value = watch(question.id);

  const renderField = () => {
    switch (question.type) {
      case 'text':
      case 'email':
        return (
          <Input
            {...register(question.id)}
            type={question.type}
            placeholder={question.placeholder}
            className={cn(error && 'border-red-500 focus-visible:ring-red-500')}
            aria-invalid={!!error}
          />
        );

      case 'tel':
      case 'ssn':
        return (
          <Input
            {...register(question.id)}
            type="tel"
            placeholder={question.placeholder}
            className={cn(error && 'border-red-500 focus-visible:ring-red-500')}
            aria-invalid={!!error}
          />
        );

      case 'date':
        return (
          <Input
            {...register(question.id)}
            type="date"
            className={cn(error && 'border-red-500 focus-visible:ring-red-500')}
            aria-invalid={!!error}
          />
        );

      case 'textarea':
        return (
          <Textarea
            {...register(question.id)}
            placeholder={question.placeholder}
            rows={4}
            className={cn(error && 'border-red-500 focus-visible:ring-red-500')}
            aria-invalid={!!error}
          />
        );

      case 'select':
        return (
          <Select
            value={value || ''}
            onValueChange={(val) => setValue(question.id, val)}
          >
            <SelectTrigger className={cn(error && 'border-red-500 focus-visible:ring-red-500')}>
              <SelectValue placeholder={question.placeholder || 'Select...'} />
            </SelectTrigger>
            <SelectContent>
              {question.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'radio':
        return (
          <RadioGroup
            value={value || ''}
            onValueChange={(val) => setValue(question.id, val)}
            className={cn(error && 'border border-red-500 rounded-md p-3')}
          >
            {question.options?.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                <Label htmlFor={`${question.id}-${option.value}`} className="font-normal cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case 'checkbox':
        return (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={question.id}
              checked={value || false}
              onCheckedChange={(checked) => setValue(question.id, checked)}
              className={cn(error && 'border-red-500')}
            />
            <Label htmlFor={question.id} className="font-normal cursor-pointer">
              {question.label}
            </Label>
          </div>
        );

      case 'file':
        return (
          <Input
            {...register(question.id)}
            type="file"
            className={cn(error && 'border-red-500 focus-visible:ring-red-500')}
            aria-invalid={!!error}
          />
        );

      default:
        return (
          <Input
            {...register(question.id)}
            placeholder={question.placeholder}
            className={cn(error && 'border-red-500 focus-visible:ring-red-500')}
            aria-invalid={!!error}
          />
        );
    }
  };

  // For checkbox, we don't show the label separately since it's part of the field
  if (question.type === 'checkbox') {
    return (
      <div className="space-y-2">
        {question.helpText && (
          <p className="text-sm text-muted-foreground">{question.helpText}</p>
        )}
        {renderField()}
        {error && (
          <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
            <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-600 font-medium">{error}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={question.id} className="text-base font-medium">
        {question.label}
        {question.required && <span className="text-destructive ml-1">*</span>}
      </Label>

      {question.helpText && (
        <p className="text-sm text-muted-foreground">{question.helpText}</p>
      )}

      {renderField()}

      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
          <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-600 font-medium">{error}</p>
        </div>
      )}
    </div>
  );
}
