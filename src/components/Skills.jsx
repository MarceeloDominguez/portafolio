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
        <h1 className="font-rubik font-bold capitalize text-textPrimary lg:text-[40px] md:text-[30px] text-[20px] tracking-[1px] z-10 lg:pt-6 md:pt-20 pt-10">
          ¿Quién soy?
        </h1>
        <p className="font-rubik dark:text-third text-blue-400 lg:text-[20px] md:text-[14px] text-[12px] mb-2 tracking-[1px] z-10 xl:w-2/4 lg:w-3/4">
          Soy un desarrollador Frontend en constante aprendizaje de nuevas
          tecnologías, tanto en el Frontend como en el Backend. Mi objetivo es
          convertirme en un mejor desarrollador cada día, mejorando
          constantemente mi código y mi conocimiento.
        </p>
        {/* <p className="font-rubik dark:text-third text-blue-400 lg:text-[20px] md:text-[16px] text-[12px] mb-4 tracking-[1px] z-10 xl:w-2/4 lg:w-3/4">
          Me considero una persona ordenada, apasionada y compañero.
        </p> */}
        <h2 className="font-rubik font-bold capitalize lg:mt-2 text-textPrimary lg:text-[40px] md:text-[30px] text-[20px] md:pt-3 tracking-[1px] z-10">
          Tecnologías
        </h2>
        <p className="font-rubik dark:text-third text-blue-400 lg:text-[20px] md:text-[16px] text-[12px] mb-8 tracking-[1px] z-10">
          Estas son las tecnologías con las que he trabajado:
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
                className="xl:w-28 lg:w-12 md:w-20 w-9"
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
