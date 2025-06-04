"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faEye,
  faUsers,
  faLightbulb,
  faShield,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "@/components/ui/SectionHeader";

interface MissionVisionCardProps {
  icon: any;
  title: string;
  description: string;
  type: "mission" | "vision";
}

interface ValueCardProps {
  icon: any;
  title: string;
  description: string;
  index: number;
}

const MissionVisionCard: React.FC<MissionVisionCardProps> = ({
  icon,
  title,
  description,
  type,
}) => (
  <div
    className={`reveal-element bg-gradient-to-br ${type === "mission" ? "from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900" : "from-secondary/20 to-primary-100 dark:from-secondary/10 dark:to-primary-900"} rounded-2xl p-8 h-full`}
  >
    <div className="flex justify-center mb-6">
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${type === "mission" ? "from-primary-500 to-primary-600" : "from-secondary to-primary-500"}`}
      >
        <FontAwesomeIcon className="text-white text-2xl" icon={icon} />
      </div>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      {title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
      {description}
    </p>
  </div>
);

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  index,
}) => (
  <div
    className="reveal-element bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-slate-700 group"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="flex justify-center mb-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary group-hover:scale-110 transition-transform duration-300">
        <FontAwesomeIcon className="text-white text-lg" icon={icon} />
      </div>
    </div>
    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      {title}
    </h4>
    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
      {description}
    </p>
  </div>
);

export const AboutMissionVisionSection: React.FC = () => {
  const values = [
    {
      description:
        "Every decision we make is guided by our commitment to client success and satisfaction.",
      icon: faUsers,
      title: "Client-Centric",
    },
    {
      description:
        "We continuously explore new technologies and methodologies to deliver cutting-edge solutions.",
      icon: faLightbulb,
      title: "Innovation",
    },
    {
      description:
        "We operate with transparency, honesty and ethical standards in all our business practices.",
      icon: faShield,
      title: "Integrity",
    },
    {
      description:
        "We believe in the power of partnership and work closely with our clients as an extension of their team.",
      icon: faHeart,
      title: "Collaboration",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,238,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,238,0.02),transparent_50%)]" />

      <div className="max-w-7xl mx-auto">
        {/* Mission & Vision Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <MissionVisionCard
            description="To empower organizations with connected planning and analytics solutions that drive smarter decision-making, foster innovation and accelerate sustainable growth in an ever-evolving digital landscape."
            icon={faBullseye}
            title="Our Mission"
            type="mission"
          />
          <MissionVisionCard
            description="To be the global leader in enterprise performance management, transforming how organizations plan, analyze and execute their strategies through innovative technology and unparalleled expertise."
            icon={faEye}
            title="Our Vision"
            type="vision"
          />
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <SectionHeader
            className="mt-10 mb-4 reveal-element"
            gradientAnimation={true}
            gradientText="Values"
            primaryText="Our"
            size="md"
          />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed reveal-element">
            The principles that guide our actions and define our culture
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              description={value.description}
              icon={value.icon}
              index={index}
              title={value.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
