import React from "react";
import { logo } from "../../assets/index";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaGit,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-auto py-20 border-b-[1px] borded-b-darkColors grid grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt={logo} />
        <div className="flex gap-4">
          <a
            className="bannerIcon"
            href="https://www.facebook.com/johnsaique"
            target={0}
          >
            <FaFacebookF />
          </a>
          <a
            className="bannerIcon"
            href="https://www.instagram.com/just_zaki_/"
            target={0}
          >
            <FaInstagram />
          </a>
          <a
            className="bannerIcon"
            href="https://github.com/jsaique"
            target={0}
          >
            <FaGithub />
          </a>
          <a
            className="bannerIcon"
            href="https://www.linkedin.com/in/john-saique-a20797144/"
            target={0}
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <a
              href="https://www.linkedin.com/in/john-saique-a20797144/"
              target={0}
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group"
            >
              About
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Portfolio
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Services
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Blog
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Contact
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <a className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Authentication
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              System Status
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Terms of Service
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Pricing
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Overnight
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Developers
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <a className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Documentation
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Authentication
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              API Reference
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Support
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Open Source
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
