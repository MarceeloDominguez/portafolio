import React, { useEffect, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { Link } from "react-scroll";
import ShapeDivider from "./ShapeDivider";

const navigation = { href: "skills" };

export default function Hero() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <main
      id="home"
      className="dark:bg-primary bg-slate-100 h-screen relative flex justify-center items-center overflow-hidden"
    >
      <ShapeDivider />
      <div className="flex justify-center items-center z-10 flex-col">
        <div
          className={`${
            animated ? "" : "translate-y-10 opacity-0"
          } transform transition duration-[2000ms] ease-in-out w-3/4 flex flex-col lg:px-16 text-center items-center`}
        >
          <h1 className="dark:text-textThird text-[#293855] text-[22px] md:text-[54px] lg:text-[58px] font-rubik tracking-[2px] mb-6">
            Hola👋, mi nombre es{" "}
            <span className="text-textPrimary font-bold">
              Marcelo Domínguez
            </span>
          </h1>
          <h2 className="dark:text-textThird text-[14px] md:text-[24px] lg:text-[30px] font-rubik tracking-[2px] mb-6 font-semibold">
            Soy un desarrollador Frontend 💻
          </h2>
          <p className="dark:text-blue-400 text-blue-600 text-[12px] md:text-[16px] lg:text-[20px] font-rubik tracking-[1px] leading-[26px] xl:w-4/6 md:px-10 px-2">
            Me gusta desarrollar aplicaciones mobile con React Native y
            aplicaciones web con React.
          </p>
          <section className="flex justify-center space-x-8 mt-10">
            <div className="bg-black shadow-xl rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] flex justify-center items-center hover:opacity-75">
              <a
                href="https://www.linkedin.com/in/marcelo-dominguez-351570194/"
                rel="noreferrer"
                target="_blank"
              >
                <BsLinkedin className="text-1xl md:text-2xl lg:text-2xl text-blue-500" />
              </a>
            </div>
            <div className="bg-black shadow-xl rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] flex justify-center items-center hover:opacity-75">
              <a
                href="https://github.com/MarceeloDominguez"
                rel="noreferrer"
                target="_blank"
              >
                <BsGithub className="text-1xl md:text-2xl lg:text-2xl text-white" />
              </a>
            </div>
            <div className="bg-black shadow-xl rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] flex justify-center items-center hover:opacity-75">
              <a
                href="https://twitter.com/MarceeDominguez"
                rel="noreferrer"
                target="_blank"
              >
                <BsTwitter className="text-1xl md:text-2xl lg:text-2xl text-sky-500" />
              </a>
            </div>
          </section>
        </div>
        <section className="absolute bottom-12">
          <Link
            to={navigation.href}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all duration-300"
          >
            <BsArrowDownCircle className="lg:text-5xl md:text-3xl text-2xl text-textPrimary cursor-pointer animate-bounce hover:opacity-75" />
          </Link>
        </section>
      </div>
    </main>
  );
}
