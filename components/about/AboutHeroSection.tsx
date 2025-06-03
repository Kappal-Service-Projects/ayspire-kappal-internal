"use client";

import React from "react";
import Image from "next/image";

import SectionHeader from "../ui/SectionHeader";

interface FloatingElementProps {
  className: string;
  style?: React.CSSProperties;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  className,
  style,
}) => <div className={className} style={style} />;

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4 sm:px-8 text-center relative overflow-hidden">
      {/* Floating background elements for artistic effect - optimized for smooth performance */}
      <FloatingElement className="absolute top-10 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 opacity-20 floating-element will-change-transform" />
      <FloatingElement
        className="absolute bottom-0 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-secondary to-primary-300 opacity-30 floating-element will-change-transform"
        style={{ animationDelay: "2s" }}
      />
      <FloatingElement
        className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary opacity-25 floating-element will-change-transform"
        style={{ animationDelay: "4s" }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <Image
          priority
          alt="Ayspire Logo"
          className="mb-8 drop-shadow-lg mx-auto reveal-element"
          height={100}
          src="/logo.svg"
          width={100}
        />

        <SectionHeader
          className={`transition-all duration-700 opacity-100 translate-y-2`}
          gradientAnimation={true}
          gradientText="Ayspire"
          primaryText="About"
          size="lg"
        />

        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed reveal-element">
          Empowering organizations to make smarter decisions, faster. Born in
          Canada, built for the world.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-8 reveal-element">
          <span className="bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium pulse-border">
            Connected Planning
          </span>
          <span className="bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium">
            Analytics
          </span>
          <span className="bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium">
            Innovation
          </span>
          <span className="bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium">
            Global Reach
          </span>
        </div>
      </div>
    </section>
  );
};
