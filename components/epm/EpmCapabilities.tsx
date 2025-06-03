"use client";

import React from "react";
import Image from "next/image";

interface EpmCapability {
  title: string;
  description: string;
  imageUrl: string;
}

interface EpmCapabilitiesProps {
  capabilities: EpmCapability[];
}

const CapabilityCard: React.FC<{ capability: EpmCapability }> = ({
  capability,
}) => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg flex flex-col items-center p-7 text-center hover:shadow-xl transition-shadow duration-300">
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
