import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import CircleHero from "./CircleHero";

export default function Hero() {
  return (
    <main
      id="home"
      className="bg-primary min-h-screen relative flex justify-center items-center overflow-hidden"
    >
      <CircleHero />
      <div className="flex justify-center min-h-screen items-center z-10">
        <div className="max-w-4xl lg:max-w-7xl lg:px-16 text-center">
          <h1 className="text-textThird text-[38px] lg:text-[52px] font-rubik tracking-[2px] mb-6">
            Hola 👋, yo soy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-textPrimary to-blue-500 font-bold">
              Marcelo Dominguez
            </span>
          </h1>
          <h2 className="text-textThird text-[22px] lg:text-[30px] font-rubik tracking-[2px] mb-6">
            Soy un Desarrollador Frontend 💻
          </h2>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-textPrimary to-blue-500 text-[16px] lg:text-[20px] font-rubik tracking-[1px] leading-[26px] lg:px-20 md:px-10 italic">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries.
          </p>
          <section className="flex justify-center space-x-8 mt-20">
            <div className="bg-primary shadow-xl rounded-full w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
              <a
                href="https://www.linkedin.com/in/marcelo-dominguez-351570194/"
                rel="noreferrer"
                target="_blank"
              >
                <BsLinkedin className="text-2xl text-blue-500" />
              </a>
            </div>
            <div className="bg-primary shadow-xl rounded-full w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
              <a
                href="https://twitter.com/MarceeDominguez"
                rel="noreferrer"
                target="_blank"
              >
                <BsTwitter className="text-2xl text-sky-500" />
              </a>
            </div>
            <div className="bg-primary shadow-xl rounded-full w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
              <a
                href="https://github.com/MarceeloDominguez"
                rel="noreferrer"
                target="_blank"
              >
                <BsGithub className="text-2xl text-white" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
