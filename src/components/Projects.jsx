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
        className="h-fit dark:bg-primary bg-slate-100 lg:pt-0 pt-52"
      >
        <div className="xl:pt-24 container flex flex-col mx-auto w-full lg:px-16 p-3">
          <h1 className="font-rubik font-bold capitalize text-textPrimary lg:text-[40px] md:text-[30px] text-[20px] tracking-[1px] mt-12 lg:mt-0">
            Projects
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 xl:gap-10 xl:mt-10">
            <div>
              <span className="font-rubik font-semibold text-blue-400 dark:text-third lg:text-[24px] md:text-[20px] text-[16px] mb-8 tracking-[1px]">
                Clone app Despegar
              </span>
              <h3 className="font-mono font-semibold text-[12px] xl:text-[18px] md:text-[18px] tracking-[1px] py-2 dark:text-blue-400 text-[#293855]">
                This is a copy of the Despegar ui in which you can see a list of
                cards and see the details of the accommodation cards.
              </h3>
              <h2 className="font-rubik dark:text-textThird tracking-[1px] py-2">
                Technology: <span className="font-semibold">React Native</span>
              </h2>
              <div className="flex xl:flex-row md:flex-row flex-col items-center justify-center gap-3 py-4">
                <img
                  src="https://user-images.githubusercontent.com/70117105/151249483-621d0583-3a78-4fa7-8edc-b5d22fc0d33a.gif"
                  className="w-60 object-cover"
                  alt="gif"
                />
                <img
                  src="https://user-images.githubusercontent.com/70117105/151249609-15700da6-56f9-455d-a9ae-499379cf0e89.gif"
                  className="w-60 object-cover"
                  alt="gif"
                />
              </div>
              <div className="flex items-center justify-center py-2">
                <a
                  href="https://github.com/MarceeloDominguez/Despegar-ui"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="flex items-center justify-center rounded-lg cursor-pointer font-mono font-bold shadow-lg bg-blue-500 py-2 px-5 hover:opacity-75">
                    Repo
                    <BsGithub className="ml-2" />
                  </span>
                </a>
              </div>
            </div>
            <div className="rounded-xl flex items-center justify-center md:mx-10 lg:mx-0">
              <div className="flex py-16">
                <img
                  src={des1}
                  alt="desp"
                  className="w-60 h-96 xl:h-full md:h-full object-cover -translate-y-12 translate-x-6 z-10"
                />
                <img
                  src={des2}
                  alt="desp"
                  className="w-60 h-96 xl:h-full md:h-full object-cover translate-y-12 -translate-x-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <GridProjects />
    </>
  );
}
