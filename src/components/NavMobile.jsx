import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { navigation } from "../helpers/iconSkills";

export default function NavMobile({ animated }) {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 90,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative">
      <div
        className={`${
          animated ? "" : "translate-y-10 opacity-0"
        } transform transition duration-[2000ms] ease-in-out cursor-pointer`}
        onClick={() => setIsOpen(true)}
      >
        <FiMenu className="text-third md:text-4xl text-2xl" />
      </div>

      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-8 h-8 rounded-full bg-secondary fixed top-0 right-0"
      />

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          className="cursor-pointer absolute top-9 right-3 md:top-7 md:right-5"
          onClick={() => setIsOpen(false)}
        >
          <AiOutlineClose className="text-third md:text-4xl text-2xl" />
        </div>
        {navigation.map((item, i) => (
          <li key={i} className="mb-16">
            <Link
              to={item.href}
              smooth={true}
              duration={100}
              className="md:text-5xl text-2xl cursor-pointer capitalize font-bold font-rubik text-transparent bg-clip-text bg-gradient-to-r from-textPrimary to-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
}
