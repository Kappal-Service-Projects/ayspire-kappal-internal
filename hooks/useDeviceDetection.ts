"use client";

import { useState, useEffect } from "react";

/**
 * Modern device detection hook using media queries instead of deprecated navigator.userAgent
 * This approach is recommended by Lighthouse and provides better performance
 */
export function useDeviceDetection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Modern approach using CSS Media Queries API
    const checkDevice = () => {
      // Check for mobile viewport
      const mobileQuery = window.matchMedia("(max-width: 768px)");

      setIsMobile(mobileQuery.matches);

      // Check for tablet viewport
      const tabletQuery = window.matchMedia(
        "(min-width: 769px) and (max-width: 1024px)",
      );

      setIsTablet(tabletQuery.matches);

      // Check for touch capability using modern approach
      const hasTouchSupport =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore - for IE compatibility if needed
        (window.DocumentTouch && document instanceof window.DocumentTouch);

      setIsTouchDevice(hasTouchSupport);
    };

    // Initial check
    checkDevice();

    // Set up media query listeners for responsive changes
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const tabletQuery = window.matchMedia(
      "(min-width: 769px) and (max-width: 1024px)",
    );

    // Modern event listeners for media query changes
    const handleMobileChange = (e: MediaQueryListEvent) =>
      setIsMobile(e.matches);
    const handleTabletChange = (e: MediaQueryListEvent) =>
      setIsTablet(e.matches);
    const handleResize = () => {
      const hasTouchSupport =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

      setIsTouchDevice(hasTouchSupport);
    };

    // Add listeners
    mobileQuery.addEventListener("change", handleMobileChange);
    tabletQuery.addEventListener("change", handleTabletChange);
    window.addEventListener("resize", handleResize, { passive: true });

    // Cleanup
    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletQuery.removeEventListener("change", handleTabletChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isTouchDevice,
    isDesktop: !isMobile && !isTablet,
  };
}

/**
 * Simplified hook for just mobile detection
 * Uses modern CSS media queries instead of deprecated navigator.userAgent
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}
