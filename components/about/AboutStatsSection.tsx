"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faChartLine,
  faGlobe,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

interface StatCardProps {
  icon: any;
  number: string;
  label: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, number, label, index }) => (
  <div
    className="reveal-element bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 dark:border-slate-700 group"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-secondary group-hover:scale-110 transition-transform duration-300">
      <FontAwesomeIcon className="text-white text-2xl" icon={icon} />
    </div>
    <div className="text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
      {number}
    </div>
    <div className="text-gray-600 dark:text-gray-300 font-medium">{label}</div>
  </div>
);

export const AboutStatsSection: React.FC = () => {
  const stats = [
    {
      icon: faGlobe,
      label: "Global Clients",
      number: "50+",
    },
    {
      icon: faUsers,
      label: "Team Members",
      number: "25+",
    },
    {
      icon: faAward,
      label: "Years of Excellence",
      number: "10+",
    },
    {
      icon: faChartLine,
      label: "Successful Projects",
      number: "200+",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-800 dark:to-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent_50%)]" />

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float-gentle" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float-gentle-delayed" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 reveal-element">
            Ayspire by the Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed reveal-element">
            Our commitment to excellence is reflected in our growth and the
            trust our clients place in us
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              index={index}
              label={stat.label}
              number={stat.number}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
