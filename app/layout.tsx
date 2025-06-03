import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/homepage/navbar";
import { Footer } from "@/components/homepage/footer";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import AccessibilityEnhancer from "@/components/AccessibilityEnhancer";
import ErrorBoundary from "@/components/ErrorBoundary";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import ToastProvider from "@/components/ToastProvider";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "digital transformation",
    "enterprise solutions",
    "technology consulting",
    "software development",
    "AI solutions",
    "cloud services",
    "business automation",
  ],
  authors: [{ name: "Ayspire" }],
  creator: "Ayspire",
  publisher: "Ayspire",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ayspire.com"),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    url: "https://ayspire.com",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable,
        )}
      >
        {/* <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}> */}
        <AnalyticsProvider>
          <ToastProvider>
            <ScrollProgress showPercentage={false} />

            <div className="relative flex flex-col">
              {/* Accessibility Enhancement Controls */}
              <ErrorBoundary>
                <AccessibilityEnhancer />
              </ErrorBoundary>

              {/* Performance Monitoring */}
              <ErrorBoundary>
                <PerformanceMonitor />
              </ErrorBoundary>

              {/* Skip navigation for accessibility */}
              <a
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:font-medium"
                href="#main-content"
              >
                Skip to main content
              </a>
              <Navbar />
              <main className="flex-grow w-full min-w-0" id="main-content">
                {children}
              </main>
              <Footer />
            </div>
            {/* </Providers> */}
            <Analytics />
          </ToastProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
