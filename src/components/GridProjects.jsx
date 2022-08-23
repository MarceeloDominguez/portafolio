import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineRocket } from "react-icons/ai";
import { projects } from "../helpers/iconSkills";

export default function GridProjects() {
  return (
    <div className="bg-primary xl:pt-5">
      <div className="container mx-auto">
        <div className="h-fit grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 px-16 py-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className={`${item.color} h-[60vh] flex flex-col justify-between p-3 rounded-xl shadow-lg`}
            >
              <span className="text-center font-rubik font-bold capitalize text-xl tracking-[1px]">
                {item.name}
              </span>
              <div className="flex flex-col items-center">
                <img
                  src={item.img}
                  alt="imagen"
                  className="object-contain lg:h-80 h-72 w-96"
                />
              </div>
              <p className="font-mono text-lg font-bold max-h-20 h-20">
                {item.description}
              </p>
              <h2 className="text-sm font-mono font-bold tracking-[1px] max-h-14 h-14">
                Technologies:{" "}
                <span className="font-semibold font-rubik">
                  {item.technologies}
                </span>
              </h2>
              <div className="flex justify-around">
                {item.link && (
                  <a href={item.link} rel="noreferrer" target="_blank">
                    <span className="font-rubik capitalize bg-red-500 hover:opacity-75 flex items-center px-2 py-1 rounded-md cursor-pointer shadow-lg shadow-red-500/50">
                      demo <AiOutlineRocket className="ml-2" />
                    </span>
                  </a>
                )}
                <a href={item.repo} rel="noreferrer" target="_blank">
                  <span className="font-rubik capitalize bg-blue-500 hover:opacity-75 flex items-center px-2 py-1 rounded-md cursor-pointer shadow-lg shadow-blue-500/50">
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
