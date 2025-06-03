import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import SectionHeader from "../ui/SectionHeader";

import useScrollReveal from "./useScrollReveal";

export default function WhatWeDoSection() {
  const cards = [
    {
      title: "Financial and Business Services",
      color:
        "bg-gradient-to-br from-primary-500/10 via-primary-400/15 to-primary-300/20 dark:from-primary-800/30 dark:via-primary-700/25 dark:to-primary-600/20 text-primary-800 dark:text-primary-200 border border-primary-300/40 dark:border-primary-500/30 shadow-lg shadow-primary-500/10 hover:shadow-primary-500/20 hover:from-primary-500/15 hover:via-primary-400/20 hover:to-primary-300/25",
    },
    {
      title: "Consumer",
      color:
        "bg-gradient-to-br from-blue-500/10 via-blue-400/15 to-secondary/20 dark:from-blue-800/30 dark:via-blue-700/25 dark:to-secondary/20 text-blue-800 dark:text-blue-200 border border-blue-300/40 dark:border-secondary/30 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:from-blue-500/15 hover:via-blue-400/20 hover:to-secondary/25",
    },
    {
      title: "Technology, Media and Telecom",
      color:
        "bg-gradient-to-br from-cyan-400/10 via-accent/15 to-cyan-300/20 dark:from-cyan-800/30 dark:via-accent/20 dark:to-cyan-600/20 text-cyan-800 dark:text-accent border border-cyan-300/40 dark:border-accent/30 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:from-cyan-400/15 hover:via-accent/20 hover:to-cyan-300/25",
    },
    {
      title: "Manufacturing",
      color:
        "bg-gradient-to-br from-emerald-500/10 via-green-400/15 to-teal-400/20 dark:from-emerald-800/30 dark:via-green-700/25 dark:to-teal-600/20 text-emerald-800 dark:text-emerald-200 border border-emerald-300/40 dark:border-emerald-500/30 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:from-emerald-500/15 hover:via-green-400/20 hover:to-teal-400/25",
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
            {/* <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-primary-800">
              WHAT DO WE DO
            </h2> */}
            <p className="text-xl mb-8 text-gray-800 leading-relaxed">
              Improving business performance through purposeful innovation is in
              our DNA. Ayspire strives to inspire clients to embrace positive
              change and to give them the tools they need to succeed throughout
              their connected planning journey.
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
                Strategy &amp; Operations
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
