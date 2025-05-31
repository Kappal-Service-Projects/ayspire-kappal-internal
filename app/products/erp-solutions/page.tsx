import React from "react";
import Image from "next/image";

import { erpCapabilities } from "./erpCapabilities";

import { ColorChip } from "@/components/containers/chips";

export const metadata = {
  title: "ERP Solutions | Ayspire",
  description:
    "Enterprise Resource Planning (ERP) Solutions by Ayspire: Unify your business with Oracle or Anaplan-based ERP for finance, HR, supply chain, and more.",
};

export default function ERPSolutionsPage() {
  return (
    <main className="min-h-[100vh] w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-8 text-center">
        <ColorChip />
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4 tracking-tight">
          Enterprise Resource Planning (ERP)
        </h1>
        <p className="max-w-2xl text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-6">
          Modernize your business with Ayspire’s Oracle and Anaplan-based ERP
          solutions. Integrate every function, automate processes, and gain
          real-time insights for smarter, faster decisions.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Unified Platform
          </span>
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Cloud ERP
          </span>
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Automation
          </span>
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Analytics
          </span>
        </div>
      </section>

      {/* ERP Capabilities Cards */}
      <section className="w-full px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Our ERP Capabilities
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
          {erpCapabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg flex flex-col items-center p-7 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                alt={cap.title}
                className="mb-4 rounded-lg object-contain bg-slate-100 dark:bg-slate-800 p-2"
                height={120}
                src={cap.imageUrl}
                width={120}
              />
              <h3 className="text-xl font-semibold text-primary mb-2">
                {cap.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base font-light">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ERP Challenges Section */}
      <section className="w-full px-4 py-12">
        <div className="bg-gradient-to-r from-primary/10 to-slate-100 dark:from-primary/20 dark:to-slate-900 rounded-2xl p-8 md:p-12 shadow-md flex flex-col md:flex-row items-center gap-8 w-full">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              ERP Challenges We Solve
            </h2>
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2 text-base md:text-lg">
              <li>Fragmented systems and manual data entry</li>
              <li>Lack of real-time visibility across business functions</li>
              <li>Complex, error-prone processes and approvals</li>
              <li>Difficulty scaling as your business grows</li>
              <li>Regulatory compliance and audit challenges</li>
              <li>Slow, outdated legacy ERP systems</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              alt="ERP Dashboard"
              className="rounded-xl shadow-lg object-cover"
              height={240}
              src="/images/blogs/1.jpg"
              width={340}
            />
          </div>
        </div>
      </section>

      {/* Why Ayspire Section */}
      <section className="w-full px-4 py-12">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 w-full">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Why Choose Ayspire for ERP?
            </h2>
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2 text-base md:text-lg">
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
            <Image
              alt="Oracle & Anaplan Partner"
              className="rounded-xl bg-slate-100 dark:bg-slate-800 p-4"
              height={120}
              src="/images/clients/oracle.svg"
              width={120}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Ready to Modernize Your ERP?
        </h2>
        <p className="max-w-xl text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8">
          Discover how Ayspire can help you unify, automate, and optimize your
          business with next-generation ERP solutions.
        </p>
        <a
          className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors text-lg"
          href="/contact"
        >
          Get Started with Ayspire
        </a>
      </section>
    </main>
  );
}
