"use client";

import { useEffect } from "react";

export const useScrollReveal = () => {
  useEffect(() => {
    // Skip scroll reveal on mobile for better performance
    const isMobile =
      window.innerWidth <= 768 ||
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    const revealElements = document.querySelectorAll(".reveal-element");

    if (isMobile) {
      // On mobile, immediately show all elements without animations
      revealElements.forEach((element) => {
        element.classList.add("revealed");
      });

      return;
    }

    // Only use intersection observer on desktop
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
};

export const useGlobalScrollReveal = () => {
  useEffect(() => {
    // Skip scroll reveal on mobile for better performance
    const isMobile =
      window.innerWidth <= 768 ||
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    const revealElements = document.querySelectorAll(".reveal-element");

    if (isMobile) {
      // On mobile, immediately show all elements without animations
      revealElements.forEach((element) => {
        element.classList.add("revealed");
      });

      return;
    }

    // Only use intersection observer on desktop
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
};
