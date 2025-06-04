import { Link } from "@heroui/link";
import React from "react";

export const Footer: React.FC = () => {
  const email = process.env.NEXT_PUBLIC_CORPORATE_EMAIL || "support@kappal.in";
  const phone = process.env.NEXT_PUBLIC_CORPORATE_PHONE || "+123 456 7890";

  return (
    <footer className="bg-white bg-opacity-100 dark:bg-gray-900 dark:bg-opacity-100 z-40">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    href="/careers"
                  >
                    Careers
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    href="/blog"
                  >
                    Press
                  </Link>
                </li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Support
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    href="/terms-of-service"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Follow Us
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    isExternal
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    href="https://www.linkedin.com/company/ayspire"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Contact
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  Email:{" "}
                  <a
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline transition-colors"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Phone:{" "}
                  <a
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline transition-colors"
                    href={`tel:${phone}`}
                  >
                    {phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="py-5 text-center text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Ayspire Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
