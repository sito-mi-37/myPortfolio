import React from "react";
import { HiCode } from "react-icons/hi";
import { projectsData } from "../data";
import ProjectCard from "../components/ProjectCard";
import { useGetProjectsQuery } from "../features/projectApiSlice";
import Spinner from "../components/Spinner";

const Projects = () => {

  const {projects} = useGetProjectsQuery('projectsList', {
    selectFromResult: ({data}) => ({
      projects: data?.ids.map(id => data?.entities[id])
    })
  })

  
// console.log(projects)

  let content;
  if (!projects?.length) {
    content = <p>No Projects to display</p>;
  } else {
    content = (
      <div className="flex flex-wrap justify-around  mt-5 w-full gap-5">
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-11/12 sm:w-4/5 mx-auto grid grid-cols-1 justify-items-center items-center py-7">
      <h1 className="text-3xl sm:text-4xl font-bold">
        My <span className="text-secondaryDark">Projects</span>{" "}
      </h1>
      <p className="text-center mt-3">
        Here are some of my projects that I've worked on. Do get inspired!
      </p>
      <div className="mt-10">
        {content}
      </div>
    </div>
  );
};

export default Projects;
