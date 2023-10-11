import React from "react";
import { Link } from "react-router-dom";
import { useGetProjectsQuery } from "../projectApiSlice";
import ProjectList from "./ProjectList";

const JefeProjects = () => {

  const {projects} = useGetProjectsQuery('projectsList', {
    selectFromResult: ({data}) => ({
      projects: data?.ids.map(id => data?.entities[id])
    })
  })

  return (
    <section className="w-11/12 sm:w-3/5 mx-auto grid grid-cols-1 justify-items-center items-center py-7">
      <div className="w-full">
      <div className="flex justify-between items-end">
        <h1 className="text-3xl">Project World...</h1>
        <Link to={"/jefe/newproject"} className="text-green-500">New Project +</Link>
      </div>
      { projects?.length ? (
        <ProjectList projects={projects} />
      ) : (
        <p>No project to display</p>
      )}
      </div>
    </section>
  );
};

export default JefeProjects;
