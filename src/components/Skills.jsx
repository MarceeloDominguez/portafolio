import React from "react";
import { skills } from "../helpers/iconSkills";

export default function Skills() {
  return (
    <div
      id="skills"
      className="lg:min-h-screen md:h-fit xl:h-screen xl:pt-1 md:pt-48 dark:bg-primary bg-slate-100 z-10"
    >
      <div className="container mx-auto w-full h-screen lg:px-16 flex flex-col justify-center md:p-4 lg:p-0 p-3 pt-48 md:pt-0 lg:pt-0">
        <h1 className="font-rubik font-bold capitalize text-textPrimary lg:text-[40px] md:text-[30px] text-[20px] md:pt-3 tracking-[1px] mt-24 lg:mt-0">
          About
        </h1>
        <p className="font-mono font-semibold dark:text-third text-[#293855] lg:text-[24px] md:text-[20px] text-[14px] mb-8 tracking-[1px]">
          I am a Frontend Developer at constant learning of new technologies. My
          goal is to become a better developer every day, constantly improving
          my code and my knowledge.
        </p>
        <h2 className="font-rubik font-bold capitalize lg:mt-2 text-[#45a29e] lg:text-[40px] md:text-[30px] text-[20px] md:pt-3 tracking-[1px]">
          Skills
        </h2>
        <p className="font-mono font-semibold dark:text-third text-[#293855] lg:text-[24px] md:text-[20px] text-[14px] mb-8 tracking-[1px]">
          These are the technologies I have worked with:
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-6 lg:gap-8 md:gap-4 gap-2">
          {skills.map((item, index) => (
            <div
              key={index}
              className="dark:bg-black bg-white shadow-lg flex flex-col items-center justify-center p-6 rounded-lg hover:scale-105 ease-in duration-300"
            >
              <img src={item.img} alt="logo" className="lg:w-28 md:w-20 w-10" />
              <span className="capitalize font-rubik dark:text-textThird text-[#293855] text-[12px] md:text-[18px] lg:text-[20px] pt-2">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
