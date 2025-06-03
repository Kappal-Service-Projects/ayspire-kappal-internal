"use client";

import React from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ColorChip } from "@/components/containers/chips";

interface FloatingElementProps {
  className: string;
  style?: React.CSSProperties;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  className,
  style,
}) => <div className={className} style={style} />;

export const ErpHeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-8 text-center relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* Floating background elements for artistic effect - optimized for smooth performance */}
      <FloatingElement className="absolute top-10 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 opacity-20 floating-element will-change-transform" />
      <FloatingElement
        className="absolute bottom-0 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-secondary to-primary-300 opacity-30 floating-element will-change-transform"
        style={{ animationDelay: "2s" }}
      />
      <FloatingElement
        className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary opacity-25 floating-element will-change-transform"
        style={{ animationDelay: "4s" }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="reveal-element">
          <ColorChip />
        </div>

        <SectionHeader
          className="text-center max-w-4xl"
          gradientText="Resource Planning (ERP)"
          primaryText="Enterprise"
          size="lg"
        />

        <p className="max-w-4xl text-center justify-center items-center text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-6 reveal-element">
          Modernize your business with Ayspire&apos;s Oracle and Anaplan-based
          ERP solutions. Integrate every function, automate processes, and gain
          real-time insights for smarter, faster decisions.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-4 reveal-element">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Unified Platform
          </span>
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Cloud ERP
          </span>
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Automation
          </span>
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Analytics
          </span>
        </div>
      </div>
    </section>
  );
};
