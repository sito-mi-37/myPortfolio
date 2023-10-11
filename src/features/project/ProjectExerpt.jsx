import React from "react";
import { Link } from "react-router-dom";

const ProjectExerpt = ({project}) => {   

  return (
    <li className="font-semibold underline">
      <Link to={`/jefe/projects/${project?._id}`}>{project?.title}</Link>
    </li>
  );
};

export default ProjectExerpt;
