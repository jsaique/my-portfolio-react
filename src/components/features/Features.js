import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { TfiLayoutPlaceholder } from "react-icons/tfi";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-darkColor"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Lorem"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium ipsam laborum sequi esse quasi pariatur."
          icon={<TfiLayoutPlaceholder />}
        />
        <Card
          title="Lorem"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium ipsam laborum sequi esse quasi pariatur."
          icon={<TfiLayoutPlaceholder />}
        />
        <Card
          title="Lorem"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium ipsam laborum sequi esse quasi pariatur."
          icon={<TfiLayoutPlaceholder />}
        />
        <Card
          title="Lorem"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium ipsam laborum sequi esse quasi pariatur."
          icon={<TfiLayoutPlaceholder />}
        />
        <Card
          title="Lorem"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium ipsam laborum sequi esse quasi pariatur."
          icon={<TfiLayoutPlaceholder />}
        />
        <Card
          title="Lorem"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium ipsam laborum sequi esse quasi pariatur."
          icon={<TfiLayoutPlaceholder />}
        />
      </div>
    </section>
  );
};

export default Features;
