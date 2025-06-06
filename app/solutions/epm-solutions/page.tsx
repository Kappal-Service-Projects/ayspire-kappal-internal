"use client";
import React from "react";

import { epmCapabilities } from "./epmCapabilities";

import {
  AdvancedEpmSection,
  EpmValueProposition,
  EpmCapabilities,
  EpmCallToAction,
  useScrollReveal,
  newEpmSolutions,
} from "@/components/epm";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function EPMSolutionsPage() {
  // Initialize scroll reveal functionality
  useScrollReveal();

  return (
    <main className="min-h-[100vh] w-full dark:from-slate-900 dark:to-slate-950 scroll-smooth mt-20">
      {/* Hero Section with floating elements */}
      {/* <EpmHeroSection /> */}

      {/* Advanced EPM Solutions Section */}
      <AdvancedEpmSection solutions={newEpmSolutions} />

      {/* Value Proposition Section */}
      <EpmValueProposition />

      {/* EPM Capabilities Cards */}
      <EpmCapabilities capabilities={epmCapabilities} />

      {/* Why Choose Ayspire Section */}
      {/* <WhyAyspireSection /> */}

      {/* Call to Action Section */}
      <EpmCallToAction />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
