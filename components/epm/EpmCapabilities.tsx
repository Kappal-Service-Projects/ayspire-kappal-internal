"use client";

import React from "react";

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
  // Map capability types to appropriate icons
  const getIcon = () => {
    switch (icon) {
      case "planning":
        return (
          <svg
            className="w-12 h-12 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M12 12H15"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M12 16H15"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M9 12H9.01"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M9 16H9.01"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M12 3V7"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        );
      case "forecasting":
        return (
          <svg
            className="w-12 h-12 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M8 13H12"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M8 17H16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        );
      case "analytics":
        return (
          <svg
            className="w-12 h-12 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20.5H14C18.5 20.5 20.5 18.5 20.5 14V10C20.5 5.5 18.5 3.5 14 3.5H10C5.5 3.5 3.5 5.5 3.5 10V14C3.5 18.5 5.5 20.5 10 20.5Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M16.5 16.5L12.5 14.5V7.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M7.5 10.5V16.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        );
      case "reporting":
        return (
          <svg
            className="w-12 h-12 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9.5V14.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M10 8V16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M14 10.5V13.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M18 9V15"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        );
      case "integration":
        return (
          <svg
            className="w-12 h-12 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 9.5H12.47"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M5.93 13L2.05 9.5L5.93 6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M22 14.5H11.53"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M18.07 18L21.95 14.5L18.07 11"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        );
      case "cloud":
        return (
          <svg
            className="w-12 h-12 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 19C3.6 19 1.25 16.65 1.25 13.75C1.25 11.21 2.94 9.08 5.33 8.58C5.74 5.56 8.33 3.25 11.5 3.25C15.06 3.25 17.94 6.13 17.94 9.69C17.94 10.08 17.9 10.45 17.82 10.81C17.89 10.81 17.96 10.8 18.04 10.8C20.54 10.8 22.54 12.79 22.54 15.3C22.54 17.8 20.54 19.8 18.04 19.8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M10.21 15.77L12.27 13.71L14.33 15.77"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M12.27 13.71V20.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-12 h-12 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9 2H9.1C8.42 2 7.86 2.56 7.86 3.24V4.03C7.86 4.71 8.42 5.27 9.1 5.27H14.9C15.58 5.27 16.14 4.71 16.14 4.03V3.24C16.14 2.56 15.58 2 14.9 2Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M16.14 4.03L17.19 6.3C17.9 7.85 17.38 9.8 15.83 10.51L9.12 13.92"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M7.86 4.03L6.81 6.3C6.1 7.85 6.62 9.8 8.17 10.51L14.88 13.92"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M12 14V19"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M15 19L12 22L9 19"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        );
    }
  };

  return (
    <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-4 transition-transform duration-300 transform group-hover:scale-110 group-hover:bg-opacity-70">
      {getIcon()}
    </div>
  );
};

const CapabilityCard: React.FC<{ capability: EpmCapability }> = ({
  capability,
}) => (
  <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg flex flex-col items-center p-7 text-center hover:shadow-xl transition-all duration-300">
    <CapabilityIcon icon={capability.icon || capability.title.toLowerCase()} />

    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-gradient-primary transition-all duration-300">
      {capability.title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300 text-base font-light">
      {capability.description}
    </p>
  </div>
);

export const EpmCapabilities: React.FC<EpmCapabilitiesProps> = ({
  capabilities,
}) => {
  return (
    <section className="max-w-7xl px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-20 text-gradient-primary">
        Our EPM Capabilities
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
        {capabilities.map((capability) => (
          <CapabilityCard key={capability.title} capability={capability} />
        ))}
      </div>
    </section>
  );
};
