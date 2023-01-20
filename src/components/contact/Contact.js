import React, { useState } from "react";
import Title from "../layouts/Title";
import Contactleft from "./Contactleft";
import Contactright from "./Contactright";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="w-full py-20 border-b-[1px] border-b-darkColor"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Contact" des="Contact Me" />
      </div>

      <div className="w-full">
        <div className="w-full h-auto flex justify-between">
          <Contactleft />
          <Contactright />
        </div>
      </div>
    </section>
  );
};

export default Contact;
