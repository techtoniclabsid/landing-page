import React from "react";

const Navbar = () => {
  return (
    <div className=" w-screen h-20 fixed z-10 backdrop-filter backdrop-blur-md bg-opacity-30">
      <div className="h-full py-7 flex justify-between wrapper">
        <div className="flex gap-10  items-center">
          <h1 className="space-mono text-2xl">techtoniclabs.</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
