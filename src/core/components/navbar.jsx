"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/core/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/core/components/ui/navigation-menu";
import { Sheet, SheetContent } from "@/core/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/core/components/ui/accordion";
import { Menu } from "lucide-react";
import { Button } from "@/core/components/ui/button";

const components = [
  {
    title: "Landing Page",
    href: "/products/landing-page",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Company Profile",
    href: "/products/company-profile",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Blog & News",
    href: "/products/blog-and-news",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Marketplace",
    href: "/products/marketplace",
    description: "Visually or semantically separates content.",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed z-50 w-screen bg-white/70 dark:bg-black/70 border-b border-zinc-800 backdrop-filter backdrop-blur-md">
        <div className="wrapper h-full py-5 md:py-4 flex gap-10 justify-between items-center">
          <Link href="/">
            <h1 className="space-mono text-xl md:text-2xl">
              techtonic<span className="text-cyan-500">labs.</span>
            </h1>
          </Link>

          {/* Mobile Navbar Trigger */}
          <Button
            variant="outline"
            size="icon"
            className="block md:hidden"
            onClick={handleNavbar}
          >
            <Menu size={96} />
          </Button>

          {/* Desktop Navbar */}
          <div className="grow hidden md:flex gap-10 items-center justify-between">
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent data-state={"open"}>
                      <ul className="grid grid-cols-2 gap-3 p-4 w-[500px] lg:w-[600px]">
                        {components.map((component) => (
                          <ListItem
                            key={component.href}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/pricing" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Pricing
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/support" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Support
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <button className="bg-transparent h-fit no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <Link href={"/"}>
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span className="text-[0.9rem] font-normal">
                    Contact Sales
                  </span>
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <Sheet
        open={isOpen}
        onOpenChange={handleNavbar}
        modal={false}
        className="block md:hidden"
      >
        <SheetContent side="top" className="z-40 top-[80px]">
          <ul>
            <li className="mb-2">
              <Accordion type="single" className="text-lg" collapsible>
                <AccordionItem value="products" className="border-0">
                  <AccordionTrigger className="px-4 py-2 hover:no-underline">
                    <span>Products</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <ul className="grid gap-2">
                      {components.map((component) => (
                        <li key={component.href}>
                          <Link href={component.href}>
                            <div className="grid p-2 bg-zinc-900 rounded-md">
                              <span className="text-lg">{component.title}</span>
                              <span>{component.description}</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
            <li className="mb-2">
              <Button
                variant="ghost"
                className="w-full text-left text-lg"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link className="text-left !justify-start" href="/pricing">
                  Pricing
                </Link>
              </Button>
            </li>
            <li className="mb-2">
              <Button
                variant="ghost"
                className="w-full text-left text-lg"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link className="text-left !justify-start" href="/support">
                  Support
                </Link>
              </Button>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
};

export const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block h-32 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Navbar;
