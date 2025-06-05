"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface SEOEnhancerProps {
  pageType?: "website" | "article" | "product" | "organization";
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  publishedDate?: string;
  modifiedDate?: string;
  author?: string;
  organizationData?: {
    name: string;
    url: string;
    logo: string;
    description: string;
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    contactPoint?: {
      telephone: string;
      contactType: string;
      email: string;
    };
    sameAs?: string[];
  };
}

/**
 * SEOEnhancer Component - Advanced SEO optimizations for Ayspire Corporate
 *
 * Features:
 * - Dynamic structured data injection
 * - Page-specific schema markup
 * - Enhanced organization schema
 * - Breadcrumb navigation schema
 * - FAQ schema for relevant pages
 * - Local business schema
 * - Social media optimization
 */
export default function SEOEnhancer({
  pageType = "website",
  title,
  description,
  keywords = [],
  image,
  publishedDate,
  modifiedDate,
  author,
  organizationData,
}: SEOEnhancerProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Inject organization schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: organizationData?.name || "Ayspire",
      url: organizationData?.url || "https://ayspire.com",
      logo: organizationData?.logo || "https://ayspire.com/logo.png",
      description:
        organizationData?.description ||
        "Leading digital transformation and enterprise solutions provider",
      address: organizationData?.address || {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
      contactPoint: organizationData?.contactPoint || {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: "+1 647 526 5661",
        email: "info@ayspire.com",
      },
      sameAs: organizationData?.sameAs || [
        "https://linkedin.com/company/ayspire",
      ],
    };

    // Generate breadcrumb schema based on pathname
    const generateBreadcrumbSchema = () => {
      const pathSegments = pathname.split("/").filter(Boolean);
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://ayspire.com",
        },
      ];

      let currentPath = "https://ayspire.com";

      pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        breadcrumbItems.push({
          "@type": "ListItem",
          position: index + 2,
          name:
            segment.charAt(0).toUpperCase() +
            segment.slice(1).replace(/-/g, " "),
          item: currentPath,
        });
      });

      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems,
      };
    };

    // Website schema for main pages
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Ayspire",
      url: "https://ayspire.com",
      description: "Digital transformation and enterprise solutions provider",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://ayspire.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      publisher: {
        "@type": "Organization",
        name: "Ayspire",
        logo: {
          "@type": "ImageObject",
          url: "https://ayspire.com/logo.png",
        },
      },
    };

    // Enhanced Website Schema with Sitelinks Search Box and Actions
    const enhancedWebsiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Ayspire",
      alternateName: "Ayspire Inc",
      url: "https://ayspire.com",
      description: "Digital transformation and enterprise solutions provider",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://ayspire.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        {
          "@type": "ReadAction",
          target: "https://ayspire.com/about",
        },
        {
          "@type": "InteractAction",
          target: "https://ayspire.com/contact",
        },
      ],
      mainEntity: {
        "@type": "Organization",
        name: "Ayspire",
        url: "https://ayspire.com",
        logo: {
          "@type": "ImageObject",
          url: "https://ayspire.com/logo.png",
          width: 250,
          height: 60,
        },
        sameAs: [
          "https://linkedin.com/company/ayspire",
          "https://twitter.com/ayspire",
          "https://facebook.com/ayspire",
        ],
      },
      publisher: {
        "@type": "Organization",
        name: "Ayspire",
        logo: {
          "@type": "ImageObject",
          url: "https://ayspire.com/logo.png",
        },
      },
    };

    // Navigation Menu Schema for Sitelinks
    const siteNavigationSchema = {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      name: "Main Navigation",
      url: "https://ayspire.com",
      hasPart: [
        {
          "@type": "WebPage",
          name: "About",
          url: "https://ayspire.com/about",
          description: "Learn about Ayspire's mission and expertise",
        },
        {
          "@type": "WebPage",
          name: "EPM Solutions",
          url: "https://ayspire.com/solutions/epm-solutions",
          description: "Enterprise Performance Management solutions",
        },
        {
          "@type": "WebPage",
          name: "ERP Solutions",
          url: "https://ayspire.com/solutions/erp-solutions",
          description: "Enterprise Resource Planning solutions",
        },
        {
          "@type": "WebPage",
          name: "AI Products",
          url: "https://ayspire.com/solutions/ai-products",
          description: "AI-driven business tools and solutions",
        },
        {
          "@type": "WebPage",
          name: "Contact",
          url: "https://ayspire.com/contact",
          description: "Get in touch with our team",
        },
      ],
    };

    // Actions Schema for Call-to-Action buttons
    const actionsSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: "https://ayspire.com",
      potentialAction: [
        {
          "@type": "ContactAction",
          name: "Contact Ayspire",
          target: "https://ayspire.com/contact",
        },
        {
          "@type": "ReadAction",
          name: "Learn More",
          target: "https://ayspire.com/about",
        },
        {
          "@type": "ViewAction",
          name: "View Solutions",
          target: "https://ayspire.com/solutions",
        },
      ],
    };

    // Service schema for service pages
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: title || "Enterprise Solutions",
      description:
        description || "Comprehensive digital transformation services",
      provider: {
        "@type": "Organization",
        name: "Ayspire",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      serviceType: "Digital Transformation",
      category: "Technology Consulting",
    };

    // FAQ schema for relevant pages
    const faqSchema =
      pathname.includes("/about") || pathname.includes("/services")
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What services does Ayspire provide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ayspire provides comprehensive digital transformation services including ERP solutions, EPM solutions, AI-powered analytics, cloud services and enterprise consulting.",
                },
              },
              {
                "@type": "Question",
                name: "What industries does Ayspire serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We serve various industries including finance, healthcare, manufacturing, retail and technology companies looking to modernize their operations.",
                },
              },
              {
                "@type": "Question",
                name: "How can I get started with Ayspire?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can contact us through our website, call our customer service, or schedule a consultation to discuss your digital transformation needs.",
                },
              },
            ],
          }
        : null;

    // Inject all schemas
    const schemas = [
      orgSchema,
      enhancedWebsiteSchema,
      siteNavigationSchema,
      actionsSchema,
      generateBreadcrumbSchema(),
      ...(pathname.includes("/services") || pathname.includes("/products")
        ? [serviceSchema]
        : []),
      ...(faqSchema ? [faqSchema] : []),
    ];

    schemas.forEach((schema, index) => {
      const script = document.createElement("script");

      script.type = "application/ld+json";
      script.id = `schema-${index}`;
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup function to remove schemas when component unmounts
    return () => {
      schemas.forEach((_, index) => {
        const existingScript = document.getElementById(`schema-${index}`);

        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      });
    };
  }, [pathname, title, description, organizationData]);

  // Add performance monitoring for SEO metrics
  useEffect(() => {
    // Monitor Core Web Vitals for SEO
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();

        entries.forEach((entry) => {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("SEO Metric - LCP:", entry.startTime);
          }
          if (entry.entryType === "first-input") {
            console.log(
              "SEO Metric - FID:",
              (entry as any).processingStart - entry.startTime,
            );
          }
        });
      });

      observer.observe({
        entryTypes: ["largest-contentful-paint", "first-input"],
      });

      return () => observer.disconnect();
    }
  }, []);

  // Add preconnect links for external resources
  useEffect(() => {
    const preconnectLinks = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://images.unsplash.com",
      "https://www.canva.com",
    ];

    preconnectLinks.forEach((href) => {
      const link = document.createElement("link");

      link.rel = "preconnect";
      link.href = href;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });

    // Cleanup
    return () => {
      preconnectLinks.forEach((href) => {
        const existingLink = document.querySelector(`link[href="${href}"]`);

        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything visible
}

/**
 * Predefined SEO configurations for different page types
 */
export const seoConfigs = {
  homepage: {
    pageType: "website" as const,
    title: "Ayspire - Digital Transformation & Enterprise Solutions",
    description:
      "Leading provider of digital transformation, ERP, EPM and AI-powered enterprise solutions. Transform your business with cutting-edge technology.",
    keywords: [
      "digital transformation",
      "enterprise solutions",
      "ERP",
      "EPM",
      "AI solutions",
      "business automation",
    ],
  },

  about: {
    pageType: "organization" as const,
    title: "About Ayspire - Our Story & Mission",
    description:
      "Learn about Ayspire's journey in digital transformation, our mission to empower businesses and our commitment to innovation.",
    keywords: [
      "about ayspire",
      "company story",
      "mission",
      "digital transformation leaders",
    ],
  },

  services: {
    pageType: "product" as const,
    title: "Enterprise Services - ERP, EPM & Digital Solutions",
    description:
      "Comprehensive enterprise services including ERP implementations, EPM solutions, AI analytics and digital transformation consulting.",
    keywords: [
      "enterprise services",
      "ERP implementation",
      "EPM solutions",
      "digital consulting",
    ],
  },

  blog: {
    pageType: "website" as const,
    title: "Ayspire Insights - Digital Transformation Blog",
    description:
      "Expert insights on digital transformation, enterprise technology trends and business innovation strategies.",
    keywords: [
      "digital transformation blog",
      "enterprise technology",
      "business insights",
      "tech trends",
    ],
  },

  careers: {
    pageType: "website" as const,
    title: "Careers at Ayspire - Join Our Innovation Team",
    description:
      "Explore exciting career opportunities at Ayspire. Join our team of digital transformation experts and shape the future of enterprise technology.",
    keywords: [
      "ayspire careers",
      "technology jobs",
      "digital transformation careers",
      "enterprise solutions jobs",
    ],
  },
};
