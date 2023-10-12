import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { useGetProjectsQuery } from "../features/projectApiSlice";

const ProjectCard = ({ projectId }) => {

  const {project} = useGetProjectsQuery('projectsList', {
    selectFromResult: ({data}) => ({
      project: data?.entities[projectId]
    })
  })
  return (
    <section className="w-[20rem] sm:w-[30rem] rounded-xl p-2 my-5 bg-white/10 backdrop-blur-xl shadow-xl">
        <div className="w-full h-[9.5rem] overflow-hidden rounded-xl">
            <img className="rounded-xl "  src={project?.imageUrl} alt="" />
        </div>
      <article className="p-2 flex flex-col justify-between h-1/2">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">{project?.title}</h2>
          <h5 className="text-sm border px-2 rounded-md">v{project?.version}</h5>

        </div>
        <div className="lang-used">
          <h4 className="text-sm">{project?.description}</h4>
        </div>
        <div className="flex ">
          {
            project?.stacks.map(stack => (
              <p key={stack.stack} className="mr-2 text-yellow-600 text-sm font-semibold italic">{stack.stack}</p>
            ))
          }
        </div>
        <div className="my-2 flex items-end gap-3">
            <a href={project?.github} target="_blank" rel="noreferrer" className="text-3xl ">
              {<AiFillGithub />}
            </a>
            <a href={project?.liveLink} target="_blank" rel="noreferrer" className="italic  bg-violet-800 px-2 rounded hover:scale-[1.1] font-bold">
              Live
            </a>
          </div>
      </article>
    </section>
  );
};

export default ProjectCard;
