"use client";

import React from "react";

interface CallToActionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const EpmCallToAction: React.FC<CallToActionProps> = ({
  title = "Ready to Transform Your EPM?",
  description = "Discover how Ayspire can help you modernize your EPM processes, drive business agility, and achieve your strategic goals.",
  buttonText = "Get Started with Ayspire",
  buttonHref = "/contact",
}) => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center relative overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute top-10 left-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 floating-element" />
      <div
        className="absolute bottom-10 right-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-primary opacity-30 floating-element"
        style={{ animationDelay: "3s" }}
      />

      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative z-10">
        {title}
      </h2>
      <p className="max-w-xl text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 relative z-10">
        {description}
      </p>
      <a
        className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors text-lg pulse-border focus-outline relative z-10"
        href={buttonHref}
      >
        {buttonText}
      </a>
    </section>
  );
};
