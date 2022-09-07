import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { MdOutgoingMail } from "react-icons/md";
import NavMobile from "./NavMobile";

export default function Header() {
  const [bgColor, setBgColor] = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBgColor(true) : setBgColor(false);
    });
  }, []);

  return (
    <header
      className={`${
        bgColor ? "md:h-24 h-12 dark:bg-[#000000] bg-slate-200" : "md:h-24 h-12"
      } flex fixed top-0 w-full transition-all duration-500 z-20`}
    >
      <div className="flex justify-between w-full container mx-auto items-center lg:px-16 md:px-5 px-3">
        <span
          className={`${
            animated ? "" : "translate-y-10 opacity-0"
          } transform transition duration-[2000ms] ease-in-out flex bg-gradient-to-r from-[#576182] to-[#1fc5a8] shadow-lg items-center space-x-2 lg:px-2 p-1 rounded-full`}
        >
          <MdOutgoingMail className="lg:text-[18px] text-[13px] text-[#970d1a]" />
          <h1 className="lg:text-[16px] text-[12px] text-primary font-bold font-mono">
            marceelodominguez@gmail.com
          </h1>
        </span>
        <div className="lg:block hidden">
          <Nav animated={animated} />
        </div>
        <div className="lg:hidden">
          <NavMobile animated={animated} />
        </div>
      </div>
    </header>
  );
}
