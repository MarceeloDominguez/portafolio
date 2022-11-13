import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineRocket } from "react-icons/ai";
import { projects } from "../helpers/iconSkills";

export default function GridProjects() {
  return (
    <div className="dark:bg-primary lg:pt-24 bg-slate-100" id="gridProyect">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 px-5 lg:px-16 xl:px-16 py-4">
          {projects.map((item, index) => (
            <div
              key={index}
              className="dark:bg-[#000000] bg-[#fff] h-full flex flex-col p-3 rounded-[8px] shadow-lg"
            >
              <div>
                <img
                  src={item.img}
                  alt="imagen"
                  className={`w-full h-80 ${
                    item.sizeimage && "object-contain"
                  }`}
                />
              </div>
              <span className="text-center font-rubik font-bold capitalize lg:text-[20px] text-lg tracking-[1px] text-[#45a29e] mt-2">
                {item.name}
              </span>
              <p className="font-rubik lg:text-[15px] text-sm tracking-[1px] my-4 dark:text-slate-300 text-center">
                {item.description}
              </p>
              <div className="flex flex-wrap items-end justify-center my-4 h-1/6 pb-3">
                {item.technologies.map((item, index) => (
                  <span
                    key={index}
                    className="mr-2 shadow-md px-2 my-1 py-1 rounded-[6px] capitalize tracking-[1px] lg:text-[13px] text-[12px] font-rubik font-bold border-2 border-[#45a29e] dark:text-slate-300"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
              <div className="flex justify-around mb-2">
                {item.link && (
                  <a href={item.link} rel="noreferrer" target="_blank">
                    <span className="font-mono font-bold capitalize bg-red-900 text-white hover:bg-red-700 flex items-center px-2 py-1 rounded-[6px] cursor-pointer shadow-lg">
                      demo <AiOutlineRocket className="ml-2" />
                    </span>
                  </a>
                )}
                <a href={item.repo} rel="noreferrer" target="_blank">
                  <span className="font-mono font-bold capitalize bg-blue-400 hover:bg-blue-300 flex items-center px-2 py-1 rounded-[6px] cursor-pointer shadow-lg">
                    repo <BsGithub className="ml-2" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
