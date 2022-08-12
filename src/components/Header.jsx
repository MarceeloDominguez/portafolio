import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { MdOutgoingMail } from "react-icons/md";

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
      } flex fixed top-0 w-full transition-all duration-500 z-20 md:px-5`}
    >
      <div className="flex justify-between w-full container mx-auto items-center lg:px-16">
        <h1 className="text-[26px] text-primary font-bold font-rubik flex bg-third items-center space-x-2 p-2 rounded-tl-[15px] rounded-br-[15px]">
          <MdOutgoingMail className="text-[18px] text-red-700" />
          <span className="text-[16px]">marceelodominguez@gmail.com</span>
        </h1>
        <Nav />
      </div>
    </header>
  );
}
