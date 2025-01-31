import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-b to-[#09090b] via-black from-cyan-950">
      {children}
    </div>
  );
};

export default Layout;
