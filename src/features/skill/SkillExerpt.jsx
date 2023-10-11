import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDeleteSkillMutation } from "../skillApiSlice";

const SkillExerpt = ({skill}) => {

  const [deleteSkill] = useDeleteSkillMutation()
// console.log(skill)
  return (
    <li className="flex justify-between p-2 border w-[14rem] rounded-xl bg-white/5 backdrop-blur-2xl ">
      <div className="w-[6rem] h-[7rem]   overflow-hidden">
        <img className=" h-[8rem] object-cover rounded-md" src={skill?.imageUrl} alt={skill.title} />
      </div>
      <div className="w-1/2 ml-2 flex flex-col justify-between items-end ">
        <p>{skill.title}</p>
        <button onClick={() => deleteSkill({id: skill?.id})} className="text-red-600 hover:text-red-400">
          {<FaTrash />}
        </button>
      </div>
    </li>
  );
};

export default SkillExerpt;
