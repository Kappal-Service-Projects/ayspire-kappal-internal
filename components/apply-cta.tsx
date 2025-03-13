"use client";

import { Button } from "@heroui/react";

export default function ApplyCTA() {
  const email =
    process.env.NEXT_PUBLIC_JOB_APPLICATION_EMAIL || "captain@kappal.in";

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-center mb-10">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Join Our Team!
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mt-2">
        Interested? Send your resume to{" "}
        <a
          className="text-blue-600 dark:text-blue-400 hover:underline"
          href={`mailto:${email}`}
        >
          {email}
        </a>{" "}
        and let’s connect!
      </p>
      <Button
        as="a"
        className="mt-4"
        color="primary"
        href={`mailto:${email}`}
        variant="solid"
      >
        Apply Now
      </Button>
    </div>
  );
}
