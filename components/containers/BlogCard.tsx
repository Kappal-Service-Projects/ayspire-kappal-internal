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
    <div
      className={`flex flex-col bg-white/90 dark:bg-slate-900/80 border border-gray-200 dark:border-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-0 h-full group overflow-hidden ${widthClass}`}
    >
      <div className="relative w-full h-48">
        <Image
          fill
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          priority={false}
          sizes="(max-width: 768px) 100vw, 33vw"
          src={image}
        />
      </div>
      <div className="flex flex-col flex-1 p-7">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
          {description}
        </p>
        <Link
          className="inline-flex items-center gap-1 text-primary font-medium hover:underline mt-auto"
          href={href}
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
  );
}
