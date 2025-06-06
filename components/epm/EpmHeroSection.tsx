"use client";

import React from "react";

interface FloatingElementProps {
  className: string;
  style?: React.CSSProperties;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  className,
  style,
}) => <div className={className} style={style} />;

export const EpmHeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-8 text-center relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* Floating background elements for artistic effect - optimized for smooth performance */}
      {/* <FloatingElement className="absolute top-10 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 opacity-20 floating-element will-change-transform" />
      <FloatingElement
        className="absolute bottom-0 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-secondary to-primary-300 opacity-30 floating-element will-change-transform"
        style={{ animationDelay: "2s" }}
      />
      <FloatingElement
        className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary opacity-25 floating-element will-change-transform"
        style={{ animationDelay: "4s" }}
      /> */}
    </section>
  );
};
