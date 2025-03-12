import { Link } from "@heroui/link";
import React from "react";
import Image from "next/image";
import { button as buttonStyles } from "@heroui/theme";

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
    <div className="max-w-screen bg-slate-50 border border-slate-200 rounded-b-lg shadow-lg shadow-gray-300 dark:shadow-gray-700 dark:bg-gray-800 dark:border-gray-700">
      <div className="top-0 left-0 mx-1 my-3 flex flex-col items-start justify-start w-1/6 h-2 bg-gradient-to-r rounded-full from-teal-500 via-teal-300 to-teal-200" />

      <Link href={readMoreLink}>
        <Image
          alt={title}
          className="rounded-b-xl dark:shadow-teal-900 shadow-lg px-2 w-full"
          height={500}
          src={imageUrl}
          width={1500}
        />
      </Link>

      <div className="p-5">
        <Link href={readMoreLink}>
          <h5 className="mb-5 text-2xl font-light tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-16 font-extralight text-2xl text-gray-700 dark:text-gray-400">
          {description}
        </p>

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
  );
};

export default Card;
