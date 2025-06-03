"use client";

import React from "react";

import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { WhyPartnerWithUsSection } from "@/components/about/WhyPartnerWithUsSection";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { AboutMissionVisionSection } from "@/components/about/AboutMissionVisionSection";
import { AboutStatsSection } from "@/components/about/AboutStatsSection";
import { useGlobalScrollReveal } from "@/components/about/useScrollReveal";

export default function AboutPage() {
  // Initialize scroll reveal for all reveal-element classes
  useGlobalScrollReveal();

  return (
    <main className="min-h-[100vh] w-full scroll-smooth">
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Why Partner With Us Section - NEW CONTENT */}
      <WhyPartnerWithUsSection />

      {/* Story Section */}
      <AboutStorySection />

      {/* Mission, Vision & Values Section */}
      <AboutMissionVisionSection />

      {/* Stats Section */}
      <AboutStatsSection />
    </main>
  );
}
