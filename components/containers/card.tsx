import { Link } from "@heroui/link";
import React from "react";
import { button as buttonStyles } from "@heroui/theme";

import { ColorChip } from "./chips";

import { ContentImage } from "@/components/ui/OptimizedImage";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  readMoreLink: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  readMoreLink,
}) => {
  return (
    <div className="max-w-screen bg-slate-50 border border-slate-200 rounded-lg shadow-lg shadow-gray-300 dark:shadow-gray-700 dark:bg-gray-800 dark:border-gray-700 flex flex-col group">
      <ColorChip />
      <Link href={readMoreLink}>
        <ContentImage
          alt={`${title} - Learn more about this topic`}
          className="rounded-lg px-3 w-full grayscale group-hover:grayscale-0 transition-all duration-300"
          height={500}
          quality={60}
          src={imageUrl}
          width={1500}
        />
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <Link href={readMoreLink}>
          <h5 className="mb-5 text-2xl font-light tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-6 font-extralight text-xl text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-auto pt-2">
          <Link
            // isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={readMoreLink}
            title="Explore"
          >
            Read more
            <svg
              aria-hidden="true"
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              fill="none"
              viewBox="0 0 14 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5h12m0 0L9 1m4 4L9 9"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
