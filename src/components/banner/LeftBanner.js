import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaGit,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Self-Taught.", "Coder.", "Software Developer."],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 70,
    delaySpeed: 2000,
  });
  return (
    <div className="w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <span className="text-lg font-normal uppercase">
          Welcome to my Portfolio
        </span>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm
          <span className="text-designColor capitalize"> John Aries</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle=" | "
            cursorColor="#ff014f"
          />
        </h2>
        <p>
          I'm a self-taught software developer who is ready for to learn and
          accept more challenges. I love to create awesome projects.
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find Me In
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best skill on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
            <span className="bannerIcon">
              <FaGit />
            </span>
            <span className="bannerIcon">
              <IoLogoJavascript />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
