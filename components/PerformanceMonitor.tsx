"use client";

import React, { useState, useEffect } from "react";

interface PerformanceMetrics {
  fps: number;
  memoryUsed: number;
  renderTime: number;
  loadTime: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [realtimeMetrics, setRealtimeMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsed: 0,
    renderTime: 0,
    loadTime: 0,
  });
  const [webVitals, setWebVitals] = useState<Partial<PerformanceMetrics>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure Core Web Vitals
    const measureWebVitals = () => {
      try {
        // Navigation timing with safety checks
        const navigationEntries = performance.getEntriesByType("navigation");

        if (navigationEntries.length > 0) {
          const navigation =
            navigationEntries[0] as PerformanceNavigationTiming;

          // Only calculate if loadEventEnd is available and valid
          if (navigation.loadEventEnd > 0 && navigation.startTime >= 0) {
            const loadTime = navigation.loadEventEnd - navigation.startTime;

            // Only update if we have a valid positive load time
            if (loadTime > 0) {
              setWebVitals((prev) => ({
                ...prev,
                loadTime: Math.round(loadTime),
              }));
            }
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn("Error measuring navigation timing:", error);
      }

      // Web Vitals API (if available)
      if ("PerformanceObserver" in window) {
        // First Contentful Paint
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (entry.name === "first-contentful-paint") {
              setWebVitals((prev) => ({
                ...prev,
                firstContentfulPaint: Math.round(entry.startTime),
              }));
            }
          }
        }).observe({ entryTypes: ["paint"] });

        // Largest Contentful Paint
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];

          setWebVitals((prev) => ({
            ...prev,
            largestContentfulPaint: Math.round(lastEntry.startTime),
          }));
        }).observe({ entryTypes: ["largest-contentful-paint"] });

        // Cumulative Layout Shift
        new PerformanceObserver((entryList) => {
          let cls = 0;

          for (const entry of entryList.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              cls += (entry as any).value;
            }
          }
          setWebVitals((prev) => ({
            ...prev,
            cumulativeLayoutShift: Math.round(cls * 1000) / 1000,
          }));
        }).observe({ entryTypes: ["layout-shift"] });
      }
    };

    measureWebVitals();
  }, []);

  // Real-time metrics monitoring
  useEffect(() => {
    const updateRealTimeMetrics = () => {
      try {
        // Calculate FPS (approximation)
        let frameCount = 0;
        const startTime = performance.now();

        const countFrames = () => {
          frameCount++;
          if (performance.now() - startTime < 1000) {
            requestAnimationFrame(countFrames);
          } else {
            setRealtimeMetrics((prev) => ({
              ...prev,
              fps: frameCount,
            }));
          }
        };

        requestAnimationFrame(countFrames);

        // Memory usage (if available)
        if ("memory" in performance) {
          const memoryInfo = (performance as any).memory;

          setRealtimeMetrics((prev) => ({
            ...prev,
            memoryUsed: Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024),
          }));
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn("Error updating real-time metrics:", error);
      }
    };

    // Update metrics every 2 seconds
    updateRealTimeMetrics();
    const interval = setInterval(updateRealTimeMetrics, 2000);

    return () => clearInterval(interval);
  }, []);

  // Only show in development or when explicitly enabled
  useEffect(() => {
    const showMonitor =
      process.env.NODE_ENV === "development" ||
      localStorage.getItem("show-performance-monitor") === "true";

    setIsVisible(showMonitor);
  }, []);

  if (!isVisible) return null;

  const getPerformanceGrade = () => {
    const { fps } = realtimeMetrics;
    const {
      loadTime,
      firstContentfulPaint,
      largestContentfulPaint,
      cumulativeLayoutShift,
    } = webVitals;

    let score = 100;

    // FPS scoring (25% weight)
    if (fps < 30) score -= 25;
    else if (fps < 45) score -= 15;
    else if (fps < 55) score -= 5;

    // Load time scoring (25% weight)
    if (loadTime && loadTime > 3000) score -= 25;
    else if (loadTime && loadTime > 2000) score -= 15;
    else if (loadTime && loadTime > 1000) score -= 5;

    // FCP scoring (20% weight)
    if (firstContentfulPaint && firstContentfulPaint > 2500) score -= 20;
    else if (firstContentfulPaint && firstContentfulPaint > 1800) score -= 12;
    else if (firstContentfulPaint && firstContentfulPaint > 1000) score -= 4;

    // LCP scoring (20% weight)
    if (largestContentfulPaint && largestContentfulPaint > 4000) score -= 20;
    else if (largestContentfulPaint && largestContentfulPaint > 2500)
      score -= 12;
    else if (largestContentfulPaint && largestContentfulPaint > 1500)
      score -= 4;

    // CLS scoring (10% weight)
    if (cumulativeLayoutShift && cumulativeLayoutShift > 0.25) score -= 10;
    else if (cumulativeLayoutShift && cumulativeLayoutShift > 0.1) score -= 6;
    else if (cumulativeLayoutShift && cumulativeLayoutShift > 0.05) score -= 2;

    return Math.max(0, Math.round(score));
  };

  const performanceGrade = getPerformanceGrade();
  const gradeColor =
    performanceGrade >= 90
      ? "text-green-500"
      : performanceGrade >= 70
        ? "text-yellow-500"
        : "text-red-500";

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-xl p-4 shadow-lg text-xs font-mono max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Performance
        </h3>
        <div className={`font-bold ${gradeColor}`}>{performanceGrade}/100</div>
      </div>

      <div className="space-y-1 text-gray-600 dark:text-gray-300">
        <div className="flex justify-between">
          <span>FPS:</span>
          <span
            className={
              realtimeMetrics.fps >= 55
                ? "text-green-500"
                : realtimeMetrics.fps >= 30
                  ? "text-yellow-500"
                  : "text-red-500"
            }
          >
            {realtimeMetrics.fps}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Memory:</span>
          <span>{realtimeMetrics.memoryUsed}MB</span>
        </div>

        {webVitals.loadTime && (
          <div className="flex justify-between">
            <span>Load:</span>
            <span
              className={
                webVitals.loadTime <= 1000
                  ? "text-green-500"
                  : webVitals.loadTime <= 2000
                    ? "text-yellow-500"
                    : "text-red-500"
              }
            >
              {webVitals.loadTime}ms
            </span>
          </div>
        )}

        {webVitals.firstContentfulPaint && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span
              className={
                webVitals.firstContentfulPaint <= 1000
                  ? "text-green-500"
                  : webVitals.firstContentfulPaint <= 1800
                    ? "text-yellow-500"
                    : "text-red-500"
              }
            >
              {webVitals.firstContentfulPaint}ms
            </span>
          </div>
        )}

        {webVitals.largestContentfulPaint && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span
              className={
                webVitals.largestContentfulPaint <= 1500
                  ? "text-green-500"
                  : webVitals.largestContentfulPaint <= 2500
                    ? "text-yellow-500"
                    : "text-red-500"
              }
            >
              {webVitals.largestContentfulPaint}ms
            </span>
          </div>
        )}

        {webVitals.cumulativeLayoutShift !== undefined && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span
              className={
                webVitals.cumulativeLayoutShift <= 0.05
                  ? "text-green-500"
                  : webVitals.cumulativeLayoutShift <= 0.1
                    ? "text-yellow-500"
                    : "text-red-500"
              }
            >
              {webVitals.cumulativeLayoutShift}
            </span>
          </div>
        )}
      </div>

      <button
        className="mt-2 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        onClick={() => {
          localStorage.removeItem("show-performance-monitor");
          setIsVisible(false);
        }}
      >
        Hide
      </button>
    </div>
  );
};

export default PerformanceMonitor;
