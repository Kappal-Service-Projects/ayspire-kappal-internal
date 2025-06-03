"use client";

import React from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";

export const ErpCallToAction: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto relative">
        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-primary-400/20 to-secondary/20 rounded-full blur-xl animate-float-gentle" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary-400/20 rounded-full blur-2xl animate-float-gentle-delayed" />

        <div className="relative z-10">
          <SectionHeader
            gradientText="Your ERP?"
            primaryText="Ready to Modernize"
            size="md"
          />
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 reveal-element">
            Discover how Ayspire can help you unify, automate, and optimize your
            business with next-generation ERP solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal-element">
            <a
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus-outline animate-pulse-glow-hover"
              href="/contact"
            >
              Get Started with Ayspire
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </a>
            <a
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold px-8 py-4 rounded-2xl border-2 border-primary-200 dark:border-primary-800 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-950/50 hover:scale-105 transition-all duration-300 focus-outline"
              href="/products/epm-solutions"
            >
              Explore EPM Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
