import React from "react";
import {MdOutlineDownloadForOffline} from "react-icons/md"
import ProfilePic from "../components/ProfilePic";
import Button from "../components/Button";

const About = () => {
  return (
    <div className="w-11/12 sm:w-3/5 mx-auto grid grid-cols-1 justify-items-center items-center py-7">
      <h1 className="text-3xl font-bold mb-3">About <span className="text-secondaryDark">Me</span></h1>
      <ProfilePic />
      <div className=" mt-7 grid grid-cols-1 lg:grid-cols-2 px-3 gap-4 h-100">
        <div className="flex-1 flex-grow h-full py-4 px-3 text-lg border-b lg:border-r lg:border-b-0  bg-gray-900 ">
          <p>
            Hello World👋! <span className="text-aspect">I'm Akujiobi Nelson</span>  full-stack developer. I've been
            an enthusiast of programming my whole life. I'm interested in <span className="text-aspect">web dev</span> 
            , <span className="text-aspect">mobile dev</span> , and also <span className="text-aspect">desktop dev </span> .
          </p>
        </div>
        <div className="flex-1 flex-grow h-full py-4 px-3  text-lg bg-gray-900 rounded-lg">
          <p className="mb-3">
            You can find me on <span className="text-aspect">GitHub</span>  and <span className="text-aspect">LinkedIn</span> . You can download my CV by
            clicking the button below. Beside, if you're interested in a project
            or you want me to build one, you can contact me <span className="text-aspect">here</span> .😃
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default About;
