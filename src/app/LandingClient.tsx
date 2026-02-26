"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, MessageCircle, FileText, Shield } from "lucide-react";
import { SituationSelector } from "@/components/SituationSelector";
import { DocumentsIllustration, SecureDataIllustration } from "@/components/ui/illustrations";
import { useTranslations } from "next-intl";

export function LandingClient() {
  const t = useTranslations("landing");

  return (
    <>
      {/* Hero Section - TurboTax inspired */}
      <section className="relative bg-white py-16 md:py-24 px-4 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-slate-50/30 -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-6 border border-green-200">
                <Shield className="w-4 h-4" />
                <span>{t("trustBadge")}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                {t("heroTitle")}
                <span className="block text-[rgb(0,102,204)] mt-2">
                  {t("heroTitleHighlight")}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                {t("heroSubtitle")}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/browse">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-[rgb(0,102,204)] hover:bg-[rgb(0,76,153)] shadow-lg hover:shadow-xl transition-all text-white font-semibold rounded-lg"
                  >
                    {t("getStarted")}
                  </Button>
                </Link>
                <Link href="/browse">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-2 border-slate-300 hover:border-[rgb(0,102,204)] hover:bg-blue-50 font-semibold rounded-lg"
                  >
                    {t("browseAllForms")}
                  </Button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Secure & Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Auto-Save Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Expert Guidance</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Video with Cool Effects */}
            <div className="hidden lg:block relative">
              {/* Glow effect behind video */}
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(0,102,204)] to-purple-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Video container */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2 transform hover:scale-105 transition-transform duration-500">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-2xl"
                  >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm animate-bounce">
                  ✓ Trusted
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[rgb(0,102,204)] text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm">
                  🚀 Fast & Easy
                </div>
              </div>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-12 max-w-3xl">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg px-6 py-4 shadow-sm">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-900 mb-1">Important:</p>
                  <p className="text-sm text-amber-800 leading-relaxed">{t("disclaimer")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Situation Selector */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t("situationTitle")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("situationSubtitle")}
            </p>
          </div>
          <SituationSelector />
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t("howItWorksTitle")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("howItWorksSubtitle")}
            </p>
          </div>
          
          {/* Feature Image with Cool Effects */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="relative group">
              {/* Animated gradient background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(0,102,204)] via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-3 transform group-hover:scale-[1.02] transition-all duration-500">
                  <img
                    src="/image.png"
                    alt="Immigration Form Preparation Platform"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0,102,204)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
                
                {/* Floating feature badges */}
                <div className="absolute -top-6 left-8 bg-white px-6 py-3 rounded-full shadow-xl border-2 border-green-200 transform -rotate-2 hover:rotate-0 transition-transform">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-slate-900">Auto-Save</span>
                  </div>
                </div>
                
                <div className="absolute -top-6 right-8 bg-white px-6 py-3 rounded-full shadow-xl border-2 border-blue-200 transform rotate-2 hover:rotate-0 transition-transform">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[rgb(0,102,204)]" />
                    <span className="font-bold text-slate-900">Secure</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full shadow-xl font-bold transform hover:scale-110 transition-transform">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    <span>Instant PDF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <Card className="border-2 border-slate-200 hover:border-[rgb(0,102,204)] hover:shadow-xl transition-all duration-300 h-full bg-white">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[rgb(0,102,204)] to-[rgb(0,76,153)] rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <CardTitle className="text-xl mb-3 text-slate-900 font-bold">
                    {t("step1Title")}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-slate-600">
                    {t("step1Description")}
                  </CardDescription>
                </CardHeader>
              </Card>
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[rgb(0,102,204)] to-transparent -z-10"></div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <Card className="border-2 border-slate-200 hover:border-[rgb(0,102,204)] hover:shadow-xl transition-all duration-300 h-full bg-white">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[rgb(0,102,204)] to-[rgb(0,76,153)] rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <CardTitle className="text-xl mb-3 text-slate-900 font-bold">
                    {t("step2Title")}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-slate-600">
                    {t("step2Description")}
                  </CardDescription>
                </CardHeader>
              </Card>
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[rgb(0,102,204)] to-transparent -z-10"></div>
            </div>
            
            {/* Step 3 */}
            <Card className="border-2 border-slate-200 hover:border-[rgb(0,102,204)] hover:shadow-xl transition-all duration-300 h-full bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[rgb(0,102,204)] to-[rgb(0,76,153)] rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <CardTitle className="text-xl mb-3 text-slate-900 font-bold">
                  {t("step3Title")}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-slate-600">
                  {t("step3Description")}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t("featuresTitle")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to prepare your immigration forms with confidence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[rgb(0,102,204)]" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{t("feature1Title")}</h3>
                <p className="text-slate-600 leading-relaxed">{t("feature1Description")}</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{t("feature2Title")}</h3>
                <p className="text-slate-600 leading-relaxed">{t("feature2Description")}</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{t("feature3Title")}</h3>
                <p className="text-slate-600 leading-relaxed">{t("feature3Description")}</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{t("feature4Title")}</h3>
                <p className="text-slate-600 leading-relaxed">{t("feature4Description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-br from-[rgb(0,102,204)] to-[rgb(0,76,153)] px-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6bTAtNWg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            {t("ctaSubtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/browse">
              <Button
                size="lg"
                className="text-lg px-10 py-6 bg-white text-[rgb(0,102,204)] hover:bg-slate-50 shadow-xl hover:shadow-2xl font-bold rounded-lg transition-all"
              >
                {t("browseAllForms")}
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg backdrop-blur-sm"
              >
                {t("createAccount")}
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Start for free</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[rgb(0,102,204)] to-[rgb(0,76,153)] rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white">ImmigrationPrep</span>
              </div>
              <p className="text-sm text-slate-400 max-w-md">
                Simplifying immigration form preparation with guided assistance and expert support.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/browse" className="block text-sm hover:text-white transition-colors">
                  Browse Forms
                </Link>
                <Link href="/dashboard" className="block text-sm hover:text-white transition-colors">
                  Dashboard
                </Link>
              </div>
            </div>
            
            {/* Legal */}
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-sm hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/disclaimer" className="block text-sm hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="border-t border-slate-800 pt-8">
            <p className="text-sm text-slate-400 mb-4">
              <strong className="text-slate-300">{t("footerDisclaimerTitle")}:</strong>{" "}
              {t("footerDisclaimerText")}
            </p>
            <p className="text-sm text-slate-500 text-center">
              {t("copyright")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
