import React from "react";
import { Link } from "react-scroll";
import { navigation } from "../helpers/iconSkills";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";
import { useContextTheme } from "../contextTheme/contextTheme";

export default function Nav({ animated }) {
  const { theme, handleThemeSwitch } = useContextTheme();

  return (
    <nav>
      <ul className="flex text-[18px] space-x-8 capitalize items-center">
        {navigation.map((item, i) => (
          <li
            key={i}
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-[2000ms] ease-in-out text-textPrimary font-rubik font-bold tracking-[2px] cursor-pointer`}
          >
            <Link
              to={item.href}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all duration-300 hover:text-[#293855] dark:hover:text-[#9fa2a8]"
            >
              {item.name}
            </Link>
          </li>
        ))}

        <button
          type="button"
          onClick={handleThemeSwitch}
          className={`${
            animated ? "" : "translate-y-10 opacity-0"
          } transform transition duration-[2000ms]`}
        >
          {theme === "dark" ? (
            <FiSun className="text-slate-200" />
          ) : (
            <BsMoonStars />
          )}
        </button>
      </ul>
    </nav>
  );
}
