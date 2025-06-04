"use client";

import React from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";

interface InnovationCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  gradient: string;
}

const innovationData: InnovationCard[] = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M13 10V3L4 14h7v7l9-11h-7z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    title: "AI-Powered Analytics",
    description:
      "Advanced machine learning algorithms that provide predictive insights and automate complex decision-making processes.",
    metric: "300%",
    metricLabel: "Faster Insights",
    gradient: "from-blue-300 via-purple-300 to-pink-300",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    title: "Connected Planning",
    description:
      "Integrate financial, operational and strategic plans for unified business performance. Break down silos and enable real-time collaboration across departments.",
    metric: "95%",
    metricLabel: "Planning Accuracy",
    gradient: "from-emerald-300 via-teal-300 to-cyan-300",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    title: "Human-Centric Design",
    description:
      "Intuitive interfaces designed with user experience at the forefront, reducing training time and increasing adoption.",
    metric: "85%",
    metricLabel: "User Satisfaction",
    gradient: "from-orange-300 via-red-300 to-pink-300",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    title: "Scalable Infrastructure",
    description:
      "Cloud-native architecture that grows with your business, handling millions of transactions seamlessly.",
    metric: "10M+",
    metricLabel: "Transactions/Day",
    gradient: "from-violet-300 via-indigo-300 to-blue-300",
  },
];

interface InnovationShowcaseSectionProps {
  sectionRef?: React.RefObject<HTMLElement>;
  visible?: boolean;
}

export default function InnovationShowcaseSection({
  sectionRef,
}: InnovationShowcaseSectionProps) {
  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-300 rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-300 to-cyan-200 rounded-full opacity-10 blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <SectionHeader
            className="text-center mb-6"
            gradientText="Innovation powered with AI"
            primaryText="Driving the future of"
            size="lg"
          />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We&apos;re not just building software – we&apos;re architecting the
            future of business technology. Explore how our cutting-edge
            innovations are transforming industries worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {innovationData.map((item, index) => (
            <div
              key={index}
              className="group relative transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full relative overflow-hidden flex flex-col">
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-6 relative z-10`}
                >
                  {item.icon}
                </div>

                {/* Content - flex-grow to push metric to bottom */}
                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  {/* Metric - aligned to bottom */}
                  {/* <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                    <div
                      className={`text-2xl font-bold bg-gradient-to-r contrast-125 drop-shadow-lg  text-slate-500 bg-clip-text text-transparent mb-1`}
                    >
                      {item.metric}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {item.metricLabel}
                    </div>
                  </div> */}
                </div>

                {/* Hover Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
            <span>Explore Our Technology Stack</span>
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
    </section>
  );
}
