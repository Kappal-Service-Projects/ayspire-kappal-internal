"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Logo } from "./logo";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <HeroUINavbar
        className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-100 py-3 z-50"
        isBlurred={false}
        isMenuOpen={isMenuOpen}
        maxWidth="xl"
        position="static" // fixed is handled by the className
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <Logo className="h-28 w-auto" />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden lg:flex gap-8" justify="end">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium",
                  "font-sans text-base tracking-normal px-4 py-3 rounded-md", // Improved touch targets
                  "focus-outline hover:bg-blue-50", // Added focus and hover states
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
          <NavbarItem>
            <Link
              isExternal
              aria-label="Visit Ayspire LinkedIn page"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-3 rounded-md focus-outline hover:bg-blue-50"
              href="https://www.linkedin.com/company/ayspire"
            >
              <FontAwesomeIcon className="text-xl" icon={faLinkedin} />
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
          <NavbarMenuToggle
            aria-label="Toggle navigation menu"
            className="p-3 text-gray-700 focus-outline rounded-md hover:bg-blue-50"
            icon={<FontAwesomeIcon className="text-xl" icon={faBars} />}
          />
        </NavbarContent>

        <NavbarMenu className="lg:hidden bg-white border-t border-gray-100 z-50">
          <div className="px-6 py-4 space-y-4">
            {siteConfig.mobileMenuItems.map((navLink, index) => (
              <NavbarMenuItem key={`${navLink}-${index}`}>
                <Link
                  className="block text-gray-700 hover:text-blue-600 transition-colors py-3 px-2 rounded-md focus-outline hover:bg-blue-50"
                  href={navLink.href}
                  size="lg"
                  onPress={handleLinkClick}
                >
                  {navLink.label}
                </Link>
              </NavbarMenuItem>
            ))}
            <NavbarMenuItem>
              <Link
                isExternal
                aria-label="Visit Ayspire LinkedIn page"
                className="block text-gray-700 hover:text-blue-600 transition-colors py-3 px-2 rounded-md focus-outline hover:bg-blue-50"
                href="https://www.linkedin.com/company/ayspire"
              >
                LinkedIn
              </Link>
            </NavbarMenuItem>
          </div>
        </NavbarMenu>
      </HeroUINavbar>
    </div>
  );
};
