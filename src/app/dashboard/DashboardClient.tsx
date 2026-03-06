"use client";

import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { IndividualFormCard } from "@/components/dashboard/IndividualFormCard";
import { FORM_REGISTRY } from "@/lib/constants/forms-registry";
import {
  FileText,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  Shield,
  Check,
} from "lucide-react";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { ProgressIllustration } from "@/components/ui/illustrations";
import { AuthButton } from "@/components/auth/AuthButton";

interface DashboardClientProps {
  applications: any[];
  user: User;
  highlightCategory?: string;
  highlightForm?: string;
}

export function DashboardClient({
  applications,
  user,
  highlightCategory,
  highlightForm,
}: DashboardClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const highlightRef = useRef<HTMLDivElement>(null);

  // Handle URL params for highlighting
  useEffect(() => {
    if (highlightCategory) {
      setSelectedCategory(highlightCategory);
    }

    // Scroll to highlighted element after a short delay
    if (highlightCategory || highlightForm) {
      setTimeout(() => {
        highlightRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [highlightCategory, highlightForm]);

  // Category display mapping
  const categoryLabels: Record<string, string> = {
    all: "All Forms",
    family: "Family Immigration",
    employment: "Employment",
    work_authorization: "Work Authorization",
    citizenship: "Citizenship",
    travel: "Travel",
    humanitarian: "Humanitarian",
    status_change: "Status Change",
    other: "Other",
  };

  // Get unique categories from forms
  const categories = [
    "all",
    ...new Set(Object.values(FORM_REGISTRY).map((f) => f.category)),
  ];

  // Filter forms by category
  const filteredForms = Object.values(FORM_REGISTRY).filter(
    (form) => selectedCategory === "all" || form.category === selectedCategory
  );

  // Count forms in each category
  const getCategoryCount = (category: string) => {
    if (category === "all") return Object.values(FORM_REGISTRY).length;
    return Object.values(FORM_REGISTRY).filter((f) => f.category === category)
      .length;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case "in_review":
        return <Clock className="h-4 w-4 text-blue-600" />;
      case "draft":
        return <FileText className="h-4 w-4 text-orange-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in_review":
        return "In Review";
      case "draft":
        return "Draft";
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "in_review":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "draft":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="border-b bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex justify-between h-14 sm:h-16 items-center gap-2">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[rgb(0,102,204)] to-[rgb(0,76,153)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="font-bold text-sm sm:text-base lg:text-xl text-slate-900 hidden min-[400px]:inline truncate">ImmigrationPrep</span>
            </Link>
            <div className="flex items-center gap-1 sm:gap-2 lg:gap-4 flex-shrink-0">
              <Link href="/browse">
                <Button variant="ghost" className="font-medium text-slate-700 hover:text-[rgb(0,102,204)] hover:bg-blue-50 text-xs sm:text-sm lg:text-base px-2 sm:px-3 lg:px-4 h-9 sm:h-10">
                  Browse Forms
                </Button>
              </Link>
              <AuthButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center max-w-6xl mx-auto">
            {/* Left: Text Content */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-3">
                Prepare Your Immigration Forms
              </h1>
              <p className="text-base sm:text-lg text-slate-600">
                Complete your immigration forms with confidence. Step-by-step guidance, automatic progress saving, and instant PDF generation.
              </p>
            </div>
            
            {/* Right: Progress Illustration */}
            <div className="hidden lg:block">
              <div className="relative h-80">
                <ProgressIllustration />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* In-Progress Applications */}
        {applications.length > 0 && (
          <section className="mb-8 sm:mb-12">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Your Applications
                </h2>
                <p className="text-sm sm:text-base text-slate-600">
                  Continue where you left off
                </p>
              </div>
              <Button asChild variant="outline" className="border-slate-300 hover:border-[rgb(0,102,204)] hover:bg-blue-50 text-xs sm:text-sm px-2 sm:px-4">
                <Link href="/dashboard/forms">
                  View All
                  <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {applications.slice(0, 6).map((app) => {
                const form = FORM_REGISTRY[app.form_id];
                if (!form) return null;

                return (
                  <Card
                    key={app.id}
                    className="group relative hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-[rgb(0,102,204)] bg-white overflow-hidden"
                  >
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:from-[rgb(0,102,204)] group-hover:to-[rgb(0,76,153)] transition-all duration-300"></div>
                    
                    <CardHeader className="pb-3 pt-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[rgb(0,102,204)] to-[rgb(0,76,153)] flex items-center justify-center shadow-md">
                              <FileText className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-lg text-slate-900 font-bold">{form.id}</CardTitle>
                              <CardDescription className="line-clamp-1 text-slate-600 text-sm">
                                {form.name}
                              </CardDescription>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          {getStatusIcon(app.status)}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        <Badge
                          variant="outline"
                          className={getStatusColor(app.status)}
                        >
                          {getStatusLabel(app.status)}
                        </Badge>
                        <div className="text-sm text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                          <span className="font-medium">Last updated:</span>{" "}
                          {new Date(app.updated_at).toLocaleDateString()}
                        </div>
                        <Button asChild className="w-full h-11 bg-gradient-to-r from-[rgb(0,102,204)] to-[rgb(0,76,153)] hover:from-[rgb(0,76,153)] hover:to-[rgb(0,102,204)] text-white font-bold shadow-md hover:shadow-lg transition-all" size="sm">
                          <Link
                            href={
                              app.status === "completed"
                                ? `/dashboard/forms/${form.id}/review?applicationId=${app.id}`
                                : `/dashboard/forms/${form.id}?applicationId=${app.id}`
                            }
                          >
                            {app.status === "completed" ? "Review" : "Continue"}
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* Pricing Info */}
        <section className="mb-8 sm:mb-12">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-slate-900">Simple, Transparent Pricing</CardTitle>
              <CardDescription className="text-sm sm:text-base text-slate-700">
                All forms are $60 each. Buy multiple forms and save automatically!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-6 bg-white rounded-xl shadow-md border-2 border-slate-200">
                  <div className="text-2xl sm:text-4xl font-bold text-[rgb(0,102,204)] mb-1 sm:mb-2">$60</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium">1 Form</div>
                </div>
                <div className="text-center p-3 sm:p-6 bg-white rounded-xl shadow-md border-2 border-green-200">
                  <div className="text-2xl sm:text-4xl font-bold text-[rgb(0,102,204)] mb-1 sm:mb-2">$100</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium mb-1">2 Forms</div>
                  <div className="text-[10px] sm:text-xs text-green-600 font-bold bg-green-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full inline-block">
                    Save $20
                  </div>
                </div>
                <div className="text-center p-3 sm:p-6 bg-white rounded-xl shadow-md border-2 border-green-200">
                  <div className="text-2xl sm:text-4xl font-bold text-[rgb(0,102,204)] mb-1 sm:mb-2">$140</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium mb-1">3 Forms</div>
                  <div className="text-[10px] sm:text-xs text-green-600 font-bold bg-green-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full inline-block">
                    Save $40
                  </div>
                </div>
                <div className="text-center p-3 sm:p-6 bg-white rounded-xl shadow-md border-2 border-green-200">
                  <div className="text-2xl sm:text-4xl font-bold text-[rgb(0,102,204)] mb-1 sm:mb-2">$200</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium mb-1">4+ Forms</div>
                  <div className="text-[10px] sm:text-xs text-green-600 font-bold bg-green-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full inline-block">
                    Save $40+
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Individual Forms */}
        <section>
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">
              Individual Forms
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Or start with a single form application
            </p>
          </div>

          {/* Category Tabs */}
          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="mb-4 sm:mb-6"
          >
            <div className="relative">
              {/* Scrollable container for mobile */}
              <div className="overflow-x-auto scrollbar-hide -mx-3 px-3 sm:mx-0 sm:px-0">
                <TabsList className="inline-flex w-auto min-w-full sm:w-full justify-start h-auto gap-2 sm:gap-3 p-2 sm:p-2.5 bg-white border border-slate-200 shadow-sm">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="data-[state=active]:bg-[rgb(0,102,204)] data-[state=active]:text-white font-medium text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 whitespace-nowrap flex-shrink-0 rounded-md group"
                    >
                      <span className="flex items-center gap-2 sm:gap-3">
                        <span>{categoryLabels[category] || category}</span>
                        <span className="inline-flex items-center justify-center min-w-[24px] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-slate-200 text-slate-700 group-data-[state=active]:bg-white/20 group-data-[state=active]:text-white group-data-[state=active]:border group-data-[state=active]:border-white/30 flex-shrink-0">
                          {getCategoryCount(category)}
                        </span>
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>
          </Tabs>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredForms.map((form) => (
              <div
                key={form.id}
                ref={highlightForm === form.id ? highlightRef : null}
                className={highlightForm === form.id ? "animate-pulse" : ""}
              >
                <IndividualFormCard form={form} />
              </div>
            ))}
          </div>

          {filteredForms.length === 0 && (
            <Card className="p-8 sm:p-12 text-center bg-white border-2 border-slate-200">
              <p className="text-slate-500 text-base sm:text-lg">
                No forms found in this category
              </p>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
}
