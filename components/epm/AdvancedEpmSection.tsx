"use client";

import React from "react";
import Image from "next/image";

import { EpmSolutionCard, type EpmSolution } from "./EpmSolutionCard";

interface AdvancedEpmSectionProps {
  solutions: EpmSolution[];
}

export const AdvancedEpmSection: React.FC<AdvancedEpmSectionProps> = ({
  solutions,
}) => {
  return (
    <section className="w-full py-16 relative">
      <div className="absolute inset-0 tech-pattern pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Advanced EPM Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our cutting-edge Enterprise Performance Management (EPM)
            solutions designed to transform your business planning and
            performance management
          </p>
        </div>

        {/* Solution Cards with Images */}
        <div className="space-y-32">
          {solutions.map((solution, index) => {
            const isEven = index % 2 === 0;

            // Define different width ratios for visual variety
            const getWidthClasses = (index: number) => {
              switch (index) {
                case 0:
                  return { image: "flex-[3]", card: "flex-[2]" }; // 60% image, 40% card
                case 1:
                  return { image: "flex-[2]", card: "flex-[3]" }; // 40% image, 60% card
                case 2:
                  return { image: "flex-[2]", card: "flex-[4]" }; // 33% image, 67% card - wider card
                case 3:
                  return { image: "flex-[3]", card: "flex-[4]" }; // 43% image, 57% card
                default:
                  return { image: "flex-1", card: "flex-1" }; // 50/50 fallback
              }
            };

            const widthClasses = getWidthClasses(index);

            return (
              <div
                key={solution.title}
                className={`relative flex items-center justify-between gap-12 smooth-transform no-scroll-lag ${
                  isEven ? "flex-row" : "flex-row-reverse"
                } max-lg:flex-col max-lg:gap-8`}
              >
                {/* Background Image - optimized */}
                <div
                  className={`relative ${widthClasses.image} h-[600px] max-lg:h-[400px] overflow-hidden rounded-3xl will-change-transform`}
                >
                  <Image
                    fill
                    alt={`${solution.title} Background`}
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

                {/* Overlapping Solution Card - optimized */}
                <div
                  className={`relative ${widthClasses.card} smooth-transform ${
                    isEven ? "-ml-64 max-lg:ml-0" : "-mr-64 max-lg:mr-0"
                  } max-lg:-mt-20 z-10`}
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
