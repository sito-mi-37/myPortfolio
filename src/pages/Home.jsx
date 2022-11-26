import React from "react";
import { GoVerified } from "react-icons/go";
import ProfilePic from "../components/ProfilePic";
import Button from "../components/Button";

const Home = () => {

  let count = 0
  const installCount = setInterval(() =>{
    count += 1

  }, 1000)


  return (
    <div className="w-11/12 sm:w-4/5 mx-auto grid grid-cols-1 justify-items-center items-center py-5">
      <div className="container py-9 grid grid-cols-1  items-center justify-items-center ">
        <div className=" flex flex-col justify-center  items-center">
          <ProfilePic />
          <div className="p-3 text-center ">
            <p className="font-mono ">hey fellas! i'm</p>
            <div className=" flex items-center gap-2">
              <h2 className="text-3xl sm:text-4xl font-bold">Akujiobi Nelson</h2>
              <GoVerified className="text-2xl" />
            </div>
            <div>
              <h3 className=" text-2xl font-medium">Software Engineer</h3>
            </div>
          </div>
        </div>
        <div className=" w-5/6 lg:w-1/3 md:px-3">
          <div className="border border-[#5c5b5b] bg-[rgba(1,105,223,0.15)] w-full md:w-full  rounded-xl p-5 flex flex-col gap-2">
            <div className="flex gap-2 mb-2">
              <p className=" h-3 w-3 rounded-full bg-slate-500 "></p>
              <p className=" h-3 w-3 rounded-full bg-slate-500 "></p>
              <p className=" h-3 w-3 rounded-full bg-slate-500 "></p>
            </div>
            <pre className="text-md">
              $ <code>npm install @roles.js</code>
            </pre>
            <pre className="text-md text-warm">
              &#x3e; 
              <code>
                installing...<code>100%</code>
              </code>
            </pre>
            <pre className="text-md text-success">
              &#x3e; 
              <code>
                 installing... <code>100%</code>
              </code>
            </pre>
          </div>
          <div className="flex justify-center  mt-2 sm:mt-1 w-full  ">
            <Button/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
