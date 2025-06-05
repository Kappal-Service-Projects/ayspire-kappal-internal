"use client";

import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";

import { EpmSolutionCard, type EpmSolution } from "./EpmSolutionCard";

import { ContentImage } from "@/components/ui/OptimizedImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useIsMobile } from "@/hooks/useDeviceDetection";

interface AdvancedEpmSectionProps {
  solutions: EpmSolution[];
}

export const AdvancedEpmSection: React.FC<AdvancedEpmSectionProps> = ({
  solutions,
}) => {
  const isMobile = useIsMobile();

  return (
    <section className="w-full py-12 md:py-16 relative">
      <div className=" z-10 max-w-full md:max-w-7xl mx-auto px-0 sm:px-4">
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

        {/* Mobile Accordion */}
        {isMobile ? (
          <div className="px-0">
            <Accordion
              className="gap-4"
              itemClasses={{
                base: "px-4 py-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-lg transition-all duration-300 ease-in-out",
                content: "pt-4 transition-all duration-300 ease-in-out",
                title: "text-lg font-semibold text-primary",
                trigger: "py-0 transition-all duration-300 ease-in-out",
              }}
              selectionMode="multiple"
              variant="splitted"
            >
              {solutions.map((solution, _index) => {
                // Get CSS class for background styling to prevent flickering
                const getBackgroundClass = (gradient: string) => {
                  if (
                    gradient.includes("from-blue") ||
                    gradient.includes("from-green") ||
                    gradient.includes("from-teal")
                  ) {
                    return "bg-indigo-50/55 dark:bg-slate-800/95 border-l-4 border-slate-300 shadow-lg";
                  } else {
                    return "bg-sky-50/45 dark:bg-gray-800/95 border-l-4 border-gray-300 shadow-lg";
                  }
                };

                return (
                  <AccordionItem
                    key={solution.title}
                    aria-label={solution.title}
                    className={`relative overflow-hidden ${getBackgroundClass(solution.gradient)}`}
                    indicator={({ isOpen }) =>
                      isOpen ? (
                        <div
                          className={`w-10 h-10 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xl font-bold transition-all duration-100`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 18L18 6M6 6l12 12"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-br ${solution.gradient} opacity-50 flex items-center justify-center text-white text-xl font-bold transition-all duration-100`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19 9l-7 7-7-7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )
                    }
                    title={
                      <div className="flex items-center justify-between w-full">
                        <div className="flex-1">
                          <SectionHeader
                            className="text-left mt-8"
                            gradientText={solution.title}
                            primaryText=""
                            size="sm"
                          />
                        </div>
                      </div>
                    }
                  >
                    <div className="space-y-4">
                      {/* Full Description */}
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {solution.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {solution.features.map((feature, featureIndex) => (
                            <div
                              key={`${solution.title}-feature-${featureIndex}`}
                              className="flex items-center gap-3 p-3 rounded-lg bg-slate-50/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-br ${solution.gradient} flex-shrink-0`}
                              />
                              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 leading-snug">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        ) : (
          /* Desktop Layout - Original Design */
          <div className="space-y-16 md:space-y-32">
            {solutions.map((solution, index) => {
              const isEven = index % 2 === 0;

              // Define different width ratios for visual variety (desktop only)
              const getWidthClasses = (_index: number) => {
                switch (_index) {
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
                  className={`relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 md:gap-8 lg:gap-12 pb-20 smooth-transform no-scroll-lag ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Background Image - Desktop Only */}
                  <div
                    className={`relative w-full ${widthClasses.image} h-64 sm:h-80 md:h-96 lg:h-[60vh] overflow-hidden rounded-2xl md:rounded-3xl will-change-transform mt-3`}
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

                  {/* Solution Card - Desktop */}
                  <div
                    className={`relative w-full px-4 md:px-10 mx-auto ${widthClasses.card} smooth-transform ${
                      isEven ? "lg:-ml-64" : "lg:-mr-64"
                    } mt-0 md:-mt-8 lg:-mt-16 xl:mt-14 z-10`}
                  >
                    <EpmSolutionCard index={index} solution={solution} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
