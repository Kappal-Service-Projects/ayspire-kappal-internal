import React from "react";
import Image from "next/image";

import { epmCapabilities } from "./epmCapabilities";

import { ColorChip } from "@/components/containers/chips";

export const metadata = {
  title: "EPM Solutions | Ayspire",
  description:
    "Enterprise Performance Management (EPM) Solutions by Ayspire: Transform your business with connected planning, analytics, and performance management services.",
};

export default function EPMSolutionsPage() {
  return (
    <main className="min-h-[100vh] w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-8 text-center">
        <ColorChip />
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4 tracking-tight">
          Enterprise Performance Management
        </h1>
        <p className="max-w-2xl text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-6">
          Unlock the power of EPM with Ayspire. Connect strategy to execution,
          streamline planning, and drive business outcomes with data-driven
          insights and collaborative analytics.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Connected Planning
          </span>
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Analytics
          </span>
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Performance
          </span>
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Compliance
          </span>
        </div>
      </section>

      {/* EPM Capabilities Cards */}
      <section className="w-full px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Our EPM Capabilities
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
          {epmCapabilities.map((cap) => (
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

      {/* EPM Challenges Section */}
      <section className="w-full px-4 py-12">
        <div className="bg-gradient-to-r from-primary/10 to-slate-100 dark:from-primary/20 dark:to-slate-900 rounded-2xl p-8 md:p-12 shadow-md flex flex-col md:flex-row items-center gap-8 w-full">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              EPM Challenges We Solve
            </h2>
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2 text-base md:text-lg">
              <li>Disconnected planning and data silos across departments</li>
              <li>Manual, error-prone reporting and slow close cycles</li>
              <li>Difficulty adapting to regulatory changes and compliance</li>
              <li>Lack of real-time insights for agile decision-making</li>
              <li>Complexity in integrating cloud and on-premise systems</li>
              <li>Scaling EPM processes as your business grows</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              alt="EPM Analytics"
              className="rounded-xl shadow-lg object-cover"
              height={240}
              src="/images/blogs/2.jpg"
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
              Why Choose Ayspire for EPM?
            </h2>
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2 text-base md:text-lg">
              <li>
                Proven expertise in Oracle EPM, analytics, and cloud
                transformation
              </li>
              <li>End-to-end EPM consulting, implementation, and support</li>
              <li>
                Custom solutions tailored to your industry and business needs
              </li>
              <li>
                Agile, collaborative approach with a focus on measurable
                outcomes
              </li>
              <li>
                Trusted by leading enterprises for mission-critical EPM
                initiatives
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              alt="Oracle Partner"
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
          Ready to Transform Your EPM?
        </h2>
        <p className="max-w-xl text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8">
          Discover how Ayspire can help you modernize your EPM processes, drive
          business agility, and achieve your strategic goals.
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
