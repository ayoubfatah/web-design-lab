import React from "react";

export default function Nav() {
  return (
    <nav className=" px-4 relative  text-black bg-white h-[66px] overflow-hidden pointer-events-none flex items-center">
      {navBarSHowing === 1 && <Navbar navbarVersion1={navbarVersion1} />}
      {navBarSHowing === 2 && <Navbar2 navbarVersion2={navbarVersion2} />}
    </nav>
  );
}
