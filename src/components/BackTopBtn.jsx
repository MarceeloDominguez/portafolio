import React, { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";

export default function BackTopBtn() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="bg-textPrimary hover:bg-textSecondary opacity-0 lg:opacity-100 text-white w-12 h-12 rounded-full fixed right-4 xl:right-24 bottom-28 cursor-pointer flex justify-center items-center transition-all shadow-lg"
      >
        <BsChevronUp className="w-6 h-6 text-primary" />
      </button>
    )
  );
}
