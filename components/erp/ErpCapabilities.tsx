"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSitemap,
  faCloud,
  faChartLine,
  faCogs,
  faShieldAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

import { SectionHeader } from "@/components/ui/SectionHeader";

interface ErpCapability {
  title: string;
  description: string;
  imageUrl: string;
  icon?: string; // Added icon property
}

interface ErpCapabilitiesProps {
  capabilities: ErpCapability[];
}

// Icon components for different ERP capabilities
const CapabilityIcon: React.FC<{ icon: string }> = ({ icon }) => {
  // Map capability types to appropriate FontAwesome icons
  const getIcon = () => {
    switch (icon) {
      case "unified":
      case "unified business processes":
        return faSitemap;
      case "cloud":
      case "cloud erp transformation":
        return faCloud;
      case "analytics":
      case "advanced analytics & reporting":
        return faChartLine;
      case "automation":
      case "process automation":
        return faCogs;
      case "compliance":
      case "regulatory compliance":
        return faShieldAlt;
      case "support":
      case "expert implementation & support":
        return faUserTie;
      default:
        return faCogs; // Default icon
    }
  };

  return (
    <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-secondary group-hover:scale-110 transition-transform duration-300">
      <FontAwesomeIcon className="text-white text-2xl" icon={getIcon()} />
    </div>
  );
};

const CapabilityCard: React.FC<{
  capability: ErpCapability;
  index: number;
}> = ({ capability, index }) => (
  <div
    className="reveal-element bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg flex flex-col items-center p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <CapabilityIcon icon={capability.icon || capability.title.toLowerCase()} />
    <h3 className="text-xl font-semibold text-primary mb-4">
      {capability.title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300 text-base font-light leading-relaxed">
      {capability.description}
    </p>
  </div>
);

export const ErpCapabilities: React.FC<ErpCapabilitiesProps> = ({
  capabilities,
}) => {
  return (
    <section className="w-full px-4 py-10 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          gradientText="Capabilities"
          primaryText="Our ERP"
          size="md"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={capability.title}
              capability={capability}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
