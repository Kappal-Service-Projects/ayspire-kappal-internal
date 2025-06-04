"use client";

import React from "react";

import { ContentImage } from "@/components/ui/OptimizedImage";

import { EpmSolutionCard, type EpmSolution } from "./EpmSolutionCard";

import { SectionHeader } from "@/components/ui/SectionHeader";

interface AdvancedEpmSectionProps {
  solutions: EpmSolution[];
}

export const AdvancedEpmSection: React.FC<AdvancedEpmSectionProps> = ({
  solutions,
}) => {
  return (
    <section className="w-full py-12 md:py-16 relative">
      <div className="absolute inset-0 tech-pattern pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-screen md:max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <SectionHeader
            gradientText="and Managed Services"
            primaryText="EPM Implementation"
            size="lg"
          />
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-screen md:max-w-3xl mx-auto px-4">
            Discover our cutting-edge Enterprise Performance Management (EPM)
            solutions designed to transform your business planning and
            performance management
          </p>
        </div>

        {/* Solution Cards - Mobile Optimized */}
        <div className="space-y-16 md:space-y-32">
          {solutions.map((solution, index) => {
            const isEven = index % 2 === 0;

            // Define different width ratios for visual variety (desktop only)
            const getWidthClasses = (index: number) => {
              switch (index) {
                case 0:
                  return { image: "lg:flex-[3]", card: "lg:flex-[2]" }; // 60% image, 40% card
                case 1:
                  return { image: "lg:flex-[2]", card: "lg:flex-[3]" }; // 40% image, 60% card
                case 2:
                  return { image: "lg:flex-[2]", card: "lg:flex-[4]" }; // 33% image, 67% card - wider card
                case 3:
                  return { image: "lg:flex-[3]", card: "lg:flex-[4]" }; // 43% image, 57% card
                default:
                  return { image: "lg:flex-1", card: "lg:flex-1" }; // 50/50 fallback
              }
            };

            const widthClasses = getWidthClasses(index);

            return (
              <div
                key={solution.title}
                className={`relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 md:gap-8 lg:gap-12 smooth-transform no-scroll-lag ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Background Image - Mobile Optimized */}
                <div
                  className={`relative w-full ${widthClasses.image} h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden rounded-2xl md:rounded-3xl will-change-transform mt-2.5`}
                >
                  <ContentImage
                    fill
                    alt={`${solution.title} - Enterprise Performance Management solution by Ayspire`}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index < 2}
                    src={solution.imageUrl}
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-${isEven ? "r" : "l"} ${solution.gradient} opacity-20`}
                  />
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Solution Card - Mobile Optimized */}
                <div
                  className={`relative w-[calc(100%+1.5rem)] sm:w-[calc(100%+2rem)] md:w-full mx-auto ${widthClasses.card} smooth-transform ${
                    isEven ? "lg:-ml-64" : "lg:-mr-64"
                  } -mt-8 sm:-mt-12 md:-mt-16 lg:mt-14 z-10`}
                >
                  <EpmSolutionCard index={index} solution={solution} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
