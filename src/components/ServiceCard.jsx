import React from "react";

const ServiceCard = ({ src, title, description }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4 ">
      <div className="flex flex-col items-center p-4 h-full rounded-xl shadow-2xl bg-white/10 backdrop-blur-xl ">
        <figure className="pt-10 px-10 ">
          <img className="w-44 rounded-xl" src={src} alt="" />
        </figure>
        <div className="flex flex-col text-center flex-grow-1 gap-1 mt-3">
          <h2 className="font-bold text-3xl pt-3 ">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
