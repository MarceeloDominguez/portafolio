import React, { useEffect, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { Link } from "react-scroll";
//import CircleHero from "./CircleHero";

const navigation = { href: "skills" };

export default function Hero() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <main
      id="home"
      className="bg-primary min-h-screen relative flex justify-center items-center overflow-hidden"
    >
      {/* <CircleHero /> */}
      <div className="flex justify-center min-h-screen items-center z-10 flex-col">
        <div
          className={`${
            animated ? "" : "translate-y-10 opacity-0"
          } transform transition duration-[2000ms] ease-in-out max-w-4xl lg:max-w-7xl lg:px-16 text-center`}
        >
          <h1 className="text-textThird text-[40px] md:text-[48px] lg:text-[54px] font-rubik tracking-[2px] mb-6">
            Hola👋, yo soy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-textPrimary to-blue-500 font-bold">
              Marcelo Domínguez
            </span>
          </h1>
          <h2 className="text-textThird text-[16px] md:text-[24px] lg:text-[30px] font-rubik tracking-[2px] mb-6 font-semibold">
            Soy un Desarrollador Frontend 💻
          </h2>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-textPrimary to-blue-500 text-[12px] md:text-[16px] lg:text-[20px] font-rubik tracking-[1px] leading-[26px] lg:px-20 md:px-10 px-2 italic">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries.
          </p>
          <section className="flex justify-center space-x-8 mt-20">
            <div className="bg-black shadow-xl rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] flex justify-center items-center">
              <a
                href="https://www.linkedin.com/in/marcelo-dominguez-351570194/"
                rel="noreferrer"
                target="_blank"
              >
                <BsLinkedin className="text-1xl md:text-2xl lg:text-2xl text-blue-500" />
              </a>
            </div>
            <div className="bg-black shadow-xl rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] flex justify-center items-center">
              <a
                href="https://twitter.com/MarceeDominguez"
                rel="noreferrer"
                target="_blank"
              >
                <BsTwitter className="text-1xl md:text-2xl lg:text-2xl text-sky-500" />
              </a>
            </div>
            <div className="bg-black shadow-xl rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] flex justify-center items-center">
              <a
                href="https://github.com/MarceeloDominguez"
                rel="noreferrer"
                target="_blank"
              >
                <BsGithub className="text-1xl md:text-2xl lg:text-2xl text-white" />
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
            <BsArrowDownCircle className="lg:text-5xl md:text-3xl text-2xl text-textPrimary cursor-pointer animate-bounce" />
          </Link>
        </section>
      </div>
    </main>
  );
}
