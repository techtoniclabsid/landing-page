import React from "react";
import { TracingBeam } from "../ui/tracing-beam";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Badge } from "../ui/badge";

const Features = () => {
  const dummyContent = [
    {
      title: "Share Your Vision",
      description: (
        <>
          <p>Tell us about your goals, ideas, and preferences.</p>
        </>
      ),
      image: "/vision.jpg",
    },
    {
      title: "We Design & Build",
      description: (
        <>
          <p>Watch your dream website come to life with our expertise.</p>
        </>
      ),

      image: "/design.jpg",
    },
    {
      title: "Launch & Thrive",
      description: (
        <>
          <p>Go live with a website that grows your business.</p>
        </>
      ),

      image: "/launch.jpg",
    },
  ];
  return (
    <div className="h-full mt-20">
      <div className="text-center">
        <Badge className="bg-cyan-100 text-cyan-500 text-lg sm:text-xl mb-5">
          How it works
        </Badge>
        <h1 className="lg:text-6xl sm:text-4xl text-4xl space-mono ">
          Develop everything with us
        </h1>
      </div>
      <TracingBeam className="px-6 mt-20">
        <div className="max-w-8xl mx-2 sm:mx-0 antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-20">
              <div className="grid grid-cols-2 sm:gap-20 gap-2">
                <div>
                  <Badge className="bg-cyan-100 text-cyan-500 text-md sm:text-lg lg:text-xl mb-5">
                    {item.title}
                  </Badge>
                  <h1 className="text-lg sm:text-2xl lg:text-4xl mb-4 font-bold">
                    {item.description}
                  </h1>
                </div>
                <div className="text-xl  prose prose-sm dark:prose-invert">
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="400"
                      width="400"
                      className="rounded-lg object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Features;
