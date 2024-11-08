import React from "react";

export default function Nav() {
  return (
    <nav className=" px-4 relative  text-black bg-white h-[66px] overflow-hidden pointer-events-none flex items-center">
      {navBarSHowing === 1 && <Navbar nav1v={nav1v} />}
      {navBarSHowing === 2 && <Navbar2 nav2v={nav2v} />}
    </nav>
  );
}
