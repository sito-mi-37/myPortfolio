import React from "react";
import SkillCard from "../components/SkillCard";
import { useGetSkillsQuery } from "../features/skillApiSlice";
import { DotLoader } from 'react-spinners/DotLoader'

const Skills = () => {
  const {skills} = useGetSkillsQuery('skillsList', {
    selectFromResult: ({data}) => ({
      skills: data?.ids.map(id => data?.entities[id])
    })
  })

 
  // console.log(skills)


  return (
    <div className="w-11/12 sm:w-3/5 mx-auto grid grid-cols-1 justify-items-center items-center py-7">
      <h1 className="text-3xl sm:text-4xl font-bold">My <span className="text-secondaryDark">Skills</span> </h1>
      <p className="text-center mt-3">
        Here are some <span className="text-aspect">skills</span>  and <span className="text-aspect">technologies</span>  that I've been working with.
      </p>
      <div className="mt-10">
        {
          skills?.length 
                  ? (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-6">
                      {skills?.map((skill) => (
                        <SkillCard key={skill?._id} skill={skill} />
                      ))}
                    </div>
                  )
                  : <p>No skill to display</p>
        }
      </div>
    </div>
  );
};

export default Skills;
