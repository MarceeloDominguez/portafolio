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
  //text-transparent bg-clip-text bg-gradient-to-r from-textPrimary to-blue-500
  return (
    <main
      id="home"
      className="bg-primary min-h-screen relative flex justify-center items-center overflow-hidden"
    >
      <ShapeDivider />
      <div className="flex justify-center min-h-screen items-center z-10 flex-col">
        <div
          className={`${
            animated ? "" : "translate-y-10 opacity-0"
          } transform transition duration-[2000ms] ease-in-out flex flex-col justify-center items-center max-w-4xl lg:max-w-7xl lg:px-16 text-center`}
        >
          <h1 className="text-textThird text-[40px] md:text-[54px] lg:text-[58px] font-rubik tracking-[2px] mb-6">
            Hi👋, my name is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-textPrimary to-blue-500 font-bold">
              Marcelo Domínguez
            </span>
          </h1>
          <h2 className="text-textThird text-[16px] md:text-[24px] lg:text-[30px] font-rubik tracking-[2px] mb-6 font-semibold">
            I am a Frontend Developer 💻
          </h2>
          <p className="max-w-[860px] text-blue-400 text-[12px] md:text-[16px] lg:text-[20px] font-mono tracking-[1px] leading-[26px] lg:px-20 md:px-10 px-2">
            I have 1 year of experience working as a web and mobile developer. I
            like to make applications using technologies such as React js and
            React Native.
          </p>
          <section className="flex justify-center space-x-8 mt-20">
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
        <section className="absolute bottom-24">
          <Link
            to={navigation.href}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all duration-300"
          >
            <BsArrowDownCircle className="lg:text-5xl md:text-3xl text-2xl text-primary cursor-pointer animate-bounce hover:opacity-75" />
          </Link>
        </section>
      </div>
    </main>
  );
}
