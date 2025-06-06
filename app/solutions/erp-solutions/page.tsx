"use client";
import React from "react";

import { erpCapabilities } from "./erpCapabilities";

import {
  ErpHeroSection,
  ErpCapabilities,
  ErpCallToAction,
  useScrollReveal,
} from "@/components/erp";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function ERPSolutionsPage() {
  // Initialize scroll reveal functionality
  useScrollReveal();

  return (
    <main className="min-h-[100vh] w-full scroll-smooth mt-20">
      {/* Hero Section with floating elements */}
      <ErpHeroSection />

      {/* ERP Capabilities Cards */}
      <ErpCapabilities capabilities={erpCapabilities} />

      {/* ERP Challenges Section */}
      {/* <ErpChallengesSection /> */}

      {/* Why Choose Ayspire Section */}
      {/* <WhyAyspireErpSection /> */}

      {/* Call to Action Section */}
      <ErpCallToAction />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
