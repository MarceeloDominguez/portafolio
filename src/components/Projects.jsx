import React from "react";
import { BsGithub } from "react-icons/bs";
import des1 from "../img/des1.png";
import des2 from "../img/des2.png";
import GridProjects from "./GridProjects";

export default function Projects() {
  return (
    <>
      <div
        id="projects"
        className="lg:h-screen xl:h-screen dark:bg-primary bg-slate-100"
      >
        <div className="container flex flex-col mx-auto w-full lg:px-16 p-3">
          <h1 className="font-rubik font-bold capitalize text-textPrimary lg:text-[40px] md:text-[30px] text-[20px] tracking-[1px]">
            Projects
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 xl:gap-10 xl:mt-4">
            <div>
              <span className="font-rubik font-bold text-[#1c2e4c] dark:text-third lg:text-xl text-lg mb-8 tracking-[1px]">
                Clone app Despegar
              </span>
              <h3 className="font-rubik lg:text-lg text-sm tracking-[1px] py-3 dark:text-blue-400 text-[#293855]">
                This is a copy of the Despegar ui in which you can see a list of
                cards and see the details of the accommodation cards.
              </h3>
              <span className="shadow-md px-1 rounded-full tracking-[1px] lg:text-sm text-xs font-mono font-bold text-black bg-gradient-to-r from-[#ff9c60] to-[#ffd6b8]">
                React Native
              </span>
              <div className="flex items-center justify-center py-4">
                <img
                  src="https://user-images.githubusercontent.com/70117105/151249483-621d0583-3a78-4fa7-8edc-b5d22fc0d33a.gif"
                  className="lg:w-3/5 xl:w-2/5 md:w-2/5 w-60 object-cover"
                  alt="gif"
                />
              </div>
              <div className="flex items-center justify-center py-2">
                <a
                  href="https://github.com/MarceeloDominguez/Despegar-ui"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="flex items-center justify-center rounded-lg cursor-pointer font-mono font-bold shadow-lg bg-[#72b2e4] px-2 py-1 hover:bg-[#92e1e2]">
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
                  className="w-2/5 lg:w-4/6 xl:w-2/4 object-center -translate-y-12 translate-x-6 z-10"
                />
                <img
                  src={des2}
                  alt="desp"
                  className="w-2/5 lg:w-4/6 xl:w-2/4 object-center translate-y-12 -translate-x-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center font-rubik font-bold text-textPrimary xl:text-[40px] md:text-[30px] text-[20px]">
          <p>More projects...</p>
        </div>
      </div>
      <GridProjects />
    </>
  );
}
