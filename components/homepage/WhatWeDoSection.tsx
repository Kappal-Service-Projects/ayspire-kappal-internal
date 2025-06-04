import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import SectionHeader from "../ui/SectionHeader";

import useScrollReveal from "./useScrollReveal";

export default function WhatWeDoSection() {
  const cards = [
    {
      title: "Financial & Business Services",
      color:
        "bg-gradient-to-br from-primary-100/60 via-primary-200/60 to-primary-200/40 dark:from-primary-500/40 dark:via-primary-800/30 dark:to-primary-700/20 text-primary-900 dark:text-primary-100 border border-primary-200/60 dark:border-primary-600/40 shadow-lg shadow-primary-500/15 hover:shadow-primary-400/25 hover:from-primary-200/90 hover:via-primary-300/40 hover:to-primary-400/50 transition-all duration-300",
    },
    {
      title: "Consumer",
      color:
        "bg-gradient-to-br from-blue-100/80 via-secondary/10 to-blue-200/60 dark:from-blue-900/40 dark:via-secondary/20 dark:to-blue-800/30 text-blue-900 dark:text-blue-100 border border-blue-200/60 dark:border-secondary/40 shadow-lg shadow-blue-500/15 hover:shadow-secondary/25 hover:from-blue-200/90 hover:via-secondary/15 hover:to-blue-300/70 transition-all duration-300",
    },
    {
      title: "Technology",
      color:
        "bg-gradient-to-br from-accent/8 via-cyan-100/70 to-primary-200/50 dark:from-accent/20 dark:via-cyan-900/30 dark:to-primary-800/25 text-cyan-900 dark:text-accent border border-cyan-200/60 dark:border-accent/40 shadow-lg shadow-cyan-400/15 hover:shadow-accent/25 hover:from-accent/12 hover:via-cyan-200/80 hover:to-primary-300/60 transition-all duration-300",
    },
    {
      title: "Manufacturing",
      color:
        "bg-gradient-to-br from-emerald-100/80 via-teal-100/70 to-primary-100/60 dark:from-emerald-900/40 dark:via-teal-900/30 dark:to-primary-900/25 text-emerald-900 dark:text-emerald-100 border border-emerald-200/60 dark:border-emerald-600/40 shadow-lg shadow-emerald-500/15 hover:shadow-emerald-500/25 hover:from-emerald-200/90 hover:via-teal-200/80 hover:to-primary-200/70 transition-all duration-300",
    },
    {
      title: "Media & Telecom",
      color:
        "bg-gradient-to-br from-indigo-100/80 via-blue-100/70 to-secondary/8 dark:from-indigo-900/40 dark:via-blue-900/30 dark:to-secondary/20 text-indigo-900 dark:text-indigo-100 border border-indigo-200/60 dark:border-secondary/40 shadow-lg shadow-indigo-500/15 hover:shadow-secondary/25 hover:from-indigo-200/90 hover:via-blue-200/80 hover:to-secondary/12 transition-all duration-300",
    },
    {
      title: "Pharmaceutical",
      color:
        "bg-gradient-to-br from-teal-100/80 via-accent/8 to-cyan-100/70 dark:from-teal-900/40 dark:via-accent/20 dark:to-cyan-900/30 text-teal-900 dark:text-accent border border-teal-200/60 dark:border-accent/40 shadow-lg shadow-teal-500/15 hover:shadow-accent/25 hover:from-teal-200/90 hover:via-accent/12 hover:to-cyan-200/80 transition-all duration-300",
    },
  ];

  const [leftRef, leftVisible] = useScrollReveal() as [
    React.RefObject<HTMLDivElement>,
    boolean,
  ];
  const [rightRef, rightVisible] = useScrollReveal() as [
    React.RefObject<HTMLDivElement>,
    boolean,
  ];

  return (
   <section className="py-20 bg-gradient-to-br from-primary-100 via-primary-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-5" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVisible
                ? "opacity-100 -translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
          >
            <SectionHeader
              className={`transition-all duration-700 opacity-100 translate-y-2`}
              gradientAnimation={true}
              gradientText="We Do?"
              primaryText="What Do"
              size="md"
            />
            <p className="text-xl mb-8 text-gray-800 leading-relaxed">
              Improving business performance through purposeful innovation is in
              our DNA. Ayspire strives to inspire clients to embrace positive
              change and to give them the tools they need to succeed throughout
              their digital transformation journey.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-lg text-gray-700">
                <FontAwesomeIcon
                  className="text-primary-600 mr-3"
                  icon={faCheckCircle}
                />
                Customer Engagement
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <FontAwesomeIcon
                  className="text-primary-600 mr-3"
                  icon={faCheckCircle}
                />
                Technology Enablement
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <FontAwesomeIcon
                  className="text-primary-600 mr-3"
                  icon={faCheckCircle}
                />
                Connected Planning Experience
              </li>
            </ul>
          </div>
          <div
            ref={rightRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${
              rightVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className={`backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 font-bold text-lg mb-2 ${card.color}`}
              >
                {card.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
