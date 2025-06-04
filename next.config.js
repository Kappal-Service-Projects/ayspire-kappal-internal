/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-mdx-remote"],
  
  // Enhanced image optimization for SEO and performance
  images: {
    // Optimized formats for better Core Web Vitals
    formats: ['image/webp', 'image/avif'],
    
    // Quality settings for different use cases
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // Device-specific sizing for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.canva.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  
  // SEO and performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Enhanced headers for SEO and security
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  
  // Generate sitemap and RSS automatically
  async redirects() {
    return [
      {
        source: '/feed.xml',
        destination: '/rss',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
