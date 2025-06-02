import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import useScrollReveal from "./useScrollReveal";

export default function WhatWeDoSection() {
  const cards = [
    {
      title: "Financial and Business Services",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100",
    },
    {
      title: "Consumer",
      color:
        "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100",
    },
    {
      title: "Technology, Media and Telecom",
      color:
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100",
    },
    {
      title: "Manufacturing",
      color:
        "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100",
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-primary-800">
              WHAT DO WE DO
            </h2>
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
            className={`grid grid-cols-2 gap-6 transition-all duration-700 ${
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
