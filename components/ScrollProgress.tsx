"use client";

import React, { useState, useEffect } from "react";

interface ScrollProgressProps {
  color?: string;
  height?: number;
  showPercentage?: boolean;
  position?: "top" | "bottom";
  smooth?: boolean;
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({
  color = "primary-600",
  height = 3,
  showPercentage = false,
  position = "top",
  smooth = true,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setIsVisible(scrollTop > 100); // Show after scrolling 100px
    };

    const throttledUpdate = throttle(updateScrollProgress, 16); // 60fps

    window.addEventListener("scroll", throttledUpdate, { passive: true });
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener("scroll", throttledUpdate);
  }, []);

  const throttle = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout | null = null;

    return function executedFunction(...args: any[]) {
      const later = () => {
        timeout = null;
        func(...args);
      };

      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
    };
  };

  const positionClasses = position === "top" ? "top-0" : "bottom-0";
  const transitionClass = smooth ? "transition-all duration-300 ease-out" : "";

  return (
    <>
      {/* Progress bar */}
      <div
        aria-label="Reading progress"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={Math.round(scrollProgress)}
        className={`fixed left-0 right-0 ${positionClasses} z-50 ${transitionClass} ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        role="progressbar"
        style={{ height: `${height}px` }}
      >
        <div className="h-full bg-gray-200/20 dark:bg-gray-800/20 backdrop-blur-sm">
          <div
            className={`h-full bg-gradient-to-r from-${color} to-secondary shadow-sm ${transitionClass}`}
            style={{
              width: `${scrollProgress}%`,
              boxShadow: `0 0 10px rgba(6, 199, 199, 0.3)`,
            }}
          />
        </div>
      </div>

      {/* Percentage indicator */}
      {showPercentage && (
        <div
          className={`fixed ${position === "top" ? "top-4" : "bottom-4"} right-4 z-50 ${transitionClass} ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-gray-200 dark:border-gray-700">
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollProgress;
