"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faChartLine,
  faChartBar,
  faCogs,
  faCloud,
  faUserTie,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

import { SectionHeader } from "@/components/ui/SectionHeader";

interface EpmCapability {
  title: string;
  description: string;
  imageUrl: string;
  icon?: string; // Added icon property
}

interface EpmCapabilitiesProps {
  capabilities: EpmCapability[];
}

// Icon components for different EPM capabilities
const CapabilityIcon: React.FC<{ icon: string }> = ({ icon }) => {
  // Map capability types to appropriate FontAwesome icons
  const getIcon = () => {
    switch (icon) {
      case "planning":
        return faClipboardList;
      case "forecasting":
        return faProjectDiagram;
      case "analytics":
        return faChartLine;
      case "reporting":
        return faChartBar;
      case "integration":
        return faCogs;
      case "cloud":
        return faCloud;
      default:
        return faUserTie; // Default icon
    }
  };

  return (
    <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-secondary group-hover:scale-110 transition-transform duration-300">
      <FontAwesomeIcon className="text-white text-2xl" icon={getIcon()} />
    </div>
  );
};

const CapabilityCard: React.FC<{ capability: EpmCapability }> = ({
  capability,
}) => (
  <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg flex flex-col items-center p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
    <CapabilityIcon icon={capability.icon || capability.title.toLowerCase()} />

    <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-gradient-primary transition-all duration-300">
      {capability.title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300 text-base font-light leading-relaxed">
      {capability.description}
    </p>
  </div>
);

export const EpmCapabilities: React.FC<EpmCapabilitiesProps> = ({
  capabilities,
}) => {
  return (
    <section className="max-w-7xl px-4 py-10">
      <SectionHeader
        gradientText="Capabilities"
        primaryText="Our EPM"
        size="md"
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
        {capabilities.map((capability) => (
          <CapabilityCard key={capability.title} capability={capability} />
        ))}
      </div>
    </section>
  );
};
