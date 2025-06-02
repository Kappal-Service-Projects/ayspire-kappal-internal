import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Divider,
} from "@heroui/react";
import { NavbarMenuItem } from "@heroui/navbar";
import { Link } from "@heroui/link";

import { ColorChip } from "../containers/chips";

import { Logo } from "./logo";

import { siteConfig } from "@/config/site";

interface WhatWeDoDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const WhatWeDoDrawer: React.FC<WhatWeDoDrawerProps> = ({
  isOpen,
  onOpenChange,
}) => (
  <Drawer
    backdrop={"opaque"}
    className="bg-slate-100 dark:bg-slate-800 min-h-max"
    classNames={{ base: "rounded-medium" }}
    isOpen={isOpen}
    motionProps={{
      variants: {
        enter: { opacity: 0.9, y: 60 },
        exit: {
          y: -200,
          opacity: 0,
          transition: { duration: 0.3, ease: "easeIn" },
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
                            : index === siteConfig.capabilities.length - 1
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
                            : index === siteConfig.capabilities.length - 1
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
);
