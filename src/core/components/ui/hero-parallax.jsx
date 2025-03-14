"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "./hover-border-gradient";
import { Button } from "./button";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-full pt-40 overflow-hidden   antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="z-10 relative left-0 top-0 flex flex-col justify-center items-center w-full max-w-7xl sm:mx-auto px-8 md:px-4 py-10 md:py-40">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight md:leading-none md:text-center">
        <span className="inter">Your Dream Website</span>
        <br />
        <span className="inter bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
          Built to Perfection
        </span>
      </h1>
      <p className="mt-8 max-w-sm md:max-w-2xl text-base md:text-lg md:text-center text-zinc-200">
        From sleek designs to seamless functionality, we craft professional
        websites that captivate, convert, and grow your business. Your success
        starts here.
      </p>

      <div className="mt-12 md:mt-6 flex flex-col md:flex-row gap-4 md:gap-8 w-full justify-center">
        <Button
          className="p-4 md:px-12 md:py-6 text-sm md:text-base bg-cyan-500 hover:bg-cyan-600"
          asChild
        >
          <Link href="/pricing">Get Started</Link>
        </Button>

        <Button
          variant="outline"
          className="px-6 py-4 md:px-12 md:py-6 text-sm md:text-base bg-transparent border-zinc-200 hover:bg-zinc-200 hover:text-black"
          asChild
        >
          <Link href="https://wa.me/62811223344" target="_blank">
            Contact Us
          </Link>
        </Button>
      </div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Image
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
