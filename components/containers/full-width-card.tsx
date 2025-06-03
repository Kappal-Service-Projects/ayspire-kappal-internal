import React from "react";
import Link from "next/link";
import clsx from "clsx";

import { SectionHeader } from "@/components/ui/SectionHeader";

const FullWidthCard = ({ title, description, href = "#" }) => {
  return (
    <section className="max-w-screen py-3">
      <Link
        className={clsx(
          "block w-full p-6 border rounded-lg shadow-sm transition-colors",
          "bg-slate-100 border-gray-200 hover:bg-slate-200",
          "dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
        )}
        href={href}
      >
        <SectionHeader
          className="mb-2"
          gradientText={title}
          gradientVariant="blue"
          primaryText=""
          size="sm"
        />
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p className="text-sm font-light py-2 text-slate-500 dark:text-primary">
          Read more...
        </p>
      </Link>
    </section>
  );
};

export default FullWidthCard;
