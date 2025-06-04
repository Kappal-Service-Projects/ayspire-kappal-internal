import React from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ColorChip } from "@/components/containers/chips";

export const metadata = {
  title: "AI Products and Solutions | Ayspire",
  description:
    "Explore Ayspire's upcoming AI-powered products and solutions for the enterprise. Coming soon!",
};

export default function AIProductsPage() {
  return (
    <main className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <section className="w-full flex flex-col items-center justify-center py-24 px-4 text-center">
        <ColorChip />
        <SectionHeader
          gradientText="& Solutions"
          primaryText="AI Products"
          size="lg"
        />
        <p className="max-w-2xl text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-10">
          We are working on a new suite of AI-powered products and solutions to
          help you transform your business. Stay tuned for updates!
        </p>
        <div className="flex flex-col items-center gap-6">
          <span className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full text-lg font-semibold animate-pulse">
            Coming Soon
          </span>
        </div>
      </section>
    </main>
  );
}
