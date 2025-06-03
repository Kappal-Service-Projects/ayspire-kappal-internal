"use client";

import React from "react";
import Image from "next/image";

interface ErpCapability {
  title: string;
  description: string;
  imageUrl: string;
}

interface ErpCapabilitiesProps {
  capabilities: ErpCapability[];
}

const CapabilityCard: React.FC<{
  capability: ErpCapability;
  index: number;
}> = ({ capability, index }) => (
  <div
    className="reveal-element bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg flex flex-col items-center p-7 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <Image
      alt={capability.title}
      className="mb-4 rounded-lg object-contain bg-slate-100 dark:bg-slate-800 p-2"
      height={120}
      src={capability.imageUrl}
      width={120}
    />
    <h3 className="text-xl font-semibold text-primary mb-2">
      {capability.title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300 text-base font-light">
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary reveal-element">
          Our ERP Capabilities
        </h2>
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
