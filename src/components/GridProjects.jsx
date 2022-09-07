import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineRocket } from "react-icons/ai";
import { projects } from "../helpers/iconSkills";

export default function GridProjects() {
  return (
    <div className="dark:bg-primary bg-slate-100">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 px-5 lg:px-16 xl:px-16 py-4">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#576182] to-[#1fc5a8] h-full flex flex-col p-3 rounded-xl shadow-lg"
            >
              <span className="text-center font-rubik font-bold capitalize lg:text-xl text-lg tracking-[1px] text-[#1c2e4c]">
                {item.name}
              </span>
              <div className="flex items-center justify-center">
                <img
                  src={item.img}
                  alt="imagen"
                  className="object-contain lg:h-80 md:h-72 h-48 w-96"
                />
              </div>
              <p className="font-rubik lg:text-lg text-sm tracking-[1px] my-4">
                {item.description}
              </p>
              <div className="flex flex-wrap items-end my-4 h-1/6 pb-3">
                {item.technologies.map((item, index) => (
                  <span
                    key={index}
                    className="mr-2 shadow-md px-2 my-1 rounded-full tracking-[1px] lg:text-sm text-xs font-mono font-bold bg-gradient-to-r from-[#ff9c60] to-[#ffd6b8]"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
              <div className="flex justify-around">
                {item.link && (
                  <a href={item.link} rel="noreferrer" target="_blank">
                    <span className="font-mono font-bold capitalize bg-[#970d1a] text-white hover:bg-[#4e204d] flex items-center px-2 py-1 rounded-md cursor-pointer shadow-lg">
                      demo <AiOutlineRocket className="ml-2" />
                    </span>
                  </a>
                )}
                <a href={item.repo} rel="noreferrer" target="_blank">
                  <span className="font-mono font-bold capitalize bg-[#72b2e4] hover:bg-[#92e1e2] flex items-center px-2 py-1 rounded-md cursor-pointer shadow-lg">
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
