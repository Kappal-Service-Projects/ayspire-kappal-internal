"use client";
import { useEffect, useState } from "react";

import StickyVideoBackground from "@/components/homepage/StickyVideoBackground";
import ServicesSection from "@/components/homepage/ServicesSection";
import ClientsSection from "@/components/homepage/ClientsSection";
import InnovationShowcaseSection from "@/components/homepage/InnovationShowcaseSection";
import FixedBgSection from "@/components/homepage/FixedBgSection";
import useScrollRevealOptimized from "@/components/homepage/useScrollRevealOptimized";
import { services, clients } from "@/config/homepageData";
import BlogCardsSection from "@/components/homepage/BlogCardsSection";
import AboutUsStaticSection from "@/components/homepage/AboutUsStaticSection";
import WhatWeDoSection from "@/components/homepage/WhatWeDoSection";
import HeroSection from "@/components/homepage/HeroSection";

export default function Home() {
  // Scroll reveal hooks for each section - using optimized version
  const [servicesRef, servicesVisible] = useScrollRevealOptimized();
  const [clientsRef, clientsVisible] = useScrollRevealOptimized();
  const [innovationRef, innovationVisible] = useScrollRevealOptimized();
  const [fixedBgRef, fixedBgVisible] = useScrollRevealOptimized();

  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile for scroll optimization
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile, { passive: true });

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    // Optimized scroll listener for mobile performance
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) return; // Prevent multiple RAF calls

      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        setShowScrollToTop(scrollY > 300);
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <>
      <StickyVideoBackground />
      <main className="relative w-full min-h-screen font-sans">
        <HeroSection />
        <ServicesSection
          sectionRef={servicesRef}
          services={services}
          visible={servicesVisible}
        />
        <WhatWeDoSection />
        <BlogCardsSection />
        <AboutUsStaticSection />
        {/* <ClientsSection
          clients={clients}
          sectionRef={clientsRef}
          visible={clientsVisible}
        /> */}
        <InnovationShowcaseSection
          sectionRef={innovationRef}
          visible={innovationVisible}
        />
        {/* <TestimonialsSection
          sectionRef={testimonialsRef}
          testimonials={testimonials.map(({ author, ...rest }) => ({
            ...rest,
            name: author,
          }))}
          visible={testimonialsVisible}
        /> */}
        <FixedBgSection sectionRef={fixedBgRef} visible={fixedBgVisible} />
        {showScrollToTop && (
          <button
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/90 shadow-lg transition-all duration-200 hover:bg-white hover:shadow-xl focus-outline"
            onClick={() => {
              // Use instant scroll on mobile to prevent conflicts with native scroll
              window.scrollTo({
                top: 0,
                behavior: isMobile ? "auto" : "smooth",
              });
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="text-primary"
                cx="24"
                cy="24"
                fill="transparent"
                r="22"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                className="text-primary"
                d="M16 28l8-8 8 8"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </svg>
          </button>
        )}
      </main>
    </>
  );
}
