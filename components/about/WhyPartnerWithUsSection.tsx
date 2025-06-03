"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faLightbulb,
  faRocket,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";

interface WhyPartnerCardProps {
  icon: any;
  title: string;
  description: string;
  index: number;
}

const WhyPartnerCard: React.FC<WhyPartnerCardProps> = ({
  icon,
  title,
  description,
  index,
}) => (
  <div
    className="reveal-element bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700 group"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-secondary group-hover:scale-110 transition-transform duration-300">
      <FontAwesomeIcon className="text-white text-2xl" icon={icon} />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
      {description}
    </p>
  </div>
);

export const WhyPartnerWithUsSection: React.FC = () => {
  const partnerships = [
    {
      icon: faHandshake,
      title: "Remarkable Customer Service",
      description:
        "We go above and beyond to ensure your success. Our dedicated support team provides personalized attention, rapid response times, and proactive solutions that keep your business running smoothly.",
    },
    {
      icon: faRocket,
      title: "Unparalleled Resources",
      description:
        "Access to cutting-edge technology, industry expertise, and a global network of partners. We bring enterprise-grade resources and best practices to accelerate your digital transformation journey.",
    },
    {
      icon: faBullseye,
      title: "Pragmatic Approach",
      description:
        "We deliver practical, results-driven solutions tailored to your unique business needs. Our methodical approach ensures sustainable outcomes that align with your strategic objectives and operational realities.",
    },
    {
      icon: faLightbulb,
      title: "Inventing What&apos;s Next",
      description:
        "Stay ahead of the curve with our innovative thinking and forward-looking solutions. We continuously evolve our offerings to anticipate market trends and emerging technologies that will shape your industry&apos;s future.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,199,199,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(6,199,199,0.03),transparent_50%)]" /> */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,102,238,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(0,102,238,0.03),transparent_50%)]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-secondary/20 rounded-full blur-xl animate-float-gentle" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-secondary/20 to-primary-400/20 rounded-full blur-2xl animate-float-gentle-delayed" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight reveal-element">
            <span className="text-primary-600 dark:text-primary-400">
              Why Partner{" "}
            </span>
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              With Us?
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed reveal-element">
            Discover the advantages that make Ayspire your ideal partner for
            digital transformation and business growth.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary mx-auto mt-8 rounded-full reveal-element" />
        </div>

        {/* Partnership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {partnerships.map((partnership, index) => (
            <WhyPartnerCard
              key={partnership.title}
              description={partnership.description}
              icon={partnership.icon}
              index={index}
              title={partnership.title}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 lg:mt-20 reveal-element">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to experience the Ayspire difference? Let&apos;s start your
            transformation journey together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              aria-label="Partner with us today"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus-outline animate-pulse-glow-hover"
              href="/contact"
            >
              Partner with Us
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
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
            </a>
            <a
              aria-label="Learn more about our story"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold px-8 py-4 rounded-2xl border-2 border-primary-200 dark:border-primary-800 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-950/50 hover:scale-105 transition-all duration-300 focus-outline"
              href="#story"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
