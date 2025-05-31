import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "AI in the Modern Enterprise",
    description:
      "How artificial intelligence is transforming business operations, decision-making, and customer engagement.",
    href: "/blog/posts/ai-in-enterprise",
    date: "May 20, 2025",
    author: "Roshin K.",
    image: "/images/blogs/1.jpg",
  },
  {
    title: "Building a Data-Driven Culture",
    description:
      "Unlocking business value by fostering a culture that embraces data, analytics, and evidence-based decision making.",
    href: "/blog/posts/data-driven-culture",
    date: "May 10, 2025",
    author: "Roshin K.",
    image: "/images/blogs/2.jpg",
  },
  {
    title: "The Future of Cloud Computing",
    description:
      "Exploring the next wave of cloud innovation, from edge computing to AI-powered services.",
    href: "/blog/posts/future-of-cloud",
    date: "Apr 28, 2025",
    author: "Roshin K.",
    image: "/images/blogs/3.jpg",
  },
];

export default function BlogCardsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-primary">
        Latest Insights
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <div
            key={i}
            className="flex flex-col bg-white/90 dark:bg-slate-900/80 border border-gray-200 dark:border-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-0 h-full group overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                fill
                alt={post.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 33vw"
                src={post.image}
              />
            </div>
            <div className="flex flex-col flex-1 p-7">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
                {post.description}
              </p>
              <Link
                className="inline-flex items-center gap-1 text-primary font-medium hover:underline mt-auto"
                href={post.href}
              >
                Read more
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
