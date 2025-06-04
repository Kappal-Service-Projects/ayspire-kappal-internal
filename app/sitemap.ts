import { getBlogPosts, getCareerListings } from "./utils";

export const baseUrl = process.env.BASE_URL || "https://ayspire.com";

export default async function sitemap() {
  // Dynamic content routes
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  const careers = getCareerListings().map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: job.metadata.publishedAt,
    priority: 0.6,
    changeFrequency: "weekly" as const,
  }));

  // Static routes with priorities
  const mainRoutes = [
    { path: "", priority: 1.0 }, // Homepage
    { path: "/about", priority: 0.9 }, // About page
    { path: "/blog", priority: 0.8 }, // Blog listing
    { path: "/careers", priority: 0.8 }, // Careers listing
    { path: "/contact", priority: 0.8 }, // Contact page
    { path: "/team", priority: 0.7 }, // Team page
    { path: "/products", priority: 0.9 }, // Products main page
    { path: "/products/erp-solutions", priority: 0.8 }, // ERP solutions
    { path: "/products/epm-solutions", priority: 0.8 }, // EPM solutions
    { path: "/products/ai-products", priority: 0.8 }, // AI products
    { path: "/pricing", priority: 0.8 }, // Pricing page
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: route.priority,
    changeFrequency: "monthly" as const,
  }));

  return [...mainRoutes, ...blogs, ...careers];
}
