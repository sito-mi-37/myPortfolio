import React from "react";
import SkillCard from "../components/SkillCard";
import { skillsData } from "../data";

const Skills = () => {
  return (
    <div className="w-11/12 sm:w-3/5 mx-auto grid grid-cols-1 justify-items-center items-center py-7">
      <h1 className="text-3xl sm:text-4xl font-bold">My <span className="text-secondaryDark">Skills</span> </h1>
      <p className="text-center mt-3">
        Here are some of my <span className="text-aspect">skills</span>  and <span className="text-aspect">technologies</span>  that I've been working with.
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-6">
        {
          skillsData.map((data, index)=>(
            <SkillCard src={data.src} skillName={data.skillName}  key={index} />
          ))
        }

      </div>
    </div>
  );
};

export default Skills;
