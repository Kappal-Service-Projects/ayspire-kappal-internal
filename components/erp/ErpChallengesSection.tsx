"use client";

import React from "react";
import Image from "next/image";

export const ErpChallengesSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-12 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary/10 to-slate-100 dark:from-primary/20 dark:to-slate-900 rounded-2xl p-8 md:p-12 shadow-md flex flex-col md:flex-row items-center gap-8 w-full reveal-element">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              ERP Challenges We Solve
            </h2>
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2 text-left md:text-lg">
              <li>Fragmented systems and manual data entry</li>
              <li>Lack of real-time visibility across business functions</li>
              <li>Complex, error-prone processes and approvals</li>
              <li>Difficulty scaling as your business grows</li>
              <li>Regulatory compliance and audit challenges</li>
              <li>Slow, outdated legacy ERP systems</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <Image
                alt="ERP Dashboard"
                className="rounded-xl shadow-lg object-cover"
                height={240}
                src="/images/blogs/1.jpg"
                width={340}
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary rounded-full opacity-70 floating-element" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
