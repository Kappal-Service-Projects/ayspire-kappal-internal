"use client";

import React from "react";

export interface EpmSolution {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  gradient: string;
}

interface EpmSolutionCardProps {
  solution: EpmSolution;
  index: number;
}

export const EpmSolutionCard: React.FC<EpmSolutionCardProps> = ({
  solution,
  index,
}) => {
  return (
    <div
      className={`interactive-card bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl md:rounded-3xl shadow-2xl px-10 py-4 sm:p-6 md:p-8 relative overflow-hidden group h-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] smooth-transform no-scroll-lag ${
        index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Enhanced gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Enhanced floating accent element - Mobile Optimized - Fixed positioning */}
      <div
        className={`absolute top-2 right-2 sm:top-4 sm:right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${solution.gradient} opacity-30 floating-element will-change-transform`}
      />

      {/* Additional decorative element - Mobile Optimized */}
      <div
        className={`absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${solution.gradient} opacity-10 floating-element will-change-transform`}
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 h-full flex flex-col overflow-hidden">
        <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8 flex-1 min-w-0">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mt-6 mb-10 sm:mb-4 group-hover:text-gradient-primary transition-all duration-300 leading-tight break-words">
              {solution.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-left leading-relaxed text-sm sm:text-base md:text-lg break-words px-8">
              {solution.description}
            </p>
          </div>
        </div>

        {/* Enhanced features list - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-auto w-full">
          {solution.features.map((feature, featureIndex) => (
            <div
              key={`${solution.title}-feature-${featureIndex}`}
              className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-slate-50/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 group-hover:shadow-sm transition-all duration-300 min-w-0"
            >
              <div
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-br ${solution.gradient} shadow-sm flex-shrink-0`}
              />
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 leading-snug break-words min-w-0 flex-1">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
