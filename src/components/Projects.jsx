import React from "react";
import { BsGithub } from "react-icons/bs";
import des1 from "../img/des1.png";
import des2 from "../img/des2.png";
import GridProjects from "./GridProjects";
import { BsArrowDownCircle } from "react-icons/bs";
import { Link } from "react-scroll";

const navigation = { href: "gridProyect" };

export default function Projects() {
  return (
    <>
      <div
        id="projects"
        className="lg:h-screen xl:h-screen dark:bg-primary bg-slate-100 lg:pt-20 pt-10 relative flex justify-center items-center"
      >
        <div className="container flex flex-col mx-auto w-full lg:px-16 p-3">
          <h1 className="font-rubik font-bold capitalize text-textPrimary lg:text-[40px] md:text-[30px] text-[20px] tracking-[1px]">
            Proyectos
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 xl:gap-10 xl:mt-4">
            <div>
              <span className="font-rubik font-bold text-[#1c2e4c] dark:text-third lg:text-xl text-lg mb-8 tracking-[1px]">
                Despegar App
              </span>
              <h3 className="font-rubik lg:text-lg text-sm tracking-[1px] py-3 dark:text-blue-400 text-blue-600">
                Esta es una copia de la app de Despegar en la que se puede ver
                una lista de paquetes, alojamientos, vuelos y ver los detalles
                de cada uno de ellos.
              </h3>
              <span className="shadow-md px-2 py-2 rounded-[6px] tracking-[1px] lg:text-sm text-xs font-rubik font-bold dark:text-slate-300 border-2 border-[#45a29e]">
                React Native
              </span>
              <div className="flex items-center justify-center py-4">
                <img
                  src="https://user-images.githubusercontent.com/70117105/151249483-621d0583-3a78-4fa7-8edc-b5d22fc0d33a.gif"
                  className="lg:w-3/5 xl:w-2/5 md:w-2/5 w-60 object-cover border-4 border-[#45a29e] rounded-[12px]"
                  alt="gif"
                />
              </div>
              <div className="flex items-center justify-center py-2">
                <a
                  href="https://github.com/MarceeloDominguez/Despegar-ui"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="flex items-center justify-center rounded-[6px] cursor-pointer font-mono font-bold shadow-lg bg-blue-400 hover:bg-blue-300 px-2 py-1">
                    Repo
                    <BsGithub className="ml-2" />
                  </span>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex py-12 lg:py-24 w-4/5 justify-center">
                <img
                  src={des1}
                  alt="desp"
                  className="w-2/5 lg:w-4/6 xl:w-2/4 object-center -translate-y-12 translate-x-6 z-10 border-4 border-[#45a29e] rounded-[12px]"
                />
                <img
                  src={des2}
                  alt="desp"
                  className="w-2/5 lg:w-4/6 xl:w-2/4 object-center translate-y-12 -translate-x-6 border-4 border-[#45a29e] rounded-[12px]"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="absolute bottom-12 opacity-0 lg:opacity-100">
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
      <GridProjects />
    </>
  );
}
