import { notFound } from "next/navigation";

import { formatDate, getBlogPosts } from "../../utils";

import { baseUrl } from "@/app/sitemap";
import { CustomMDX } from "@/components/mdx";
import SectionHeader from "@/components/ui/SectionHeader";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post = await getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }) {
  let parameters = await params;
  let post = await getBlogPosts().find((post) => post.slug === parameters.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="mb-20">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Kappal Software",
            },
          }),
        }}
        suppressHydrationWarning
        type="application/ld+json"
      />

      <div className="grid grid-cols-1 lg:grid-cols-6 grid-flow-col gap-4 mt-40">
        <div className="col-span-1">{""}</div>
        <article className="prose text-2xl col-span-4 font-light text-gray-600 dark:text-gray-300">
          <SectionHeader
            className={`transition-all duration-700`}
            gradientAnimation={true}
            gradientText={post.metadata.title}
            primaryText=""
            size="md"
          />

          <div className="flex justify-between items-center mt-2 mb-8 text-medium">
            <p className="text-neutral-600 dark:text-neutral-400 font-normal">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
          <CustomMDX source={post.content} />
        </article>
        <div className="col-span-1">{""}</div>
      </div>
    </section>
  );
}
