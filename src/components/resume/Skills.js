import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-20"
    >
      <div className="w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">Design Skill</h2>
        </div>
        <div className="mt-14 w-full "></div>
      </div>

      <div className="">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">Development Skill</h2>
        </div>
        <div className="mt-14 w-full"></div>
      </div>
    </motion.div>
  );
};

export default Skills;
