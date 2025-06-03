"use client";

import React from "react";

interface ValuePropChipProps {
  label: string;
  isPrimary?: boolean;
}

const ValuePropChip: React.FC<ValuePropChipProps> = ({
  label,
  isPrimary = false,
}) => (
  <span
    className={`bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium ${isPrimary ? "pulse-border" : ""}`}
  >
    {label}
  </span>
);

export const EpmValueProposition: React.FC = () => {
  const chips = [
    { label: "Connected Planning", isPrimary: true },
    { label: "Analytics", isPrimary: false },
    { label: "Performance", isPrimary: false },
    { label: "Compliance", isPrimary: false },
  ];

  return (
    <section className="w-full justify-center items-center flex flex-col py-16 px-4 relative z-20">
      <p className="max-w-2xl text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-6 relative z-10">
        Unlock the power of EPM with Ayspire. Connect strategy to execution,
        streamline planning and drive business outcomes with data-driven
        insights and collaborative analytics.
      </p>
      <div className="flex flex-wrap gap-4 justify-center mt-4 relative z-10">
        {chips.map((chip) => (
          <ValuePropChip
            key={chip.label}
            isPrimary={chip.isPrimary}
            label={chip.label}
          />
        ))}
      </div>
    </section>
  );
};
