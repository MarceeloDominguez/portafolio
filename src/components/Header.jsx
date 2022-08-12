import React, { useEffect, useState } from "react";
import Nav from "./Nav";

export default function Header() {
  const [bgColor, setBgColor] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBgColor(true) : setBgColor(false);
    });
  }, []);

  return (
    <header
      className={`${
        bgColor ? "h-24 bg-secondary" : "h-24"
      } flex fixed top-0 w-full transition-all duration-500 z-20`}
    >
      <div className="flex justify-between w-full container mx-auto items-center lg:px-16">
        <h1 className="text-[26px] text-textPrimary font-bold font-pacifico">
          MD
        </h1>
        <Nav />
      </div>
    </header>
  );
}
