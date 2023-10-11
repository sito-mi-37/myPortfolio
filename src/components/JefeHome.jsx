import React from "react";
import { useGetProjectsQuery } from "../features/projectApiSlice";
import { useGetSkillsQuery } from "../features/skillApiSlice";
import { useGetContactsQuery } from "../features/contactMessageApiSlice";
import { FaRegBell } from "react-icons/fa";
import MessageList from "./MessageList";

const JefeHome = () => {
  const { projects } = useGetProjectsQuery('projectsList', {
    selectFromResult: ({data}) => ({
      projects: data?.ids.map(id => data?.entities[id])
    })
  });
  const { skills } = useGetSkillsQuery('skillsList', {
    selectFromResult: ({data}) => ({
      skills: data?.ids.map(id => data?.entities[id])
    })
  });
  const { data: messages } = useGetContactsQuery();

  return (
    <div className="w-11/12 sm:w-3/5 mx-auto grid grid-cols-1 justify-items-center items-center py-7">
      <div className="w-full flex flex-col gap-10">
        <div>
          <h1 className="text-3xl">Stats:</h1>
          <table className="w-1/2 border">
            <thead>
              <tr className="text-left">
                <th className="border p-2">Projects</th>
                <th className="border p-2">Skills</th>
                <th className="border p-2">Messages</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">{projects?.length}</td>
                <td className="border p-2">{skills?.length}</td>
                <td className="border p-2">{messages?.ids.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h1 className="flex items-center gap-3 text-2xl">
            <span>Notifications</span>
            <FaRegBell />
          </h1>
          {
            messages?.ids.length 
                  ? <MessageList ids={messages.ids} />
                  : <p>No message to display</p>
          }
        </div>
      </div>
    </div>
  );
};

export default JefeHome;
