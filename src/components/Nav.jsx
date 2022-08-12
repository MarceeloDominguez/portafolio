import React from "react";
import { Link } from "react-scroll";

const navigation = [
  { name: "inicio", href: "home" },
  { name: "habilidades", href: "skills" },
  { name: "proyectos", href: "projects" },
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex text-[18px] space-x-8 capitalize">
        {navigation.map((item, i) => (
          <li
            key={i}
            className="text-textPrimary hover:text-textSecondary font-rubik font-bold tracking-[2px] cursor-pointer"
          >
            <Link
              to={item.href}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              //offset={90}
              className="transition-all duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
