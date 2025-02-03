"use client";
import React from "react";
import { StickyScroll } from "../../core/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { Code, Lightbulb, Paintbrush, PaintBucket, Rocket } from "lucide-react";

const content = [
  {
    title: (
      <div className="h-full flex items-center gap-6 text-6xl ">
        <span>
          <Lightbulb size={40} />
        </span>{" "}
        <h2>Discover</h2>
      </div>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: (
      <div className="flex items-center gap-6 text-6xl ">
        <span>
          <Paintbrush size={40} />
        </span>{" "}
        <h2>Design</h2>
      </div>
    ),

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },

  {
    title: (
      <div className="flex items-center gap-6 text-6xl ">
        <span>
          <Code size={40} />
        </span>{" "}
        <h2>Development</h2>
      </div>
    ),

    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: (
      <div className="flex items-center gap-6 text-6xl ">
        <span>
          <Rocket size={40} />
        </span>
        <h2>Launch</h2>
      </div>
    ),
  },
  {
    title: <div className="flex items-center gap-6 text-6xl "></div>,
  },
  {
    title: <div className="flex items-center gap-6 text-6xl "></div>,
  },
];

export function Workflow() {
  return (
    <div className="mb-20">
      <h1 className="text-6xl text-center mb-10">How it works</h1>
      <StickyScroll content={content} />
    </div>
  );
}
