"use client";
import React from "react";

import { erpCapabilities } from "./erpCapabilities";

import {
  ErpHeroSection,
  ErpCapabilities,
  ErpChallengesSection,
  WhyAyspireErpSection,
  ErpCallToAction,
  useScrollReveal,
} from "@/components/erp";

export default function ERPSolutionsPage() {
  // Initialize scroll reveal functionality
  useScrollReveal();

  return (
    <main className="min-h-[100vh] w-full scroll-smooth">
      {/* Hero Section with floating elements */}
      <ErpHeroSection />

      {/* ERP Capabilities Cards */}
      <ErpCapabilities capabilities={erpCapabilities} />

      {/* ERP Challenges Section */}
      <ErpChallengesSection />

      {/* Why Choose Ayspire Section */}
      <WhyAyspireErpSection />

      {/* Call to Action Section */}
      <ErpCallToAction />
    </main>
  );
}
