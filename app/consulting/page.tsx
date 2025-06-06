"use client";
import React from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function ConsultingPage() {
  return (
    <main className="min-h-[100vh] w-full dark:from-slate-900 dark:to-slate-950 scroll-smooth mt-20">
      <section className="w-full flex flex-col items-center justify-center py-24 px-4 text-center">
        <SectionHeader
          className="text-center"
          gradientText="Consulting"
          primaryText="Business"
          size="lg"
        />
        <p className="max-w-2xl text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-10">
          We are working on a new suite of Consulting services to help you
          transform your business. Stay tuned for updates!
        </p>
        <div className="flex flex-col items-center gap-6">
          <span className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full text-lg font-semibold animate-pulse">
            Coming Soon
          </span>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
