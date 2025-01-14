import LanguageToggle from "@/components/ui/languageToggle";
import { ModeToggle } from "@/components/ui/themetoggle";
import React from "react";

const Navbar = () => {
  return (
    <div className=" w-screen h-20 fixed z-10 backdrop-filter backdrop-blur-md  dark:bg-black dark:backdrop-blur-md dark:bg-opacity-70 bg-white  bg-opacity-70">
      <div className="h-full py-7 flex justify-between wrapper ">
        <div className="flex gap-10  items-center">
          <h1 className="space-mono text-2xl">
            techtonic<span className="text-cyan-500">labs.</span>
          </h1>
        </div>
        <div className="flex gap-2 sm:gap-4 items-center">
          <ModeToggle />
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
