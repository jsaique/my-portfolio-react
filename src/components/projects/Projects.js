import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-darkColor"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Visit my portfolio and make a feedback"
          des="My projects"
        />
      </div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectCard
          title="Comming Soon"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectCard
          title="Comming Soon"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectCard
          title="Comming Soon"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectCard
          title="Comming Soon"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectCard
          title="Comming Soon"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectCard
          title="Comming Soon"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
      </div>
    </section>
  );
};

export default Projects;
