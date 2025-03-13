import { Link } from "@heroui/link";
import React from "react";

export const Footer: React.FC = () => {
  const email = process.env.NEXT_PUBLIC_CORPORATE_EMAIL || "support@kappal.in";
  const phone = process.env.NEXT_PUBLIC_CORPORATE_PHONE || "+123 456 7890";

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">Press</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Support
              </h3>
              <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <Link href="#">FAQ</Link>
                </li>
                <li>
                  <Link href="#">Help Center</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms of Service</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Follow Us
              </h3>
              <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <Link href="#">Facebook</Link>
                </li>
                <li>
                  <Link href="#">Instagram</Link>
                </li>
                <li>
                  <Link href="#">Twitter</Link>
                </li>
                <li>
                  <Link href="#">LinkedIn</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Contact
              </h3>
              <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  Email:{" "}
                  <a
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    href={`tel:${phone}`}
                  >
                    {phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="py-5 text-center text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Ayspire Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
