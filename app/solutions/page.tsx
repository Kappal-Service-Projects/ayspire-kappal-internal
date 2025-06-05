"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faChartLine,
  faCogs,
  faArrowRight,
  faBrain,
  faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContentImage } from "@/components/ui/OptimizedImage";

interface Solution {
  title: string;
  description: string;
  icon: any;
  gradient: string;
  features: string[];
  href: string;
  imageUrl: string;
  status?: "available" | "coming-soon";
}

const solutions: Solution[] = [
  {
    title: "Enterprise Performance Management (EPM)",
    description:
      "Transform your business planning and performance management with our cutting-edge EPM solutions. From Anaplan optimization to financial consolidation, we deliver comprehensive solutions that drive strategic excellence.",
    icon: faChartLine,
    gradient: "from-blue-600 to-cyan-500",
    features: [
      "Anaplan Model Advisor & Optimization",
      "Financial Consolidation & Close Management",
      "Workday Adaptive Planning",
      "CCH® Tagetik Implementation",
      "Profitability & Cost Management",
      "Strategic Process Redesign",
    ],
    href: "/solutions/epm-solutions",
    imageUrl: "/images/epm/financial.jpg",
    status: "available",
  },
  {
    title: "Enterprise Resource Planning (ERP)",
    description:
      "Modernize your business operations with Oracle and Anaplan-based ERP solutions. Integrate every function, automate processes, and gain real-time insights for smarter, faster decisions.",
    icon: faCogs,
    gradient: "from-emerald-600 to-teal-500",
    features: [
      "Unified Business Processes",
      "Cloud ERP Transformation",
      "Advanced Analytics & Reporting",
      "Process Automation",
      "Regulatory Compliance",
      "Expert Implementation & Support",
    ],
    href: "/solutions/erp-solutions",
    imageUrl: "/images/services/solution_1.jpg",
    status: "available",
  },
  {
    title: "AI-Powered Solutions",
    description:
      "Harness the power of artificial intelligence to transform your business operations. Our AI solutions are designed to enhance decision-making, automate processes, and unlock new opportunities for growth.",
    icon: faBrain,
    gradient: "from-purple-600 to-pink-500",
    features: [
      "Machine Learning Models",
      "Predictive Analytics",
      "Process Automation",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "AI Strategy Consulting",
    ],
    href: "/solutions/ai-solutions",
    imageUrl: "/images/services/3.png",
    status: "coming-soon",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 tech-pattern pointer-events-none opacity-20" />

        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <SectionHeader
            className="mb-8"
            gradientText="Solutions"
            primaryText="Enterprise"
            size="xl"
          />
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Accelerate your digital transformation with Ayspire&apos;s
            comprehensive suite of enterprise solutions. From EPM and ERP to
            AI-powered innovations, we deliver technology that drives real
            business outcomes.
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                50+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Enterprise Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                98%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Implementation Success
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {solutions.map((solution, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={solution.title}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-8 lg:gap-16`}
                >
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                        <div className="aspect-video relative overflow-hidden">
                          <ContentImage
                            fill
                            alt={`${solution.title} - Ayspire Enterprise Solution`}
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            src={solution.imageUrl}
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-tr ${solution.gradient} opacity-20`}
                          />
                        </div>

                        {/* Status Badge */}
                        {solution.status === "coming-soon" && (
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                            Coming Soon
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center`}
                      >
                        <FontAwesomeIcon
                          className="text-white text-2xl"
                          icon={solution.icon}
                        />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {solution.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.gradient}`}
                          />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Link
                        className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r ${solution.gradient} text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
                        href={solution.href}
                      >
                        {solution.status === "coming-soon"
                          ? "Learn More"
                          : "Explore Solutions"}
                        <FontAwesomeIcon
                          className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                          icon={faArrowRight}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how our enterprise solutions can accelerate your
            digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 group"
              href="/contact"
            >
              <FontAwesomeIcon icon={faRocket} />
              Get Started Today
              <FontAwesomeIcon
                className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                icon={faArrowRight}
              />
            </Link>
            <Link
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              href="/consulting"
            >
              <FontAwesomeIcon icon={faCloudUploadAlt} />
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
