import React from "react";
import { MdOutlineDownloadForOffline } from "react-icons/md";


const Button = () => {
  return (
    
    <button className="flex w-full h-10 lg:text-sm bg-secondaryDark  text-buttonDark justify-center items-center gap-2 py-3 px-2  rounded-lg  font-medium">
      <MdOutlineDownloadForOffline className="text-2xl" /> <p>DOWNLOAD RESUME</p>
    </button>
  );
};

export default Button;
