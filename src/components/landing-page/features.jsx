import React from "react";
import { TracingBeam } from "../ui/tracing-beam";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const Features = () => {
  const dummyContent = [
    {
      title: "Share Your Vision",
      description: (
        <>
          <p>lorem ipsum dolor sit amet et consectetur adipiscing</p>
        </>
      ),
      image: "/vision.jpg",
    },
    {
      title: "We Design & Build",
      description: (
        <>
          <p>lorem ipsum dolor sit amet et consectetur adipiscing</p>
        </>
      ),

      image: "/design.jpg",
    },
    {
      title: "Launch & Thrive",
      description: (
        <>
          <p>lorem ipsum dolor sit amet et consectetur adipiscing</p>
        </>
      ),

      image: "",
    },
  ];
  return (
    <div className="h-full  mt-20">
      <h1 className="lg:text-8xl sm:text-6xl text-4xl space-mono text-center">
        How it works
      </h1>
      <TracingBeam className="px-6 mt-20">
        <div className="max-w-2xl sm:mx-auto mx-4  antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h1 className="text-xl sm:text-4xl mb-4 font-bold">
                {item.title}
              </h1>

              <div className="text-xl  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Features;
