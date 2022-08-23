import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="h-24 bg-secondary">
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
            href="https://twitter.com/MarceeDominguez"
            rel="noreferrer"
            target="_blank"
          >
            <BsTwitter className="text-1xl md:text-2xl lg:text-2xl text-sky-500" />
          </a>
        </div>
        <div className="hover:opacity-75">
          <a
            href="https://github.com/MarceeloDominguez"
            rel="noreferrer"
            target="_blank"
          >
            <BsGithub className="text-1xl md:text-2xl lg:text-2xl text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
