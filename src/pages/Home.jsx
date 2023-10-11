import React, { useEffect, useState, useRef } from "react";
import { GoVerified } from "react-icons/go";
import ProfilePic from "../components/ProfilePic";
import Clock from "../components/Clock";
import DownloadResume from "../components/DownloadResume";

const Home = () => {
  const [showLoad, setShowLoad] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  useEffect(() => {
    let isMounted = true
    
    const interval = setInterval(() => {
      setShowLoad(true)
    },3000)

    const resultInterval = setInterval(() => {
      // setShowLoad(false)
      setShowResult(true)
    },5000)
   

    return () => {
      isMounted = false
      clearInterval(interval)
      clearInterval(resultInterval)
    }
  }, [])

  

  return (
    <div className="w-11/12 sm:w-4/5 mx-auto grid grid-cols-1 justify-items-center items-center py-5">
      <div className="container py-5 grid grid-cols-1  items-center justify-items-center ">
        <div className=" flex flex-col justify-center items-center">
          <ProfilePic />
          <div className="p-3 text-center ">
            <p className="font-mono text-sm sm:text-lg">hey fellas! i'm</p>
            <div className=" flex items-center gap-2 justify-center">
              <h2 className="text-xl sm:text-4xl font-bold">Akujiobi Nelson</h2>
              <GoVerified className="text-2xl text-blue-500" />
            </div>
            <div>
              <h3 className=" text-2xl font-medium">Software Engineer</h3>
            </div>
          </div>
        </div>
        <div className=" w-5/6 sm:w-3/5 md:px-3 ">
          <div className="min-h-[12.5rem] border border-[#5c5b5b] bg-[rgba(1,105,223,0.15)] w-full md:w-full  rounded-xl p-5 flex flex-col gap-2 font-mono text-sm">
            <div className="flex gap-2 mb-2">
              <p className=" h-3 w-3 rounded-full bg-red-500 "></p>
              <p className=" h-3 w-3 rounded-full bg-yellow-500 "></p>
              <p className=" h-3 w-3 rounded-full bg-green-500 "></p>
            </div>
            <div className="text-sm sm:text-md flex gap-1">
              $ <p className="entry__text overflow-hidden">npm install @roles</p>
            </div>
            <div className="flex flex-col">
              {showLoad && (
                <div className="flex text-[0.7rem] sm:text-sm">
                  <p>[########] \ </p>
                  <p>
                   idealTree:sito{" "}
                    <span className="bg-slate-300 text-slate-600">sill</span>{" "}
                    <span className="text-purple-500">idealTree</span> buildDeps
                  </p>
                </div>
              )}
              {showResult && (
                <div>
                  <p>backend developer installed</p>
                  <p>frontend developer installed</p>
                  <p>
                    found <span className="text-green-500">0</span> vulnerabilities
                  </p>
                </div>
              )}
            </div>
            {showResult && (
              <pre className="text-sm text-success">
                <span className="mr-1 ">{">>>"}</span>
                <code>Now you know!</code>
              </pre>
            )}
          </div>
          <div className="flex justify-center  mt-2 sm:mt-1 w-full ">
            <DownloadResume />
          </div>
          <div className="absolute bottom-2 right-5">
              <Clock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
