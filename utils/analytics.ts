// Analytics utility with proper type safety
export type GtagCommand = "config" | "event" | "js" | "set";

export interface GtagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface GtagConfig {
  page_title?: string;
  page_location?: string;
  description?: string;
  fatal?: boolean;
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
}

// Safe gtag wrapper function
export function safeGtag(
  command: GtagCommand,
  targetId: string | Date,
  config?: GtagConfig,
): void {
  if (
    typeof window !== "undefined" &&
    "gtag" in window &&
    typeof window.gtag === "function"
  ) {
    try {
      window.gtag(command, targetId, config);
    } catch (error) {
      console.warn("Analytics tracking error:", error);
    }
  }
}

// Track custom events safely
export function trackEvent(event: GtagEvent): void {
  safeGtag("event", event.action, {
    event_category: event.category,
    event_label: event.label,
    value: event.value,
  });
}

// Track exceptions safely
export function trackException(error: Error, fatal = false): void {
  safeGtag("event", "exception", {
    description: error.message,
    fatal,
  });
}

// Track UX achievements
export function trackUXAchievement(score: number, label: string): void {
  safeGtag("event", "ux_score_achievement", {
    event_category: "performance",
    event_label: label,
    value: score,
  });
}
