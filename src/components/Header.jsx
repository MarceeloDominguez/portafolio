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
        bgColor ? "h-24 bg-secondary" : "h-24"
      } flex fixed top-0 w-full transition-all duration-500 z-20`}
    >
      <div className="flex justify-between w-full container mx-auto items-center lg:px-16 md:px-5 px-3">
        <h1
          className={`${
            animated ? "" : "translate-y-10 opacity-0"
          } transform transition duration-[2000ms] ease-in-out text-[26px] text-primary font-bold font-mono flex bg-third items-center space-x-2 p-2 rounded-tl-[15px] rounded-br-[15px]`}
        >
          <MdOutgoingMail className="text-[18px] text-red-700" />
          <span className="lg:text-[16px] md:text-[18px] text-[14px]">
            marceelodominguez@gmail.com
          </span>
        </h1>
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
