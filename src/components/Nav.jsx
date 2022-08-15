import React from "react";
import { Link } from "react-scroll";
import { navigation } from "../helpers/iconSkills";

export default function Nav({ animated }) {
  return (
    <nav>
      <ul className="flex text-[18px] space-x-8 capitalize">
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
              className="transition-all duration-300 hover:text-textSecondary"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
