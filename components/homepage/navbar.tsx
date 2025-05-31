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
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Divider,
} from "@heroui/react";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import React from "react";

import { ColorChip } from "../containers/chips";

import { Logo } from "./logo";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const { isOpen, onOpenChange } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <HeroUINavbar
        className="py-2 z-50"
        isBlurred={false}
        isMenuOpen={isMenuOpen}
        maxWidth="xl"
        position="sticky"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="basis-1/5 sm:basis-full " justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit ">
            <Logo />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent
          className="hidden lg:flex flex-1 justify-end"
          justify="end"
        >
          {/* Uncomment this section to add a dropdown menu for "What We Do" */}
          {/* <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent font-normal text-md"
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
          </Button> */}
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
                                className="font-sans text-lg font-medium tracking-wide px-3 py-1 rounded-md transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
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
                                className="font-sans text-lg font-medium tracking-wide px-3 py-1 rounded-md transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
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
                    "font-sans text-lg font-medium tracking-wide px-3 py-1 rounded-md transition-colors duration-200 hover:bg-primary/10 hover:text-primary data-[active=true]:text-primary data-[active=true]:font-semibold",
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

        {/* <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch /> 
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        </NavbarContent> */}

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          {/* <ThemeSwitch /> */}
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          {/* {searchInput} */}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.mobileMenuItems.map((navLink, index) => (
              <NavbarMenuItem key={`${navLink}-${index}`}>
                <Link
                  className="font-sans text-lg font-medium tracking-wide px-3 py-1 rounded-md transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
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
