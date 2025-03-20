import React from "react";

export const metadata = {
  title: "Pricing - Techtoniclabs",
  description:
    "Techtoniclabs offers flexible, scalable pricing for businesses of all sizes. Get cost-effective solutions tailored to your needs. Explore our plans today!",
};

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-b to-[#09090b] via-black from-cyan-950">
      {children}
    </div>
  );
};

export default Layout;
