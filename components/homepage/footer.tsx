import { Link } from "@heroui/link";
import React from "react";

export const Footer: React.FC = () => {
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
                <li>Email: support@ayspire.com</li>
                <li>Phone: +123 456 7890</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-gray-500 dark:text-gray-400">
            &copy; 2025 Ayspire Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
