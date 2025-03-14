"use client";

import React, { useState } from "react";
import Link from "next/link";
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
import ProductsPeek, { ProductTypes } from "./ProductsPeek";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed z-50 w-screen bg-white/70 dark:bg-black/80 border-b border-zinc-800 backdrop-filter backdrop-blur-md">
        <div className="wrapper h-full py-2 md:py-4 flex gap-10 justify-between items-center">
          <Link href="/">
            <h1 className="space-mono text-xl md:text-2xl">
              techtonic<span className="text-cyan-500">labs.</span>
            </h1>
          </Link>

          {/* Mobile Navbar Trigger */}
          <Button
            variant="link"
            className="flex md:hidden p-0"
            onClick={handleNavbar}
          >
            <Menu
              size={32}
              className="!size-8 stroke-zinc-500"
              strokeWidth="1px"
            />
          </Button>

          {/* Desktop Navbar */}
          <div className="grow hidden md:flex gap-10 items-center justify-between">
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ProductsPeek />
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
        <SheetContent
          side="top"
          className="flex flex-col justify-between z-40 h-[calc(100%-57px)] top-[57px]"
        >
          <ul className="grid gap-2">
            <li>
              <Accordion
                type="single"
                className="text-lg"
                defaultValue="products"
                collapsible
              >
                <AccordionItem value="products" className="border-0">
                  <AccordionTrigger className="px-4 py-2 hover:no-underline">
                    <span>Products</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid gap-3">
                      {ProductTypes.map((product) => (
                        <li key={product.href}>
                          <Link href={product.href}>
                            <div className="flex items-center gap-3 mx-4 px-3 py-2 bg-zinc-900 rounded-md">
                              <div className="shrink-0 grow-0 flex items-center justify-center size-9 bg-zinc-900 border border-zinc-800 rounded-md [&_svg]:size-4">
                                {product.icon}
                              </div>
                              <div className="grid">
                                <span className="text-base">
                                  {product.title}
                                </span>
                                <span className="text-sm text-muted-foreground leading-snug line-clamp-1">
                                  {product.description}
                                </span>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
            <li>
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
            <li>
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
          <div className="my-8">
            <Button
              className="w-full text-left text-lg"
              onClick={() => setIsOpen(false)}
              asChild
            >
              <Link href="/support">Contact Sales</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
