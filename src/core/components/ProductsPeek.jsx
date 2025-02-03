import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Brush,
  Building,
  LayoutTemplate,
  Newspaper,
  ShoppingCart,
} from "lucide-react";

export const ProductTypes = [
  {
    title: "Landing Page",
    href: "/products/landing-page",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    image: "https://picsum.photos/384/320",
    icon: <LayoutTemplate />,
  },
  {
    title: "Company Profile",
    href: "/products/company-profile",
    description:
      "For sighted users to preview content available behind a link.",
    image: "https://picsum.photos/384/320",
    icon: <Building />,
  },
  {
    title: "Blog & News",
    href: "/products/blog-and-news",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    image: "https://picsum.photos/384/320",
    icon: <Newspaper />,
  },
  {
    title: "Marketplace",
    href: "/products/marketplace",
    description: "Visually or semantically separates content.",
    image: "https://picsum.photos/384/320",
    icon: <ShoppingCart />,
  },
  {
    title: "Fully Customized",
    href: "/products/fully-customized",
    description: "Visually or semantically separates content.",
    image: "https://picsum.photos/384/320",
    icon: <Brush />,
  },
];

export default function ProductsPeek() {
  const [currPeek, setCurrPeek] = useState(0);

  const handleChangeProduct = (index) => {
    setCurrPeek(index);
  };

  return (
    <div className="flex">
      <div className="h-80 w-96 bg-zinc-900">
        <Image
          src={ProductTypes[currPeek].image}
          height={320}
          width={384}
          alt={ProductTypes[currPeek].title}
        />
        <div className="grid gap-1 p-4 -translate-y-full">
          <span className="font-semibold text-lg">
            {ProductTypes[currPeek].title}
          </span>
          <span>{ProductTypes[currPeek].description}</span>
        </div>
      </div>
      <ul className="grid w-80">
        {ProductTypes.map((product, i) => (
          <li key={product.href}>
            <Button
              variant="ghost"
              className="w-full h-full rounded-none"
              asChild
            >
              <Link
                onMouseEnter={() => handleChangeProduct(i)}
                className="!justify-start"
                href={product.href}
              >
                <div className="p-2 mr-1 bg-zinc-900 border border-zinc-800 rounded-md [&_svg]:size-4">
                  {product.icon}
                </div>
                <span className="text-left text-base">{product.title}</span>
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
