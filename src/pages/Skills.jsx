import React from "react";
import SkillCard from "../components/SkillCard";
import { useGetSkillsQuery } from "../features/skillApiSlice";
import DotLoader from "react-spinners/DotLoader";

const Skills = () => {
  const {
    data: skills,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSkillsQuery();

  console.log(skills);

  let content;

  if (isLoading) {
    content = <DotLoader color={"#3abff8"}  size={30}/>;
  }
  if (isError) {
    content = <p className="text-red-500">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids, entities } = skills;

    content = (
      <div className="mt-10">
        {ids?.length ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-6">
            {ids?.map((skillId) => (
              <SkillCard key={skillId} skillId={skillId} />
            ))}
          </div>
        ) : (
          <p>No skill to display</p>
        )}
      </div>
    );
  }

  return (
    <div className="w-11/12 sm:w-3/5 mx-auto grid grid-cols-1 justify-items-center items-center py-7">
      <h1 className="text-3xl sm:text-4xl font-bold">
        My <span className="text-secondaryDark">Skills</span>{" "}
      </h1>
      <p className="text-center mt-3">
        Here are some <span className="text-aspect">skills</span> and{" "}
        <span className="text-aspect">technologies</span> that I've been working
        with.
      </p>
      <div className="mt-10">{content}</div>
    </div>
  );
};

export default Skills;
