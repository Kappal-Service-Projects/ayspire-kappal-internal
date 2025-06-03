import React from "react";

import BlogCard from "../containers/BlogCard";
import SectionHeader from "../ui/SectionHeader";

import useScrollReveal from "./useScrollReveal";

const blogPosts = [
  {
    title: "AI in the Modern Enterprise",
    description:
      "How artificial intelligence is transforming business operations, decision-making, and customer engagement.",
    href: "/blog/posts/ai-in-enterprise",
    date: "May 20, 2025",
    author: "Roshin",
    image: "/images/blogs/1.jpg",
  },
  {
    title: "Building a Data-Driven Culture",
    description:
      "Unlocking business value by fostering a culture that embraces data, analytics, and evidence-based decision making.",
    href: "/blog/posts/data-driven-culture",
    date: "May 10, 2025",
    author: "Roshin",
    image: "/images/blogs/2.jpg",
  },
  {
    title: "The Future of Cloud Computing",
    description:
      "Exploring the next wave of cloud innovation, from edge computing to AI-powered services.",
    href: "/blog/posts/future-of-cloud",
    date: "Apr 28, 2025",
    author: "Roshin",
    image: "/images/blogs/3.jpg",
  },
];

export default function BlogCardsSection() {
  const [h2Ref, h2Visible] = useScrollReveal() as [
    React.RefObject<HTMLHeadingElement>,
    boolean,
  ];
  const [cardsRef, cardsVisible] = useScrollReveal() as [
    React.RefObject<HTMLDivElement>,
    boolean,
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <SectionHeader
        animated={h2Visible}
        className={`transition-all text-center mb-20 duration-700`}
        gradientAnimation={true}
        gradientText="Insights"
        primaryText="Latest"
        size="md"
      />
      <div
        ref={cardsRef}
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
          cardsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        {blogPosts.map((post, i) => (
          <div key={i} className="flex justify-center">
            <BlogCard
              description={post.description}
              href={post.href}
              image={post.image}
              title={post.title}
              width="lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
