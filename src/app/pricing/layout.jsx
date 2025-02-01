import React from "react";

export const metadata = {
  title: "Pricing - Techtoniclabs",
  description:
    "At Techtoniclabs, we offer a flexible pricing model designed to meet the needs of businesses at any scale. Whether you're a startup, a growing company, or an established enterprise, our tailored pricing plans ensure you get the right solutions without breaking the bank. We understand that every business is unique, which is why our pricing is customizable, transparent, and scalable to fit your specific requirements. From basic packages to premium options, we provide cost-effective solutions that deliver exceptional value and support your growth. Explore our pricing plans today and discover how we can help you achieve your goals with the perfect balance of quality and affordability. Let us build something great together!",
};

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-b to-[#09090b] via-black from-cyan-950">
      {children}
    </div>
  );
};

export default Layout;
