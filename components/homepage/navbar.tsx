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
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Divider,
} from "@heroui/react";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

import { ColorChip } from "../containers/chips";

import { Logo } from "./logo";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  ChevronDown,
  // TwitterIcon,
  // GithubIcon,
  // DiscordIcon,
  // HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleOpen = () => {
    onOpen();
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <HeroUINavbar
        isMenuOpen={isMenuOpen}
        maxWidth="full"
        position="sticky"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <Logo />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden lg:flex flex-1" justify="center">
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent font-extralight text-md"
            endContent={
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown />
              </motion.div>
            }
            radius="sm"
            variant="light"
            onPress={handleOpen}
          >
            What We Do
          </Button>
          <Drawer
            backdrop={"opaque"}
            className="bg-slate-100 dark:bg-slate-800 min-h-max"
            classNames={{
              base: "rounded-medium",
            }}
            isOpen={isOpen}
            motionProps={{
              variants: {
                enter: {
                  opacity: 0.9,
                  y: 60,
                },
                exit: {
                  y: -200,
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeIn",
                  },
                },
              },
            }}
            placement={"top"}
            onOpenChange={onOpenChange}
          >
            <DrawerContent className="h-auto overflow-y-visible">
              {() => (
                <>
                  <DrawerHeader className="flex flex-col gap-1 text-5xl font-light">
                    <ColorChip />
                    What we do
                    <Divider className="my-2" />
                  </DrawerHeader>
                  <DrawerBody>
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-w-max">
                      <div className="col-span-1 px-5 pb-10">
                        <div className="text-primary font-light text-2xl pb-1">
                          Capabilities
                          <Divider className="my-2" />
                        </div>
                        <div className="mt-2 mx-5 grid grid-cols-1 lg:grid-cols-2 min-w-max">
                          {siteConfig.capabilities.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                              <Link
                                color={
                                  index === 2
                                    ? "primary"
                                    : index ===
                                        siteConfig.capabilities.length - 1
                                      ? "warning"
                                      : "foreground"
                                }
                                href={item.href}
                                size="lg"
                                underline="hover"
                              >
                                {item.label}
                              </Link>
                            </NavbarMenuItem>
                          ))}
                        </div>
                      </div>

                      <div className="col-span-1 min-w-2xl">
                        <div className="text-primary font-light text-2xl pb-1">
                          Industries
                          <Divider className="my-2" />
                        </div>
                        <div className="mt-2 mx-5 grid grid-cols-1 lg:grid-cols-2 gap-0 min-w-max">
                          {siteConfig.industries.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                              <Link
                                color={
                                  index === 2
                                    ? "primary"
                                    : index ===
                                        siteConfig.capabilities.length - 1
                                      ? "warning"
                                      : "foreground"
                                }
                                href={item.href}
                                size="lg"
                                underline="hover"
                              >
                                {item.label}
                              </Link>
                            </NavbarMenuItem>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DrawerBody>
                  <DrawerFooter>
                    <Logo />
                  </DrawerFooter>
                </>
              )}
            </DrawerContent>
          </Drawer>
          <ul className="hidden lg:flex gap-4 justify-center items-center ">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.mobileMenuItems.map((navLink, index) => (
              <NavbarMenuItem key={`${navLink}-${index}`}>
                <Link
                  color={
                    index === siteConfig.mobileMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href={navLink.href}
                  size="lg"
                  onPress={handleLinkClick}
                >
                  {navLink.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </HeroUINavbar>
    </div>
  );
};
