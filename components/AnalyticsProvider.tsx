"use client";

import { useEffect } from "react";

import { trackEvent } from "../utils/analytics";

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

class UXAnalytics {
  private static instance: UXAnalytics;
  private performanceObserver: PerformanceObserver | null = null;
  private visibilityChangeTime = 0;
  private pageLoadTime = 0;

  private constructor() {
    this.initializeTracking();
  }

  public static getInstance(): UXAnalytics {
    if (!UXAnalytics.instance) {
      UXAnalytics.instance = new UXAnalytics();
    }

    return UXAnalytics.instance;
  }

  private initializeTracking() {
    if (typeof window === "undefined") return;

    // Track page load performance
    window.addEventListener("load", () => {
      this.pageLoadTime = performance.now();
      this.trackEvent({
        action: "page_load",
        category: "performance",
        value: Math.round(this.pageLoadTime),
      });
    });

    // Track user engagement
    this.trackUserEngagement();

    // Track Core Web Vitals
    this.trackCoreWebVitals();

    // Track scroll depth
    this.trackScrollDepth();

    // Track click patterns
    this.trackInteractions();
  }

  private trackUserEngagement() {
    let timeOnPage = 0;
    let isActive = true;

    // Track time on page
    const interval = setInterval(() => {
      if (isActive) {
        timeOnPage += 1000;
      }
    }, 1000);

    // Track visibility changes
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        isActive = false;
        this.visibilityChangeTime = performance.now();
      } else {
        isActive = true;
        const hiddenTime = performance.now() - this.visibilityChangeTime;

        this.trackEvent({
          action: "page_hidden_time",
          category: "engagement",
          value: Math.round(hiddenTime),
        });
      }
    });

    // Track before unload
    window.addEventListener("beforeunload", () => {
      clearInterval(interval);
      this.trackEvent({
        action: "time_on_page",
        category: "engagement",
        value: Math.round(timeOnPage),
      });
    });
  }

  private trackCoreWebVitals() {
    // Track LCP (Largest Contentful Paint)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];

      this.trackEvent({
        action: "lcp",
        category: "core_web_vitals",
        value: Math.round(lastEntry.startTime),
      });
    }).observe({ entryTypes: ["largest-contentful-paint"] });

    // Track FID (First Input Delay)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();

      entries.forEach((entry: any) => {
        this.trackEvent({
          action: "fid",
          category: "core_web_vitals",
          value: Math.round(entry.processingStart - entry.startTime),
        });
      });
    }).observe({ entryTypes: ["first-input"] });

    // Track CLS (Cumulative Layout Shift)
    let clsScore = 0;

    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();

      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsScore += entry.value;
        }
      });

      this.trackEvent({
        action: "cls",
        category: "core_web_vitals",
        value: Math.round(clsScore * 1000) / 1000,
      });
    }).observe({ entryTypes: ["layout-shift"] });
  }

  private trackScrollDepth() {
    let maxScroll = 0;
    const trackingPoints = [25, 50, 75, 100];
    const trackedPoints = new Set<number>();

    const throttledScroll = this.throttle(() => {
      const scrollPercent = Math.round(
        ((window.scrollY + window.innerHeight) / document.body.scrollHeight) *
          100,
      );

      maxScroll = Math.max(maxScroll, scrollPercent);

      trackingPoints.forEach((point) => {
        if (scrollPercent >= point && !trackedPoints.has(point)) {
          trackedPoints.add(point);
          this.trackEvent({
            action: "scroll_depth",
            category: "engagement",
            label: `${point}%`,
            value: point,
          });
        }
      });
    }, 100);

    window.addEventListener("scroll", throttledScroll);
  }

  private trackInteractions() {
    // Track button clicks
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;

      if (target.matches("button, a[href], [role='button']")) {
        const elementText =
          target.textContent?.trim().substring(0, 50) || "unknown";
        const elementType = target.tagName.toLowerCase();

        this.trackEvent({
          action: "click",
          category: "interaction",
          label: `${elementType}: ${elementText}`,
        });
      }
    });

    // Track form interactions
    document.addEventListener("submit", (event) => {
      const form = event.target as HTMLFormElement;
      const formId = form.id || form.className || "unknown_form";

      this.trackEvent({
        action: "form_submit",
        category: "interaction",
        label: formId,
      });
    });
  }

  private trackEvent(event: AnalyticsEvent) {
    // Send to Google Analytics if available
    trackEvent({
      action: event.action,
      category: event.category,
      label: event.label,
      value: event.value,
    });

    // Send to custom analytics endpoint
    if (process.env.NODE_ENV === "production") {
      // Modern approach: collect only necessary, privacy-friendly browser info
      const browserInfo = {
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        screen: {
          width: window.screen.width,
          height: window.screen.height,
        },
        language: navigator.language,
        platform: navigator.platform,
        // Use feature detection instead of user agent parsing
        features: {
          touchSupport: "ontouchstart" in window || navigator.maxTouchPoints > 0,
          cookieEnabled: navigator.cookieEnabled,
          onLine: navigator.onLine,
        },
      };

      fetch("/api/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...event,
          timestamp: Date.now(),
          url: window.location.href,
          browser: browserInfo, // Modern replacement for userAgent
        }),
      }).catch(() => {
        // Silently fail for analytics
      });
    }

    // Log in development
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log("Analytics Event:", event);
    }
  }

  private throttle(func: Function, wait: number) {
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
  }

  // Public methods for custom tracking
  public trackCustomEvent(event: AnalyticsEvent) {
    this.trackEvent(event);
  }

  public trackPageView(page: string) {
    this.trackEvent({
      action: "page_view",
      category: "navigation",
      label: page,
    });
  }

  public trackConversion(type: string, value?: number) {
    this.trackEvent({
      action: "conversion",
      category: "business",
      label: type,
      value,
    });
  }
}

// Analytics Hook
export function useAnalytics() {
  useEffect(() => {
    UXAnalytics.getInstance();
    // Initialize analytics tracking
  }, []);

  return {
    trackEvent: (event: AnalyticsEvent) =>
      UXAnalytics.getInstance().trackCustomEvent(event),
    trackPageView: (page: string) =>
      UXAnalytics.getInstance().trackPageView(page),
    trackConversion: (type: string, value?: number) =>
      UXAnalytics.getInstance().trackConversion(type, value),
  };
}

// Analytics Component
const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useAnalytics();

  return <>{children}</>;
};

export default AnalyticsProvider;
