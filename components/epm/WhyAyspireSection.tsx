"use client";

import React from "react";

import { ContentImage } from "@/components/ui/OptimizedImage";

import { SectionHeader } from "@/components/ui/SectionHeader";

interface WhyAyspirePoint {
  text: string;
  gradient: string;
}

interface WhyAyspireProps {
  points?: WhyAyspirePoint[];
}

const defaultPoints: WhyAyspirePoint[] = [
  {
    text: "Proven expertise in Oracle EPM, analytics and cloud transformation",
    gradient: "from-primary to-secondary",
  },
  {
    text: "End-to-end EPM consulting, implementation and support",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    text: "Custom solutions tailored to your industry and business needs",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    text: "Agile, collaborative approach with a focus on measurable outcomes",
    gradient: "from-teal-500 to-green-400",
  },
  {
    text: "Trusted by leading enterprises for mission-critical EPM initiatives",
    gradient: "from-orange-500 to-red-400",
  },
];

export const WhyAyspireSection: React.FC<WhyAyspireProps> = ({
  points = defaultPoints,
}) => {
  return (
    <section className="max-w-7xl px-4 py-16 relative overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 tech-pattern pointer-events-none opacity-50" />

      {/* Floating background elements */}
      <div className="absolute top-16 right-20 w-28 h-28 rounded-full bg-gradient-to-r from-primary to-cyan-400 opacity-15 floating-element" />
      <div
        className="absolute bottom-16 left-20 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-400 opacity-20 floating-element"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-green-400 opacity-25 floating-element"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 w-full">
          <div className="flex-1">
            <div className="mb-6">
              <SectionHeader
                gradientText="Choose Ayspire for EPM?"
                primaryText="Why"
                size="md"
              />
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full shimmer-effect" />
            </div>

            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 group text-left"
                >
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${point.gradient} mt-2 group-hover:scale-125 transition-transform duration-300 flex-shrink-0`}
                  />
                  <span className="text-base md:text-lg leading-relaxed group-hover:text-primary transition-colors duration-300 text-left">
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Call-to-action button */}
            {/* <div className="mt-8">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus-outline pulse-border">
                <span>Partner with Us</span>
                <svg
                  className="w-5 h-5"
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
              </button>
            </div> */}
          </div>

          {/* Oracle Partner Logo with enhanced styling */}
          <div className="flex-1 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl" />
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <ContentImage
                  alt="Oracle Partner - Certified EPM implementation partner"
                  className="w-32 h-32 object-contain filter group-hover:brightness-110 transition-all duration-300"
                  height={128}
                  src="/images/clients/oracle.svg"
                  width={128}
                />
                <div className="mt-4 text-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Certified Oracle Partner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
