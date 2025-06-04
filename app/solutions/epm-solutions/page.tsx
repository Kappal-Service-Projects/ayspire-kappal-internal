"use client";
import React from "react";

import { epmCapabilities } from "./epmCapabilities";

import {
  EpmHeroSection,
  AdvancedEpmSection,
  EpmValueProposition,
  EpmCapabilities,
  WhyAyspireSection,
  EpmCallToAction,
  useScrollReveal,
  newEpmSolutions,
} from "@/components/epm";

export default function EPMSolutionsPage() {
  // Initialize scroll reveal functionality
  useScrollReveal();

  return (
    <main className="min-h-[100vh] w-full dark:from-slate-900 dark:to-slate-950 scroll-smooth">
      {/* Hero Section with floating elements */}
      <EpmHeroSection />

      {/* Advanced EPM Solutions Section */}
      <AdvancedEpmSection solutions={newEpmSolutions} />

      {/* Value Proposition Section */}
      <EpmValueProposition />

      {/* EPM Capabilities Cards */}
      <EpmCapabilities capabilities={epmCapabilities} />

      {/* Why Choose Ayspire Section */}
      <WhyAyspireSection />

      {/* Call to Action Section */}
      <EpmCallToAction />
    </main>
  );
}
