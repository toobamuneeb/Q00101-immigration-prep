"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { FormDefinition, Question } from "@/lib/constants/forms-registry";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";
import { fillPDFAndDownload } from "@/lib/pdf/download-pdf";

interface UniversalFormWizardProps {
  formDefinition: FormDefinition;
  applicationId: string | null;
  initialAnswers?: Record<string, any>;
  onComplete?: () => void;
  formId: string;
}

export function UniversalFormWizard({
  formDefinition,
  applicationId,
  initialAnswers = {},
  formId,
  onComplete,
}: UniversalFormWizardProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>(initialAnswers);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const { toast } = useToast();
  const t = useTranslations();

  const currentSection = formDefinition.sections[currentSectionIndex];
  const totalSections = formDefinition.sections.length;
  const isLastSection = currentSectionIndex === totalSections - 1;
  const progress = ((currentSectionIndex + 1) / totalSections) * 100;

  // Safety check: if currentSection is undefined, reset to first section
  if (!currentSection) {
    console.error(
      "Invalid section index:",
      currentSectionIndex,
      "Total sections:",
      totalSections
    );
    setCurrentSectionIndex(0);
    return null;
  }

  // Validate a single field
  const validateField = (question: Question, value: any): string | null => {
    if (question.required) {
      if (!value || (typeof value === "string" && value.trim() === "")) {
        return `${question.label} is required`;
      }
      if (Array.isArray(value) && value.length === 0) {
        return `${question.label} is required`;
      }
    }

    // Email validation
    if (question.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }

    return null;
  };

  // Validate current section
  const validateCurrentSection = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    // Only validate visible questions (respecting conditional logic)
    currentSection.questions
      .filter((question) => shouldShowQuestion(question))
      .forEach((question) => {
        const value = answers[question.id];
        const error = validateField(question, value);
        if (error) {
          newErrors[question.id] = error;
          isValid = false;
        }
      });

    setErrors(newErrors);

    if (!isValid) {
      toast({
        title: "Validation Error",
        description: `Please fix ${Object.keys(newErrors).length} error${
          Object.keys(newErrors).length > 1 ? "s" : ""
        } before continuing.`,
        variant: "destructive",
      });

      // Scroll to first error
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    return isValid;
  };

  // Update answer for a field
  const updateAnswer = (questionId: string, value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));

    // Clear error when user starts typing
    if (errors[questionId]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[questionId];
        return newErrors;
      });
    }

    // Mark field as touched
    setTouched((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  };

  // Helper to safely handle text - only plain English text without translation
  const translateLabel = (text: string): string => {
    if (!text) return "";
    // For now, just return the text as-is since all form text should be in English
    // Actual translations would need to be added to form definitions as keys
    return text;
  };

  // Check if a question should be shown based on conditional logic
  const shouldShowQuestion = (question: Question): boolean => {
    // Check for 'conditional' property (new format)
    if (question.conditional) {
      const conditional = question.conditional as any;
      const dependsOn = conditional.dependsOn;
      const dependentValue = answers[dependsOn];

      // Support both 'value' (single) and 'values' (array) formats
      if (conditional.values && Array.isArray(conditional.values)) {
        return conditional.values.includes(dependentValue);
      } else if (conditional.value !== undefined) {
        return dependentValue === conditional.value;
      }
      return false;
    }

    // Check for 'conditionalShow' property (legacy format used in I-130)
    const conditionalShow = (question as any).conditionalShow;
    if (conditionalShow) {
      const dependentValue = answers[conditionalShow.questionId];

      // Support both 'value' (single) and 'values' (array) formats
      if (conditionalShow.values && Array.isArray(conditionalShow.values)) {
        return conditionalShow.values.includes(dependentValue);
      } else if (conditionalShow.value !== undefined) {
        return dependentValue === conditionalShow.value;
      }
      return false;
    }

    // If no conditional logic, always show the question
    return true;
  };

  // Render a single question field
  const renderQuestion = (question: Question) => {
    const value = answers[question.id] || "";
    const hasError = !!errors[question.id];
    const errorMessage = errors[question.id];

    const renderField = () => {
      switch (question.type) {
        case "text":
        case "email":
          return (
            <Input
              type={question.type}
              value={value}
              onChange={(e) => updateAnswer(question.id, e.target.value)}
              placeholder={question.placeholder || ""}
              className={
                hasError ? "border-red-500 focus-visible:ring-red-500" : ""
              }
            />
          );

        case "tel":
        case "ssn":
          return (
            <Input
              type="tel"
              value={value}
              onChange={(e) => updateAnswer(question.id, e.target.value)}
              placeholder={question.placeholder || ""}
              className={
                hasError ? "border-red-500 focus-visible:ring-red-500" : ""
              }
            />
          );

        case "date":
          return (
            <Input
              type="date"
              value={value}
              onChange={(e) => updateAnswer(question.id, e.target.value)}
              className={
                hasError ? "border-red-500 focus-visible:ring-red-500" : ""
              }
            />
          );

        case "textarea":
          return (
            <Textarea
              value={value}
              onChange={(e) => updateAnswer(question.id, e.target.value)}
              placeholder={question.placeholder || ""}
              rows={4}
              className={
                hasError ? "border-red-500 focus-visible:ring-red-500" : ""
              }
            />
          );

        case "select":
          return (
            <Select
              value={value}
              onValueChange={(val) => updateAnswer(question.id, val)}
            >
              <SelectTrigger
                className={
                  hasError ? "border-red-500 focus-visible:ring-red-500" : ""
                }
              >
                <SelectValue
                  placeholder={question.placeholder || "Select..."}
                />
              </SelectTrigger>
              <SelectContent>
                {question.options?.map((option) => (
                  <SelectItem
                    key={option.value || option.label}
                    value={option.value || "N/A"}
                  >
                    {translateLabel(option.label)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          );

        case "radio":
          return (
            <RadioGroup
              value={value}
              onValueChange={(val) => updateAnswer(question.id, val)}
              className={hasError ? "border border-red-500 rounded-md p-3" : ""}
            >
              {question.options?.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option.value}
                    id={`${question.id}-${option.value}`}
                  />
                  <Label
                    htmlFor={`${question.id}-${option.value}`}
                    className="font-normal cursor-pointer"
                  >
                    {translateLabel(option.label)}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          );

        case "checkbox":
          return (
            <div className="flex items-center space-x-2">
              <Checkbox
                id={question.id}
                checked={value || false}
                onCheckedChange={(checked) =>
                  updateAnswer(question.id, checked)
                }
              />
              <Label
                htmlFor={question.id}
                className="font-normal cursor-pointer"
              >
                {translateLabel(question.label)}
              </Label>
            </div>
          );

        case "file":
          return (
            <Input
              type="file"
              onChange={(e) => updateAnswer(question.id, e.target.files?.[0])}
              className={
                hasError ? "border-red-500 focus-visible:ring-red-500" : ""
              }
            />
          );

        default:
          return (
            <Input
              value={value}
              onChange={(e) => updateAnswer(question.id, e.target.value)}
              placeholder={question.placeholder || ""}
              className={
                hasError ? "border-red-500 focus-visible:ring-red-500" : ""
              }
            />
          );
      }
    };

    // For checkbox, label is part of the field
    if (question.type === "checkbox") {
      return (
        <div key={question.id} id={question.id} className="space-y-2">
          {question.helpText && (
            <p className="text-sm text-muted-foreground">
              {translateLabel(question.helpText)}
            </p>
          )}
          {renderField()}
          {hasError && (
            <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
              <svg
                className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-red-600 font-medium">{errorMessage}</p>
            </div>
          )}
        </div>
      );
    }

    return (
      <div key={question.id} id={question.id} className="space-y-2">
        <Label className="text-base font-medium">
          {translateLabel(question.label)}
          {question.required && (
            <span className="text-destructive ml-1">*</span>
          )}
        </Label>
        {question.helpText && (
          <p className="text-sm text-muted-foreground">
            {translateLabel(question.helpText)}
          </p>
        )}
        {renderField()}
        {hasError && (
          <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
            <svg
              className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-red-600 font-medium">{errorMessage}</p>
          </div>
        )}
      </div>
    );
  };

  // Navigation handlers
  const handleNext = () => {
    console.log("Next clicked, current answers:", answers);

    if (!validateCurrentSection()) {
      return;
    }

    if (!isLastSection) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Complete the form
      console.log("Form complete, final answers:", answers);
      setIsSubmitting(true);
      onComplete?.();
    }
  };

  const handleDownloadPDF = async () => {
    await fillPDFAndDownload(formId, answers);

    // setIsDownloading(true);

    // First, validate all sections
    //   for (let i = 0; i < formDefinition.sections.length; i++) {
    //     const section = formDefinition.sections[i];
    //     const requiredFields = section.questions
    //       .filter((q) => q.required)
    //       .map((q) => q.id);

    //     const missingFields = requiredFields.filter((fieldId) => {
    //       const value = answers[fieldId];
    //       return (
    //         !value || value === "" || value === undefined || value === null
    //       );
    //     });

    //     if (missingFields.length > 0) {
    //       setCurrentSectionIndex(i);
    //       toast({
    //         title: "Missing Required Fields",
    //         description: `Please complete section "${section?.title}" before downloading.`,
    //         variant: "destructive",
    //       });
    //       setIsDownloading(false);
    //       return;
    //     }
    //   }

    //   // Generate PDF
    //   const response = await fetch("/api/forms/generate-pdf", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       formId: formDefinition.id,
    //       answers: answers,
    //       timestamp: new Date().toISOString(),
    //     }),
    //   });

    //   if (!response.ok) {
    //     let message = `Failed to generate PDF (${response.status})`;
    //     try {
    //       const ct = response.headers.get("content-type") || "";
    //       if (ct.includes("application/json")) {
    //         const errorData = await response.json();
    //         message = (errorData && errorData.error) || message;
    //       } else {
    //         const text = await response.text();
    //         if (text) message = text;
    //       }
    //     } catch (_) {}
    //     throw new Error(message);
    //   }

    //   // Create and download the PDF
    //   const blob = await response.blob();
    //   const url = URL.createObjectURL(blob);
    //   const link = document.createElement("a");
    //   link.href = url;
    //   link.download = `${formDefinition.code.toUpperCase()}-filled-${new Date()
    //     .toISOString()
    //     .slice(0, 10)}.pdf`;
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    //   URL.revokeObjectURL(url);

    //   toast({
    //     title: "Success",
    //     description: "PDF downloaded successfully!",
    //   });

    //   // Optionally save to database
    //   if (applicationId) {
    //     await saveAnswersToDatabase(answers);
    //   }
    // } catch (error) {
    //   console.error("PDF download error:", error);
    //   toast({
    //     title: "Error",
    //     description:
    //       error instanceof Error ? error?.message : "Failed to generate PDF",
    //     variant: "destructive",
    //   });
    // } finally {
    //   setIsDownloading(false);
    // }
  };

  // Helper function to save answers
  const saveAnswersToDatabase = async (answers: Record<string, any>) => {
    try {
      const response = await fetch("/api/forms/save-answers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicationId,
          answers,
          formId: formDefinition.id,
        }),
      });

      if (!response.ok) {
        console.error("Failed to save answers");
      }
    } catch (error) {
      console.error("Error saving answers:", error);
    }
  };
  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">
            Step {currentSectionIndex + 1} of {totalSections}
          </span>
          {!applicationId && (
            <span className="text-sm text-muted-foreground">Preview Mode</span>
          )}
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Section Card */}
      <Card>
        <CardHeader>
          <CardTitle>{currentSection.title}</CardTitle>
          {currentSection.description && (
            <CardDescription>{currentSection.description}</CardDescription>
          )}
        </CardHeader>

        <CardContent className="space-y-6">
          {currentSection.questions
            ?.filter((question) => shouldShowQuestion(question))
            .map((question) => renderQuestion(question))}
        </CardContent>

        <CardFooter className="flex justify-between border-t pt-6">
          {!isSubmitting ? (
            <>
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentSectionIndex === 0}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              <Button type="button" onClick={handleNext}>
                {isLastSection ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Complete
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </>
          ) : (
            <>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsSubmitting(false)}
              >
                Edit Form
              </Button>

              <Button
                type="button"
                onClick={handleDownloadPDF}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Generating...
                  </>
                ) : (
                  <>📥 Download PDF</>
                )}
              </Button>
            </>
          )}
        </CardFooter>
      </Card>

      {/* Section Navigation Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {formDefinition.sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => setCurrentSectionIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSectionIndex
                ? "bg-primary w-8"
                : index < currentSectionIndex
                ? "bg-primary/50"
                : "bg-muted"
            }`}
            aria-label={`Go to ${section.title}`}
          />
        ))}
      </div>
    </div>
  );
}
