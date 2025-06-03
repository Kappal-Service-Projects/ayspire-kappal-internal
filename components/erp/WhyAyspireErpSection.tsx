"use client";

import React from "react";
import Image from "next/image";

import { SectionHeader } from "@/components/ui/SectionHeader";

export const WhyAyspireErpSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-12 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 w-full reveal-element">
          <div className="flex-1">
            <SectionHeader
              gradientText="for ERP?"
              primaryText="Why Choose Ayspire"
              size="md"
            />
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2 text-left md:text-lg">
              <li>Certified Oracle & Anaplan ERP consultants</li>
              <li>Proven track record in complex ERP transformations</li>
              <li>
                Industry-specific solutions for finance, supply chain, HR, and
                more
              </li>
              <li>End-to-end implementation, training, and support</li>
              <li>Agile, collaborative approach for rapid value delivery</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <Image
                alt="Oracle Partner"
                className="w-32 h-32 object-contain filter group-hover:brightness-110 transition-all duration-300"
                height={128}
                src="/images/clients/oracle.svg"
                width={128}
              />
              <div className="mt-4 text-center">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Certified Oracle Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
