import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
import SEOEnhancer from "@/components/SEOEnhancer";

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
    "Software Company in Canada",
    "Software Consultant in Canada",
    "Software Company in Ontario",
    "Roshin Rasheed",
    "Software Company in Toronto",
    "Indian business in Canada",
    "ERP solutions",
    "EPM solutions",
    "enterprise planning",
    "business intelligence",
    "data analytics",
    "process automation",
    "digital innovation",
    "IT consulting",
    "enterprise architecture",
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
  alternates: {
    canonical: "https://ayspire.com",
    languages: {
      "en-US": "https://ayspire.com",
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    url: "https://ayspire.com",
    siteName: siteConfig.name,
    images: [
      {
        url: "https://ayspire.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ayspire - Digital Transformation & Enterprise Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@ayspire",
    images: ["https://ayspire.com/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    // Enhanced metadata for Google search features
    "google-site-verification": "your-verification-code-here",
    "format-detection": "telephone=no",
    "color-scheme": "light dark",
    // Enable action buttons in search results
    "google-rich-snippets": "enabled",
    // Business information for enhanced snippets
    "business-name": "Ayspire",
    "business-type": "Technology Company",
    "business-category": "Software Development",
    "contact-url": "https://ayspire.com/contact",
    "about-url": "https://ayspire.com/about",
    "services-url": "https://ayspire.com/solutions",
    "msapplication-TileColor": "#2563eb",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {/* <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}> */}
        <AnalyticsProvider>
          <ToastProvider>
            <ScrollProgress showPercentage={false} />

            <div className="relative flex flex-col">
              {/* SEO Enhancement */}
              <SEOEnhancer
                organizationData={{
                  name: "Ayspire",
                  url: "https://ayspire.com",
                  logo: "https://ayspire.com/logo.png",
                  description:
                    "Leading digital transformation and enterprise solutions provider",
                  address: {
                    streetAddress: "",
                    addressLocality: "Toronto",
                    addressRegion: "Ontario",
                    postalCode: "",
                    addressCountry: "CA",
                  },
                  contactPoint: {
                    telephone: "+1-800-AYSPIRE",
                    contactType: "Customer Service",
                    email: "contact@ayspire.com",
                  },
                  sameAs: [
                    "https://linkedin.com/company/ayspire",
                    "https://twitter.com/ayspire",
                  ],
                }}
              />

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
            <SpeedInsights />
          </ToastProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
