import React from "react";

import useScrollReveal from "./useScrollReveal";

import { BlogCard } from "@/components/containers/BlogCard";

interface Service {
  title: string;
  icon: string;
  desc: string;
  readMoreLink: string;
}

export default function ServicesSection({
  services,
  sectionRef,
  visible,
}: {
  services: Service[];
  sectionRef: React.RefObject<HTMLElement>;
  visible: boolean;
}) {
  const [h2Ref, h2Visible] = useScrollReveal() as [
    React.RefObject<HTMLHeadingElement>,
    boolean,
  ];
  // For cards, use a single ref for the grid
  const [cardsRef, cardsVisible] = useScrollReveal() as [
    React.RefObject<HTMLDivElement>,
    boolean,
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative py-16 px-4 sm:px-6 bg-white dark:bg-slate-950 transition-opacity duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      id="services"
    >
      <div className="text-center mb-20">
        <h2
          ref={h2Ref}
          className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 ${h2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <span className="text-cyan-500">Our </span>
          <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive digital solutions that drive enterprise transformation
          and sustainable growth.
        </p>
      </div>
      <div
        ref={cardsRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto transition-all duration-700 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        {services.map((service) => (
          <BlogCard
            key={service.title}
            description={service.desc}
            href={service.readMoreLink}
            image={service.icon}
            title={service.title}
          />
        ))}
      </div>
    </section>
  );
}
