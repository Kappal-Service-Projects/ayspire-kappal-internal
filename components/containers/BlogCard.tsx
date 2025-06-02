import Image from "next/image";
import Link from "next/link";

export interface BlogCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  width?: "sm" | "md" | "lg";
}

export function BlogCard({
  title,
  description,
  href,
  image,
  width = "md",
}: BlogCardProps) {
  let widthClass = "";

  if (width === "sm") widthClass = "max-w-xs";
  else if (width === "md") widthClass = "max-w-md";
  else if (width === "lg") widthClass = "max-w-lg";

  return (
    <article
      className={`group relative flex flex-col bg-white/95 dark:bg-slate-900/90 border border-gray-200/80 dark:border-slate-700/60 rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 ease-out p-0 h-full overflow-hidden backdrop-blur-sm hover:-translate-y-2 hover:scale-[1.02] focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${widthClass}`}
    >
      {/* Advanced hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      {/* Enhanced image container */}
      <div className="relative w-full h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <Image
          fill
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
          priority={false}
          sizes="(max-width: 768px) 100vw, 33vw"
          src={image}
        />

        {/* Floating icon overlay */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
          <svg
            className="w-5 h-5 text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>
      </div>

      {/* Enhanced content section */}
      <div className="flex flex-col flex-1 p-7 relative">
        {/* Progress indicator */}
        <div className="absolute top-0 left-7 right-7 h-0.5 bg-gradient-to-r from-primary-500 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-0.5" />

        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 leading-tight">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">
          {description}
        </p>

        {/* Enhanced CTA */}
        <Link
          className="group/link inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 mt-auto focus-outline rounded-lg p-2 -m-2 transition-all duration-300"
          href={href}
        >
          <span className="relative">
            Read more
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover/link:w-full transition-all duration-300" />
          </span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M17 8l4 4m0 0l-4 4m4-4H3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </Link>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl shadow-glow" />
      </div>
    </article>
  );
}

export default BlogCard;
