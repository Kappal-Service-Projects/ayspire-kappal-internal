import { useRef, useEffect, useState, useCallback } from "react";

// Global intersection observer instance to reduce overhead
let globalObserver: IntersectionObserver | null = null;
const observedElements = new Map<Element, (visible: boolean) => void>();
let isMobileGlobal = false;

function updateMobileState() {
  isMobileGlobal = window.innerWidth <= 768;
}

function getGlobalObserver() {
  if (!globalObserver) {
    updateMobileState();

    globalObserver = new IntersectionObserver(
      (entries) => {
        // Use RAF to prevent scroll conflicts and batch updates
        requestAnimationFrame(() => {
          entries.forEach((entry) => {
            const callback = observedElements.get(entry.target);

            if (callback) {
              callback(entry.isIntersecting);
            }
          });
        });
      },
      {
        threshold: isMobileGlobal ? 0.05 : 0.1,
        rootMargin: isMobileGlobal ? "20px" : "0px",
        root: null,
      },
    );
  }

  return globalObserver;
}

// Handle window resize to recreate observer with mobile-optimized settings
function handleResize() {
  const wasMobile = isMobileGlobal;

  updateMobileState();

  // Recreate observer if mobile state changed
  if (
    wasMobile !== isMobileGlobal &&
    globalObserver &&
    observedElements.size > 0
  ) {
    const elementsToReobserve = Array.from(observedElements.keys());

    globalObserver.disconnect();
    globalObserver = null;

    const newObserver = getGlobalObserver();

    elementsToReobserve.forEach((element) => {
      newObserver.observe(element);
    });
  }
}

// Set up global resize listener once
if (typeof window !== "undefined") {
  window.addEventListener("resize", handleResize, { passive: true });
}

export default function useScrollRevealOptimized() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleVisibilityChange = useCallback((isVisible: boolean) => {
    setVisible(isVisible);
  }, []);

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;

      setIsMobile(mobile);

      // Always show on mobile, let observer handle on desktop
      if (mobile) {
        setVisible(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const node = ref.current;

    if (!node || isMobile) return; // Skip observer setup on mobile

    const observer = getGlobalObserver();

    // Register this element
    observedElements.set(node, handleVisibilityChange);
    observer.observe(node);

    // Cleanup
    return () => {
      observedElements.delete(node);
      observer.unobserve(node);

      // If no more elements being observed, cleanup global observer
      if (observedElements.size === 0) {
        observer.disconnect();
        globalObserver = null;
      }
    };
  }, [handleVisibilityChange, isMobile]);

  return [ref, visible] as const;
}
