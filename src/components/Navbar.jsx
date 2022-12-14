import React, { useEffect } from "react";
import { onscroll } from "../onscroll";
import MobileNavbar from "./MobileNavbar";
import { WideNavbar, options } from "./WideNavbar";

const Navbar = () => {
  useEffect(() => {
    if (options.onscroll) {
      onscroll();
    }
  }, []);

  return (
    <div
      id="navbar"
      className="md:px-20 w-full fixed h-[60px] py-1 flex items-center justify-between px-4 dot5-transition bg-transparent text-white top-0"
    >
      <WideNavbar />
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
