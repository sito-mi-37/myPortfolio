import React from "react";
import ProjectCard from "../components/ProjectCard";
import { useGetProjectsQuery } from "../features/projectApiSlice";
import  DotLoader  from "react-spinners/DotLoader";

const Projects = () => {

  const { 
    data: projects,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetProjectsQuery('projectsList')

  
// console.log(projects)

  let content;

  if(isLoading) content = <DotLoader color={"#3abff8"} size={30}/>

  if(isError){
    content = <p className="text-sm text-red-500">{error?.data?.message}</p>
  }

  if (isSuccess) {
    const {ids, entities} = projects

    content = (
      <div className="flex flex-wrap justify-around  mt-5 w-full gap-5">
        {ids.length 
              ? ids.map((projectId) => (
                  <ProjectCard key={projectId} projectId={projectId} />
                ))
              : <p>No project to display</p>
      }
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
