import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="lg:h-24 md:h-24 xl:h-24 h-12 dark:bg-[#000000] bg-slate-200">
      <div className="container mx-auto h-full flex justify-center items-center space-x-8">
        <div className="hover:opacity-75">
          <a
            href="https://www.linkedin.com/in/marcelo-dominguez-351570194/"
            rel="noreferrer"
            target="_blank"
          >
            <BsLinkedin className="text-1xl md:text-2xl lg:text-2xl text-blue-500" />
          </a>
        </div>
        <div className="hover:opacity-75">
          <a
            href="https://github.com/MarceeloDominguez"
            rel="noreferrer"
            target="_blank"
          >
            <BsGithub className="text-1xl md:text-2xl lg:text-2xl dark:text-white" />
          </a>
        </div>
        <div className="hover:opacity-75">
          <a
            href="https://twitter.com/MarceeDominguez"
            rel="noreferrer"
            target="_blank"
          >
            <BsTwitter className="text-1xl md:text-2xl lg:text-2xl text-sky-500" />
          </a>
        </div>
      </div>
    </div>
  );
}
