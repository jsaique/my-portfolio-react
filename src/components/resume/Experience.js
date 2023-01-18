import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">XXXXXX</p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-darkColor border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Electronics & Computer Technology"
            subtitle="Asian College (year)"
            result="Completed"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          />
          <ResumeCard
            title="High School"
            subtitle="Anitipolo National High School (year)"
            result="Completed"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          />
          <ResumeCard
            title="Elementary"
            subtitle="Bagong Nayon 2 Elementary School (year)"
            result="Completed"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          />
        </div>
      </div>

      <div className="">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">XXXXXXX</p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-darkColor border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Service Desk Technician"
            subtitle="Dicks Sporting Goods (year)"
            result="USA"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          />
          <ResumeCard
            title="System Analyst"
            subtitle="All Lines Technology (year)"
            result="USA"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          />
          <ResumeCard
            title="Convergys"
            subtitle="Technical Support Representative (year)"
            result="Philippines"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
