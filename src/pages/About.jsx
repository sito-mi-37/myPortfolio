import React from "react";
import {MdOutlineDownloadForOffline} from "react-icons/md"

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="profile-pic">
        <img src="#" alt="" />
      </div>
      <div className="content">
        <div>
          <p>
            Hello World👋! I'm Akujiobi Nelson full-stack developer. I've been
            an enthusiast of programming my whole life. I'm interested in web
            dev, mobile dev, and also desktop dev
          </p>
        </div>
        <div className="divider"></div>
        <div>
          <p>
            You can find me on GitHub and LinkedIn. You can download my CV by
            clicking the button below. Beside, if you're interested in a project
            or you want me to build one, you can contact me here.😃
          </p>
          <button>
          <button><MdOutlineDownloadForOffline /> <p>DOWNLOAD RESUME</p> </button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
