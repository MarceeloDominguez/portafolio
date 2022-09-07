import React from "react";
import { skills } from "../helpers/iconSkills";
import ShapeDividerSkills from "./ShapeDividerSkills";

export default function Skills() {
  return (
    <div
      id="skills"
      className="lg:h-screen xl:h-screen dark:bg-primary bg-slate-100 relative"
    >
      <ShapeDividerSkills />
      <div className="container mx-auto w-full lg:h-screen lg:px-16 flex flex-col justify-center md:p-4 lg:p-0 p-3">
        <h1 className="font-rubik font-bold capitalize text-textPrimary lg:text-[40px] md:text-[30px] text-[20px] tracking-[1px] z-10">
          About
        </h1>
        <p className="font-rubik dark:text-third text-blue-400 lg:text-[20px] md:text-[16px] text-[12px] mb-8 tracking-[1px] z-10">
          I am a Frontend Developer at constant learning of new technologies. My
          goal is to become a better developer every day, constantly improving
          my code and my knowledge.
        </p>
        <h2 className="font-rubik font-bold capitalize lg:mt-2 text-textPrimary lg:text-[40px] md:text-[30px] text-[20px] md:pt-3 tracking-[1px] z-10">
          Skills
        </h2>
        <p className="font-rubik dark:text-third text-blue-400 lg:text-[20px] md:text-[16px] text-[12px] mb-8 tracking-[1px] z-10">
          These are the technologies I have worked with:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 lg:gap-8 md:gap-4 gap-2">
          {skills.map((item, index) => (
            <div
              key={index}
              className="dark:bg-black bg-white shadow-lg flex flex-col items-center justify-center p-6 rounded-lg hover:scale-105 ease-in duration-300 z-10"
            >
              <img
                src={item.img}
                alt="logo"
                className="xl:w-28 lg:w-12 md:w-20 w-10"
              />
              <span className="capitalize font-rubik dark:text-textThird text-[#293855] text-[12px] md:text-[18px] lg:text-[14px] xl:text-[20px] pt-2">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
