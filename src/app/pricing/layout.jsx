import React from "react";

export const metadata = {
  title: "Pricing - Techtoniclabs",
  description:
    "Techtoniclabs offers you the flexible pricing model, for your business at any scale.",
};

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-b to-[#09090b] via-black from-cyan-950">
      {children}
    </div>
  );
};

export default Layout;
