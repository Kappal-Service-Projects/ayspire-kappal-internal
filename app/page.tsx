"use client";
import { useEffect, useState } from "react";

import StickyVideoBackground from "@/components/homepage/StickyVideoBackground";
import HeroSection from "@/components/homepage/HeroSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import ClientsSection from "@/components/homepage/ClientsSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import FixedBgSection from "@/components/homepage/FixedBgSection";
import useScrollReveal from "@/components/homepage/useScrollReveal";
import { services, clients, testimonials } from "@/config/homepageData";
import BlogCardsSection from "@/components/homepage/BlogCardsSection";
import AboutUsStaticSection from "@/components/homepage/AboutUsStaticSection";
import WhatWeDoSection from "@/components/homepage/WhatWeDoSection";

export default function Home() {
  // For smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  // Scroll reveal hooks for each section
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [clientsRef, clientsVisible] = useScrollReveal();
  const [testimonialsRef, testimonialsVisible] = useScrollReveal();
  const [fixedBgRef, fixedBgVisible] = useScrollReveal();

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <StickyVideoBackground />
      <main className="relative w-screen min-h-screen font-sans overflow-x-hidden">
        <HeroSection />
        <ServicesSection
          sectionRef={servicesRef}
          services={services}
          visible={servicesVisible}
        />
        <WhatWeDoSection />
        <BlogCardsSection />
        <AboutUsStaticSection />
        <ClientsSection
          clients={clients}
          sectionRef={clientsRef}
          visible={clientsVisible}
        />
        <TestimonialsSection
          sectionRef={testimonialsRef}
          testimonials={testimonials.map(({ author, ...rest }) => ({
            ...rest,
            name: author,
          }))}
          visible={testimonialsVisible}
        />
        <FixedBgSection sectionRef={fixedBgRef} visible={fixedBgVisible} />
        {showScroll && (
          <button
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/90 shadow-lg transition-all duration-200 hover:bg-white hover:shadow-xl focus-outline"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
