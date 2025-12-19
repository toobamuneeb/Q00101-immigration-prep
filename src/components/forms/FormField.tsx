'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { FormField as FormFieldType } from '@/lib/constants/forms';
import { Info, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface FormFieldProps {
    field: FormFieldType;
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export default function FormField({ field, value, onChange, error }: FormFieldProps) {
    const t = useTranslations();

    const renderInput = () => {
        const hasError = !!error;
        const errorClass = hasError ? 'border-red-500 focus-visible:ring-red-500' : '';

        switch (field.type) {
            case 'text':
            case 'email':
            case 'date':
                return (
                    <Input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder ? t(field.placeholder) : ''}
                        value={value || ''}
                        onChange={(e) => onChange(e.target.value)}
                        className={cn(errorClass)}
                        aria-invalid={hasError}
                    />
                );

            case 'textarea':
                return (
                    <Textarea
                        id={field.id}
                        placeholder={field.placeholder ? t(field.placeholder) : ''}
                        value={value || ''}
                        onChange={(e) => onChange(e.target.value)}
                        className={cn(errorClass)}
                        rows={4}
                        aria-invalid={hasError}
                    />
                );

            case 'select':
                return (
                    <Select value={value || ''} onValueChange={onChange}>
                        <SelectTrigger className={cn(errorClass)}>
                            <SelectValue placeholder={t('common.selectOption') || "Select an option"} />
                        </SelectTrigger>
                        <SelectContent>
                            {field.options?.map((option) => (
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
                        onValueChange={onChange}
                        className={hasError ? 'border border-red-500 rounded-md p-3' : ''}
                    >
                        {field.options?.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                                <RadioGroupItem value={option.value} id={`${field.id}-${option.value}`} />
                                <Label htmlFor={`${field.id}-${option.value}`} className="font-normal cursor-pointer">
                                    {t(option.label)}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                );

            case 'checkbox':
                return (
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id={field.id}
                            checked={value === 'true'}
                            onCheckedChange={(checked) => onChange(checked ? 'true' : 'false')}
                            className={hasError ? 'border-red-500' : ''}
                        />
                        <Label htmlFor={field.id} className="font-normal cursor-pointer">
                            {t(field.label)}
                        </Label>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="space-y-2">
            {field.type !== 'checkbox' && (
                <Label htmlFor={field.id}>
                    {t(field.label)}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                </Label>
            )}

            {renderInput()}

            {field.helpText && !error && (
                <div className="flex items-start gap-2 text-sm text-gray-500">
                    <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{t(field.helpText)}</span>
                </div>
            )}

            {error && (
                <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                    <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-red-600 font-medium">{error}</p>
                </div>
            )}
        </div>
    );
}
