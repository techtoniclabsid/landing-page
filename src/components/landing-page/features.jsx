import React from "react";
import { TracingBeam } from "../ui/tracing-beam";
import Image from "next/image";
import { Badge } from "../ui/badge";

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

      image: "/launch.jpg",
    },
  ];
  return (
    <div className="h-full mt-20">
      <div className="text-center">
        <Badge className="bg-cyan-100 dark:shadow-md dark:shadow-cyan-500 dark:border-cyan-300 text-cyan-500 text-lg sm:text-xl mb-5">
          How it works
        </Badge>
        <h1 className="lg:text-6xl sm:text-4xl text-3xl font-bold ">
          Develop your website idea with us
        </h1>
      </div>
      <TracingBeam className="px-6 mt-20">
        <div className="max-w-8xl ml-4 sm:mx-0 antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-20">
              <div className="grid grid-rows-1 sm:grid-cols-2 sm:gap-20 gap-2">
                <div>
                  <Badge className="bg-cyan-100 text-cyan-500 text-md sm:text-lg lg:text-xl mb-5 dark:shadow-cyan-500 dark:border-cyan-300  dark:shadow-md">
                    {item.title}
                  </Badge>
                  <h1 className="text-lg sm:text-2xl lg:text-4xl mb-4">
                    {item.description}
                  </h1>
                </div>
                <div className="text-xl  prose prose-sm dark:prose-invert ">
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
