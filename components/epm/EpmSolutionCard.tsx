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
      className={`interactive-card bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl shadow-2xl p-8 relative overflow-hidden group h-full min-h-[500px] smooth-transform no-scroll-lag ${
        index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Enhanced gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Enhanced floating accent element - optimized */}
      <div
        className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${solution.gradient} opacity-30 floating-element will-change-transform`}
      />

      {/* Additional decorative element - optimized */}
      <div
        className={`absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br ${solution.gradient} opacity-10 floating-element will-change-transform`}
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-start gap-6 mb-8 flex-1">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-primary mb-4 group-hover:text-gradient-primary transition-all duration-300 leading-tight">
              {solution.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-left leading-relaxed text-lg">
              {solution.description}
            </p>
          </div>
        </div>

        {/* Enhanced features list */}
        <div className="grid grid-cols-2 gap-4 mt-auto">
          {solution.features.map((feature, featureIndex) => (
            <div
              key={`${solution.title}-feature-${featureIndex}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 group-hover:shadow-sm transition-all duration-300"
            >
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-br ${solution.gradient} shadow-sm`}
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-snug">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Action button */}
        {/* <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
          <button
            className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${solution.gradient} text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus-outline`}
          >
            Learn More
          </button>
        </div> */}
      </div>
    </div>
  );
};
