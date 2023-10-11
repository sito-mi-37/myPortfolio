import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  useDeleteProjectMutation,
  useGetProjectsQuery,
} from "../projectApiSlice";
import  DotLoader  from "react-spinners/DotLoader";

const ProjectPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [deleteProject, {isLoading, isSuccess}] = useDeleteProjectMutation();
  const { project } = useGetProjectsQuery("projectsList", {
    selectFromResult: ({ data }) => ({
      project: data?.entities[id],
    }),
  });

  const handleProjectDelete = async (id) => {
    try{
      const res = await deleteProject({ id });
      
        navigate("/jefe/projects");
      
    }catch(err){
      // console.log(err)
    }
    
  };

  let content;

  if(isLoading){
    content = <DotLoader loading={isLoading} size={54} />
  }

  if (!project) {
    content = <p>No project with requested ID</p>;
  } else {
    content = (
      <div className="w-full">
        <h1 className="font-semibold text-2xl">{project?.title} - {project?.version}</h1>
        <div className="border h-[16rem] w-full overflow-hidden ">
          <img className="h-full w-full object-cover" src={project?.imageUrl} alt="" />
        </div>
        <div className="my-5">
          <p>{project?.description}</p>
          <ul className="flex gap-3 text-emerald-300">
            {project?.stacks.map((stack) => (
              <li key={stack.stack}>{stack.stack}</li>
            ))}
          </ul>
          <div className="my-2 flex items-end gap-3">
            <a href={project?.github} target="_blank" rel="noreferrer" className="text-3xl ">
              {<AiFillGithub />}
            </a>
            <a href={project?.liveLink} target="_blank" rel="noreferrer" className="italic  bg-violet-800 px-2 rounded hover:scale-[1.1]">
              LIVE
            </a>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <button
            onClick={() => handleProjectDelete(project?.id)}
            className="p-2 rounded-xl bg-red-600 text-white"
          >
            delete project
          </button>
          <Link
            to={`/jefe/editproject/${project?.id}`}
            className="p-2 border rounded-xl"
          >
            edit project
          </Link>
        </div>
      </div>
    );
  }
  return (
    <section className="w-11/12  sm:w-3/5 mx-auto grid grid-cols-1 justify-items-center items-center py-7">
      {content}
    </section>
  );
};

export default ProjectPage;
