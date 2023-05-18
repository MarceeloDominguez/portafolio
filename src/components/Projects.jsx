import React from "react";
import { BsGithub } from "react-icons/bs";
import des1 from "../img/des1.png";
import des2 from "../img/des2.png";
import image1 from "../img/image1.jpeg";
import image2 from "../img/image2.jpeg";
import google from "../img/google-play-store.png";
import GridProjects from "./GridProjects";
import { BsArrowDownCircle } from "react-icons/bs";
import { Link } from "react-scroll";

const navigation = { href: "gridProyect" };

export default function Projects() {
  return (
    <>
      <div
        id="projects"
        className="lg:h-screen xl:h-screen dark:bg-primary bg-slate-100 md:pt-[85px] lg:pt-20 pt-9 relative flex justify-center items-center"
      >
        <div className="container flex flex-col mx-auto w-full lg:px-16 p-3">
          <h1 className="font-rubik font-bold capitalize text-textPrimary lg:text-[40px] md:text-[30px] text-[20px] tracking-[1px]">
            Proyectos
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-10 lg:mt-2">
            <div>
              <span className="font-rubik font-bold text-[#1c2e4c] dark:text-third lg:text-xl text-lg mb-8 tracking-[1px]">
                Films App
              </span>
              <h3 className="font-rubik lg:text-lg text-sm tracking-[1px] py-3 dark:text-blue-400 text-blue-600">
                Esta es una app realizada con React Native y TypeScript. Podras
                buscar información sobre las películas y series más populares y
                actuales. La app está disponible en el Play Store.
              </h3>
              {/* <span className="shadow-md px-2 py-2 rounded-[6px] tracking-[1px] lg:text-sm text-xs font-rubik font-bold dark:text-slate-300 border-2 border-[#45a29e]">
                React Native
              </span> */}
              <div className="lg:flex md:flex md:h-[70vh] lg:h-4/5">
                <div className="flex flex-1 flex-col items-center md:items-start lg:items-start">
                  <div className="md:pt-[135px] lg:pt-[50px] pt-[10px] lg:pb-3 pb-1 max-w-[160px]">
                    <a
                      href="https://github.com/MarceeloDominguez/search_movie"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="flex items-center justify-center rounded-[6px] cursor-pointer font-mono font-bold shadow-lg bg-blue-400 hover:bg-blue-300 px-2 py-1">
                        Repositorio
                        <BsGithub className="ml-2" />
                      </span>
                    </a>
                  </div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.searchmovie"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src={google}
                      alt="logo google play"
                      className="w-[140px] h-20 object-contain"
                    />
                  </a>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <img
                    src="https://user-images.githubusercontent.com/70117105/224550283-91f56bfc-1d67-45ec-bc7c-df30977b6c22.gif"
                    alt="git-movie"
                    className="w-60 border-4 border-[#45a29e] rounded-[12px]"
                  />
                </div>
                {/* <div className="flex items-center justify-center py-2">
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
                <div className="flex items-center justify-center py-4">
                  <img
                    src="https://user-images.githubusercontent.com/70117105/224550283-91f56bfc-1d67-45ec-bc7c-df30977b6c22.gif"
                    className="lg:w-3/5 xl:w-2/5 md:w-2/5 w-60 object-cover border-4 border-[#45a29e] rounded-[12px]"
                    alt="gif"
                  />
                </div> */}
              </div>
              {/* <div className="flex items-center justify-center py-2">
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
              </div> */}
            </div>
            <div className="lg:flex hidden justify-center">
              <div className="flex py-12 lg:py-24 w-4/5 justify-center">
                <img
                  src={image1}
                  alt="desp"
                  className="w-2/5 lg:w-4/6 xl:w-2/4 object-center -translate-y-12 translate-x-6 z-10 border-4 border-[#45a29e] rounded-[12px]"
                />
                <img
                  src={image2}
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
