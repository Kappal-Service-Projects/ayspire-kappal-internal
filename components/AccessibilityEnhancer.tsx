"use client";

import React, { useState, useEffect } from "react";

interface AccessibilityPreferences {
  reduceMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
  screenReader: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>({
    reduceMotion: false,
    highContrast: false,
    largeText: false,
    screenReader: false,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect user preferences from system settings
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const contrastQuery = window.matchMedia("(prefers-contrast: high)");

    setPreferences((prev) => ({
      ...prev,
      reduceMotion: motionQuery.matches,
      highContrast: contrastQuery.matches,
    }));

    // Listen for changes
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPreferences((prev) => ({ ...prev, reduceMotion: e.matches }));
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setPreferences((prev) => ({ ...prev, highContrast: e.matches }));
    };

    motionQuery.addEventListener("change", handleMotionChange);
    contrastQuery.addEventListener("change", handleContrastChange);

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      contrastQuery.removeEventListener("change", handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply preferences to document
    const root = document.documentElement;

    if (preferences.reduceMotion) {
      root.style.setProperty("--animation-duration", "0ms");
      root.style.setProperty("--transition-duration", "0ms");
    } else {
      root.style.removeProperty("--animation-duration");
      root.style.removeProperty("--transition-duration");
    }

    if (preferences.highContrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }

    if (preferences.largeText) {
      root.style.setProperty("--font-size-multiplier", "1.2");
    } else {
      root.style.removeProperty("--font-size-multiplier");
    }
  }, [
    preferences.reduceMotion,
    preferences.highContrast,
    preferences.largeText,
  ]);

  const togglePreference = (key: keyof AccessibilityPreferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Accessibility trigger button */}
      <button
        aria-label="Accessibility options"
        className="fixed top-4 right-4 z-50 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-500/50 transition-all duration-200"
        title="Accessibility options"
        onClick={() => setIsVisible(!isVisible)}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      </button>

      {/* Accessibility panel */}
      {isVisible && (
        <div className="fixed top-16 right-4 z-50 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-6 shadow-xl max-w-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Accessibility Options
          </h3>

          <div className="space-y-4">
            <label
              aria-label="Reduce Motion setting"
              className="flex items-center gap-3 cursor-pointer"
              htmlFor="reduce-motion-toggle"
            >
              <input
                checked={preferences.reduceMotion}
                className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                id="reduce-motion-toggle"
                type="checkbox"
                onChange={() => togglePreference("reduceMotion")}
              />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  Reduce Motion
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Minimize animations and transitions
                </div>
              </div>
            </label>

            <label
              aria-label="High Contrast setting"
              className="flex items-center gap-3 cursor-pointer"
              htmlFor="high-contrast-toggle"
            >
              <input
                checked={preferences.highContrast}
                className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                id="high-contrast-toggle"
                type="checkbox"
                onChange={() => togglePreference("highContrast")}
              />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  High Contrast
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Increase color contrast for better visibility
                </div>
              </div>
            </label>

            <label
              aria-label="Large Text setting"
              className="flex items-center gap-3 cursor-pointer"
              htmlFor="large-text-toggle"
            >
              <input
                checked={preferences.largeText}
                className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                id="large-text-toggle"
                type="checkbox"
                onChange={() => togglePreference("largeText")}
              />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  Large Text
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Increase text size for better readability
                </div>
              </div>
            </label>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-700">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p className="mb-2">Keyboard shortcuts:</p>
              <ul className="space-y-1 text-xs">
                <li>
                  <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-slate-800 rounded">
                    Tab
                  </kbd>{" "}
                  - Navigate
                </li>
                <li>
                  <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-slate-800 rounded">
                    Enter
                  </kbd>{" "}
                  - Activate
                </li>
                <li>
                  <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-slate-800 rounded">
                    Esc
                  </kbd>{" "}
                  - Close dialogs
                </li>
              </ul>
            </div>
          </div>

          <button
            className="mt-4 w-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsVisible(false)}
          >
            Close
          </button>
        </div>
      )}

      {/* Skip navigation link */}
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-4 focus:ring-primary-500/50"
        href="#main-content"
      >
        Skip to main content
      </a>

      {/* Live region for announcements */}
      <div
        aria-atomic="true"
        aria-live="polite"
        className="sr-only"
        id="accessibility-announcements"
      />
    </>
  );
};

export default AccessibilityEnhancer;
