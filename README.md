# Ayspire Corporate Website

A modern, high-performance corporate website built with Next.js 15, TypeScript and Tailwind CSS. This website showcases Ayspire's enterprise solutions including ERP, EPM and AI products with a focus on excellent user experience and SEO optimization.

## 🚀 Key Features

### **Modern Tech Stack**
- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** for responsive, utility-first styling
- **HeroUI** components for consistent UI elements
- **MDX** for content management with rich formatting

### **Content Management**
- **Blog System** - MDX-based blog with featured posts
- **Career Portal** - Dynamic job listings with detailed descriptions
- **Team Profiles** - Professional team member showcases
- **SEO Optimization** - Automatic sitemap generation and meta tags

## 📁 Source Code Location

The project source code is hosted on GitHub:
- **Repository**: Private GitHub repository https://github.com/ayspire-inc/ayspire-prod
- **Access**: Available to authorized team members
- **Branch**: `main` (production branch)

## 🌐 Hosting & Deployment

### **Vercel Hosting**
- **URL**: https://ayspire.com
- **Platform**: Vercel (https://vercel.com/ayspires-projects)
- **Auto-deployment**: Triggered on `main` branch commits on github

### **Access Analytics & Speed Insights**

1. **Visit Vercel Dashboard**: https://vercel.com/ayspires-projects
2. **Login Credentials**: 
   - Email: `info@ayspire.com`
   - Authentication: GitHub OAuth
3. **GitHub Login**:
   - Go to GitHub.com
   - Email: `info@ayspire.com`
   - Use password-based login
4. **View Analytics**:
   - Speed Insights: Performance metrics and Core Web Vitals
   - Analytics: Traffic, page views and user behavior

## ✍️ Adding New Blog Posts

### **Step 1: Create Blog Post File**
1. Navigate to `app/blog/posts/` in GitHub web interface
2. Click "Add file" → "Create new file"
3. Name your file: `your-blog-title.mdx` (use kebab-case)
4. Copy content from an existing blog post as template
5. Just modilfy the contents within '---' (frontmatter) tags. **CAUTION: Do not add or remove properties. It may break the website**

### **Step 2: Blog Post Structure**
```mdx
---
title: "Your Blog Post Title"
publishedAt: "2024-12-20"
summary: "Brief description of your blog post content"
image: "/images/blog/your-image.jpg"
---

Your blog content goes here using Markdown syntax...

## Headings
- **Bold text**
- *Italic text*
- [Links](https://example.com)
```

### **Step 3: Add Blog Images**
1. Upload images to `public/images/blog/`
2. Reference in your MDX: `/images/blog/filename.jpg`
3. Use descriptive filenames (e.g., `ai-trends-2024.jpg`)

### **Step 4: Feature on Homepage** (Optional)
1. Edit `app/blog/featured/posts.ts`
2. Add your blog slug to the featured array:
3. Ideal too keep 3 featured blogs. 
```typescript
{
    title: "AI in the Modern Enterprise",
    description:
      "How artificial intelligence is transforming business operations, decision-making and customer engagement.",
    href: "/blog/ai-in-enterprise",
    image: "/images/blogs/1.jpg",
  },
```

### **Important Notes**
- ⚠️ **Keep YAML headers intact** - Don't add new fields
- ✅ **Fill all required fields**: title, publishedAt, summary, image
- 📅 **Date format**: Use YYYY-MM-DD format
- 🖼️ **Image optimization**: Will be done automatically during build process

## 💼 Adding Career Listings

### **Step 1: Create Job Listing**
1. Navigate to `app/careers/listings/` in GitHub
2. Create new file: `job-title.mdx`
3. Copy from existing job listing as template

### **Step 2: Job Listing Structure**
```mdx
---
title: "Software Engineer"
jobId: "SE001"
location: "Bengaluru, India"
countryCode: "IN"
jobLocationType: "Remote"
type: "Full-time"
publishedAt: "2024-12-20"
salary: "Competitive"
experience: "3-5 Years"
currencyCode: "INR"
active: true
---

Job description content...

### Requirements
- Requirement 1
- Requirement 2

### Benefits
- Benefit 1
- Benefit 2
```

### **Important Job Listing Notes**
- ⚠️ **Keep YAML structure exact** - Don't modify field names
- ✅ **Set active: true** to make job visible
- 🌍 **Use ISO codes**: countryCode (IN, US), currencyCode (INR, USD)
- 📋 **Required fields**: Fill all fields, use "Undisclosed" if needed

## 🔧 Development Setup

```bash
# Clone repository
git clone [repository-url]

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🔧 Kappal Development Setup
- **Kappal Github** - https://github.com/Kappal-Service-Projects/ayspire-kappal-internal
- **Download in local and run** ```bash npm run dev ```
- **Commit Changes to Kappal Github**
- **The Ayspire Prod branch is forked from Kappal**
- **Updating Branch from Ayspire with changes in Kappal will trigger build**

## 🔍 SEO Features

- **Automatic Sitemaps**: Dynamic generation for blogs and careers
- **Meta Tags**: OpenGraph and Twitter Card support
- **Structured Data**: JSON-LD for rich snippets
- **Robots.txt**: Search engine crawling instructions

## 📊 Analytics & Monitoring

- **Vercel Analytics**: Built-in traffic analytics
- **Speed Insights**: Core Web Vitals monitoring

---

[**Need Help?** Contact the Kappal Software team](https://kappal.in) who officially manages this project
