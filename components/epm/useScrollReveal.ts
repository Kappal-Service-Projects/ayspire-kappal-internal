"use client";

import { useEffect } from "react";

export const useScrollReveal = () => {
  useEffect(() => {
    // Skip scroll animation on mobile for performance
    const isMobile =
      window.innerWidth <= 768 ||
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    if (isMobile) {
      // Instantly show all reveal elements on mobile
      const revealElements = document.querySelectorAll(
        ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right",
      );

      revealElements.forEach((el) => {
        el.classList.add("visible");
      });

      return;
    }

    const observerOptions = {
      threshold: 0.15, // Increased threshold for better performance
      rootMargin: "0px 0px -100px 0px", // More conservative margin
    };

    // Track which elements have already been revealed to prevent re-triggering
    const revealedElements = new Set<Element>();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Only trigger animation once per element (triggerOnce behavior)
        if (entry.isIntersecting && !revealedElements.has(entry.target)) {
          entry.target.classList.add("visible");
          revealedElements.add(entry.target);

          // Stop observing this element to prevent re-triggering
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all scroll reveal elements with a small delay to prevent immediate triggers
    setTimeout(() => {
      const revealElements = document.querySelectorAll(
        ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right",
      );

      revealElements.forEach((el) => {
        // Add a small delay to stagger animations
        const delay = Array.from(revealElements).indexOf(el) * 100;

        if (delay > 0) {
          (el as HTMLElement).style.transitionDelay = `${delay}ms`;
        }

        observer.observe(el);
      });
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, []);
};
