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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FORM_REGISTRY } from "@/lib/constants/forms-registry";
import {
  FileText,
  DollarSign,
  Clock,
  Package,
  Check,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DocumentsIllustration, FormsGridIllustration } from "@/components/ui/illustrations";
import { useTranslations } from "next-intl";

interface BrowseClientProps {
  highlightCategory?: string;
  highlightForm?: string;
  isAuthenticated?: boolean;
}

export function BrowseClient({
  highlightCategory,
  highlightForm,
  isAuthenticated = false,
}: BrowseClientProps) {
  const t = useTranslations();
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

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      family: "bg-blue-50 text-blue-700 border-blue-200",
      citizenship: "bg-purple-50 text-purple-700 border-purple-200",
      work_authorization: "bg-green-50 text-green-700 border-green-200",
      employment: "bg-emerald-50 text-emerald-700 border-emerald-200",
      travel: "bg-orange-50 text-orange-700 border-orange-200",
      humanitarian: "bg-rose-50 text-rose-700 border-rose-200",
      status_change: "bg-amber-50 text-amber-700 border-amber-200",
      other: "bg-slate-50 text-slate-700 border-slate-200",
    };
    return colors[category] || "bg-slate-50 text-slate-700 border-slate-200";
  };

  const getStatusColor = (status?: string) => {
    if (!status || status === "active") {
      return "bg-green-50 text-green-700 border-green-200 font-semibold";
    }
    return "bg-amber-50 text-amber-700 border-amber-200 font-semibold";
  };

  const getStatusLabel = (status?: string) => {
    if (!status || status === "active") return t("forms.status.active");
    return t("forms.status.beta");
  };

  const getCategoryLabel = (category: string) => {
    return t(`forms.category.${category}`) || category;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            {/* Left: Text Content */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                {t("browse.title")}
              </h1>
              <p className="text-lg text-slate-600">
                {t("browse.subtitle")}
              </p>
            </div>
            
            {/* Right: Illustration */}
            <div className="hidden lg:block">
              <div className="relative h-80">
                <FormsGridIllustration />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Pricing Banner */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl text-slate-900">{t("pricing.title")}</CardTitle>
              <CardDescription className="text-base md:text-lg mt-2 text-slate-700">
                {t("pricing.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="text-center p-6 bg-white rounded-xl shadow-md border-2 border-slate-200">
                  <div className="text-4xl font-bold text-[rgb(0,102,204)] mb-2">$70</div>
                  <div className="text-sm text-slate-600 font-medium">
                    {t("pricing.oneForm")}
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md border-2 border-green-200">
                  <div className="text-4xl font-bold text-[rgb(0,102,204)] mb-2">$120</div>
                  <div className="text-sm text-slate-600 font-medium mb-1">
                    {t("pricing.twoForms")}
                  </div>
                  <div className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full inline-block">
                    {t("pricing.save")} $20
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md border-2 border-green-200">
                  <div className="text-4xl font-bold text-[rgb(0,102,204)] mb-2">$170</div>
                  <div className="text-sm text-slate-600 font-medium mb-1">
                    {t("pricing.threeForms")}
                  </div>
                  <div className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full inline-block">
                    {t("pricing.save")} $40
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md border-2 border-green-200">
                  <div className="text-4xl font-bold text-[rgb(0,102,204)] mb-2">$240</div>
                  <div className="text-sm text-slate-600 font-medium mb-1">
                    {t("pricing.fourPlusForms")}
                  </div>
                  <div className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full inline-block">
                    {t("pricing.save")} $40+
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Individual Forms */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              {t("browse.individualForms")}
            </h2>
            <p className="text-slate-600">
              {t("browse.individualFormsSubtitle")}
            </p>
          </div>

          {/* Category Tabs */}
          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="mb-6"
          >
            <TabsList className="w-full justify-start flex-wrap h-auto gap-2 p-2 bg-white border border-slate-200 shadow-sm">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-[rgb(0,102,204)] data-[state=active]:text-white font-medium"
                >
                  {category === "all"
                    ? t("browse.allForms")
                    : getCategoryLabel(category)}
                  <Badge variant="secondary" className="ml-2 bg-slate-100 text-slate-700">
                    {getCategoryCount(category)}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredForms.map((form) => (
              <div
                key={form.id}
                ref={highlightForm === form.id ? highlightRef : null}
                className={highlightForm === form.id ? "animate-pulse" : ""}
              >
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
                          <Badge
                            variant="outline"
                            className={getStatusColor(form.status)}
                          >
                            {getStatusLabel(form.status)}
                          </Badge>
                        </div>
                        
                        {/* Form Name */}
                        <CardDescription className="line-clamp-2 mb-3 text-slate-600 leading-relaxed">
                          {form.name}
                        </CardDescription>
                        
                        {/* Category Badge */}
                        <Badge
                          variant="outline"
                          className={cn(getCategoryColor(form.category), "font-medium")}
                        >
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

                  {/* Action Buttons */}
                  <CardContent className="pt-0 pb-6 space-y-2">
                    {isAuthenticated ? (
                      <Button asChild className="w-full h-12 bg-gradient-to-r from-[rgb(0,102,204)] to-[rgb(0,76,153)] hover:from-[rgb(0,76,153)] hover:to-[rgb(0,102,204)] text-white font-bold shadow-lg hover:shadow-xl transition-all text-base">
                        <Link href="/dashboard">
                          {t("browse.goToDashboard")}
                        </Link>
                      </Button>
                    ) : (
                      <>
                        <Button asChild className="w-full h-12 bg-gradient-to-r from-[rgb(0,102,204)] to-[rgb(0,76,153)] hover:from-[rgb(0,76,153)] hover:to-[rgb(0,102,204)] text-white font-bold shadow-lg hover:shadow-xl transition-all text-base">
                          <Link href="/auth/signup">
                            {t("browse.signUpToStart")}
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full h-11 border-2 border-slate-300 hover:border-[rgb(0,102,204)] hover:bg-blue-50 font-semibold text-slate-700 hover:text-[rgb(0,102,204)] transition-all"
                          size="sm"
                        >
                          <Link href={`/preview/${form.id}`}>
                            {t("browse.tryPreview")}
                          </Link>
                        </Button>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {filteredForms.length === 0 && (
            <Card className="p-12 text-center bg-white border-2 border-slate-200">
              <p className="text-slate-500 text-lg">
                {t("browse.noFormsFound")}
              </p>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
}
