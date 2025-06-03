import { useRef, useEffect, useState, useCallback } from "react";

export default function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Memoized callback to prevent unnecessary re-renders
  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      // Clear any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      // Check if mobile on each intersection for better responsiveness
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        // Lighter debouncing for mobile to prevent excessive updates
        timeoutRef.current = setTimeout(() => {
          setVisible(entry.isIntersecting);
          timeoutRef.current = null;
        }, 16); // ~1 frame at 60fps
      } else {
        setVisible(entry.isIntersecting);
      }
    },
    [],
  );

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    // Dynamic mobile detection for current state
    const isMobile = window.innerWidth <= 768;

    // Create observer with optimized settings
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: isMobile ? 0.05 : 0.1,
      rootMargin: isMobile ? "25px" : "0px", // Reduced margin for better performance
      // Add root: null explicitly for better browser optimization
      root: null,
    });

    observerRef.current.observe(node);

    // Cleanup function
    return () => {
      // Clear any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      // Disconnect observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [handleIntersection]);

  return [ref, visible] as const;
}
