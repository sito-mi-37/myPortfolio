import React from "react";
import { GoVerified } from "react-icons/go";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const Home = () => {

  let count = 0
  const installCount = setInterval(() =>{
    count += 1

  }, 1000)


  return (
    <div className="home px-5 grid grid-cols-1  justify-items-center">
      <div className="container py-9 grid grid-cols-1 md:grid-cols-2  items-center justify-items-center gap-3">
        <div className="md:border-r border-[#716f6f] flex flex-col justify-center md:justify-self-end lg:p-5 items-center">
          <div className="profile--pic h-[200px] w-[200px] border rounded-full overflow-hidden outline outline-secondryDark outline-offset-4 outline-2 ">
            <img className="h-full w-full object-cover" src="gunz.jpg" alt="" />
          </div>
          <div className=" p-5 text-center ">
            <p className="font-mono ">hey fellas! i'm</p>
            <div className="title flex items-center gap-1">
              <h2 className="text-[2rem] font-bold">Akujiobi Nelson</h2>
              <GoVerified className="text-2xl" />
            </div>
            <div>
              <h3 className="role text-2xl font-medium">Software Engineer</h3>
            </div>
          </div>
        </div>
        <div className="w-full md:h-[80%] md:px-3">
          <div className="border bg-[rgba(1,158,223,0.2)] w-full md:w-full lg:w-2/3 rounded-xl p-5 flex flex-col gap-2">
            <div className="flex gap-1 mb-2">
              <p className=" h-3 w-3 rounded-full bg-slate-500 "></p>
              <p className=" h-3 w-3 rounded-full bg-slate-500 "></p>
              <p className=" h-3 w-3 rounded-full bg-slate-500 "></p>
            </div>
            <pre className="text-xl">
              $ <code>npm install @roles.js</code>
            </pre>
            <pre className="text-xl text-warm">
              &#x3e;
              <code>
                installing...<code>100%</code>
              </code>
            </pre>
            <pre className="text-xl text-success">
              &#x3e;{" "}
              <code>
                installing... <code>100%</code>
              </code>
            </pre>
          </div>
          <div className="flex justify-center md:justify-end  mt-5 md:mt-2 lg:mt-1 w-full  md:w-full lg:w-[65%] ">
            <button className="flex w-full md:w-4/4 lg:w-2/3   lg:text-sm md:rounded-3xl bg-secondryDark  text-buttonDark justify-center items-center gap-2 py-3 px-2 md:px-0 lg:py-2 lg:px-0  rounded-lg lg:rounded-lg text-2xl md:text-xl  font-medium">
              <MdOutlineDownloadForOffline /> <p>DOWNLOAD RESUME</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
