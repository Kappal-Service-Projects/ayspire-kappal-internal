import React from "react";

import { useAdvancedScrollReveal } from "./useAdvancedScrollReveal";

import BlogCard from "@/components/containers/BlogCard";
import SectionHeader from "@/components/ui/SectionHeader";

interface Service {
  title: string;
  icon: string;
  desc: string;
  readMoreLink: string;
}

export default function ServicesSection({
  services,
  sectionRef,
  visible: _visible,
}: {
  services: Service[];
  sectionRef: React.RefObject<HTMLElement>;
  visible: boolean;
}) {
  const [h2Ref, h2State] = useAdvancedScrollReveal<HTMLHeadingElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

  const [descRef, descState] = useAdvancedScrollReveal<HTMLParagraphElement>({
    threshold: 0.3,
    delay: 200,
  });

  const [cardsRef, cardsState] = useAdvancedScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    delay: 400,
  });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="services-heading"
      className="relative py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden"
      id="services"
    >
      {/* Enhanced Background Pattern with Advanced Graphics */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,199,199,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(6,199,199,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,102,238,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(0,102,238,0.03),transparent_50%)]" />

      {/* Advanced Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-secondary/20 rounded-full blur-xl animate-float-gentle" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-secondary/20 to-primary-400/20 rounded-full blur-2xl animate-float-gentle-delayed" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          {/* Show heading immediately with gentle fade-in */}
          <div ref={h2Ref}>
            <SectionHeader
              animated={h2State.isVisible}
              className={`transition-all duration-700 ${h2State.isVisible ? "opacity-100 translate-y-0 animate-text-focus-in" : "opacity-70 translate-y-2"}`}
              gradientAnimation={true}
              gradientText="Services"
              id="services-heading"
              primaryText="Our"
              size="md"
            />
          </div>

          {/* Show description immediately with gentle fade-in */}
          <p
            ref={descRef}
            className={`text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${descState.isVisible ? "opacity-100 translate-y-0 animate-slide-in-blurred-bottom" : "opacity-50 translate-y-4"}`}
          >
            Supporting enterprise growth with seamless digital integration and
            transformative technology partnerships.
          </p>

          <div
            className={`w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary mx-auto mt-8 rounded-full transition-opacity duration-700 delay-400 ${descState.isVisible ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Gentle loading state for cards - simple opacity fade */}
        <div
          ref={cardsRef}
          aria-label="Our services"
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-all duration-1000 ${cardsState.isVisible ? "opacity-100 translate-y-0" : "opacity-30 translate-y-8"}`}
          role="list"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ${cardsState.isVisible ? "animate-bounce-in-top" : ""}`}
              role="listitem"
              style={{
                animationDelay: `${index * 150 + 600}ms`,
                animationFillMode: "both",
              }}
            >
              <BlogCard
                description={service.desc}
                href={service.readMoreLink}
                image={service.icon}
                title={service.title}
                width="lg"
              />
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 lg:mt-20 transition-all duration-700 delay-1000 ${cardsState.isVisible ? "opacity-100 translate-y-0 animate-slide-in-blurred-bottom" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with our expert solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              aria-label="Get started with our services"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus-outline animate-pulse-glow-hover"
              href="/contact"
            >
              Get Started Today
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
          </div>
        </div>
      </div>
    </section>
  );
}
