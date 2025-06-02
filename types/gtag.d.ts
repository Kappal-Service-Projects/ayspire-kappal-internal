// Global type declarations for Google Analytics gtag
declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: {
        page_title?: string;
        page_location?: string;
        description?: string;
        fatal?: boolean;
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: any;
      },
    ) => void;
  }
}

export {};
