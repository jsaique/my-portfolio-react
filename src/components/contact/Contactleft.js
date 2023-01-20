import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const Contactleft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col justify-center gap-8 p-8 rounded-lg shadow-shadowOne">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-lightColor">
          John Aries Saique
        </h3>
        <p className="text-lg font-normal text-gray400">IT guy</p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
          pellentesque habitant morbi tristique.
        </p>
        <p className="txt-base text-gray400 flex items-center gap-2">
          Phone: <span className="text-lightText">30012312345</span>
        </p>
        <p className="txt-base text-gray400 flex items-center gap-2">
          Email: <span className="text-lightText">test@test.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">
          Lets connect
        </h2>
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
    </div>
  );
};

export default Contactleft;
