import { useEffect, useRef, useState } from "react";

interface UseAdvancedScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

interface ScrollRevealState {
  isVisible: boolean;
  hasTriggered: boolean;
  entry: IntersectionObserverEntry | null;
}

export function useAdvancedScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseAdvancedScrollRevealOptions = {},
): [React.RefObject<T>, ScrollRevealState] {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -10% 0px",
    triggerOnce = true,
    delay = 0,
    staggerChildren = false,
    staggerDelay = 100,
  } = options;

  const elementRef = useRef<T>(null);
  const [state, setState] = useState<ScrollRevealState>({
    isVisible: false,
    hasTriggered: false,
    entry: null,
  });

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    // Performance: Use modern intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const isVisible = entry.isIntersecting;

        setState((prevState) => {
          // Only trigger once if triggerOnce is true
          if (triggerOnce && prevState.hasTriggered && !isVisible) {
            return prevState;
          }

          return {
            isVisible,
            hasTriggered: prevState.hasTriggered || isVisible,
            entry,
          };
        });

        // Handle staggered children animations
        if (isVisible && staggerChildren) {
          const children = element.querySelectorAll("[data-stagger]");

          children.forEach((child, index) => {
            const childElement = child as HTMLElement;

            setTimeout(
              () => {
                childElement.style.transitionDelay = `${index * staggerDelay}ms`;
                childElement.classList.add("visible");
              },
              delay + index * staggerDelay,
            );
          });
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [
    threshold,
    rootMargin,
    triggerOnce,
    delay,
    staggerChildren,
    staggerDelay,
  ]);

  return [elementRef, state];
}

// Hook for multiple elements with staggered animations
export function useStaggeredScrollReveal<
  T extends HTMLElement = HTMLDivElement,
>(
  count: number,
  options: UseAdvancedScrollRevealOptions = {},
): [React.RefObject<T>[], boolean[]] {
  const { staggerDelay = 150, ...restOptions } = options;
  const refs = useRef<React.RefObject<T>[]>([]);
  const [visibleStates, setVisibleStates] = useState<boolean[]>([]);

  // Initialize refs
  useEffect(() => {
    refs.current = Array.from({ length: count }, () => ({ current: null }));
    setVisibleStates(new Array(count).fill(false));
  }, [count]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const threshold = restOptions.threshold || 0.1;
    const rootMargin = restOptions.rootMargin || "0px 0px -10% 0px";

    refs.current.forEach((ref, index) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;

          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleStates((prev) => {
                const newStates = [...prev];

                newStates[index] = true;

                return newStates;
              });
            }, index * staggerDelay);
          }
        },
        {
          threshold,
          rootMargin,
        },
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [staggerDelay, restOptions.threshold, restOptions.rootMargin]);

  return [refs.current, visibleStates];
}

// Hook for scroll progress tracking
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.pageYOffset;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return progress;
}

// Hook for scroll direction detection
export function useScrollDirection(): "up" | "down" | null {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null,
  );
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > lastScrollTopRef.current) {
        setScrollDirection("down");
      } else if (scrollTop < lastScrollTopRef.current) {
        setScrollDirection("up");
      }

      lastScrollTopRef.current = scrollTop;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return scrollDirection;
}

// Hook for viewport size detection
export function useViewportSize(): { width: number; height: number } {
  const [viewportSize, setViewportSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const updateSize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateSize, { passive: true });

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return viewportSize;
}

// Hook for performance monitoring
export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    fps: 0,
    memoryUsed: 0,
    renderTime: 0,
  });

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const measurePerformance = () => {
      const now = performance.now();

      frameCount++;

      if (now - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (now - lastTime));

        // @ts-ignore - Memory API might not be available in all browsers
        const memoryInfo = (performance as any).memory;
        const memoryUsed = memoryInfo
          ? Math.round(memoryInfo.usedJSHeapSize / 1048576)
          : 0;

        setMetrics(() => ({
          fps,
          memoryUsed,
          renderTime: now - lastTime,
        }));

        frameCount = 0;
        lastTime = now;
      }

      animationId = requestAnimationFrame(measurePerformance);
    };

    animationId = requestAnimationFrame(measurePerformance);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return metrics;
}

export default useAdvancedScrollReveal;
