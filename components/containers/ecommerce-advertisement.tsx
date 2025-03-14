"use client";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/react";
import { useTheme } from "next-themes";
import Image from "next/image";

const KappalECommerceAdvertisement: React.FC = () => {
  const { theme } = useTheme(); // Correct destructuring

  return (
    <div>
      <div className="bg-white dark:bg-black shadow-lg relative p-5 border rounded-lg border-teal-400 dark:border-lime-300 ">
        {/* Kappal Ads Tag - Positioned Top Left */}
        <Link href="https://ads.kappal.in" isExternal={true}>
          <Chip
            className="absolute z-20 -top-8 -left-5 bg-slate-100 dark:bg-slate-700 text-black dark:text-white px-1 min-w-max py-1 rounded-md shadow-md text-xs font-light"
            size="sm"
          >
            {" "}
            Kappal Ads
          </Chip>
          {/* <div className="absolute z-20 -top-8 -left-5 bg-slate-200 dark:bg-slate-700 text-black dark:text-white px-1 min-w-max py-1 rounded-md shadow-md text-xs font-light">
            Kappal Ads
          </div> */}
        </Link>
        <div className="uppercase min-w-xs mr-5 ml-0 pt-5 text-3xl text-teal-700 dark:text-lime-300 font-bold  animate-pulse">
          One Platform, Endless Possibilities
        </div>
        <div className="mr-0 ml-0 uppercase text-gray-600 dark:text-white text-xs pb-4">
          e-commerce platform for your business
        </div>

        {/* Image Container */}
        <div className="justify-start items-center flex py-5">
          <Link href="https://ecommerce.kappal.in" isExternal={true}>
            <Image
              alt="Kappal E-Commerce"
              height={500}
              src={
                theme === "dark"
                  ? "/images/advertisements/kappal-ecommerce-logo.png"
                  : "/images/advertisements/kappal-ecommerce-logo-light.png"
              }
              width={500}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KappalECommerceAdvertisement;
