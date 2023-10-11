import React from "react";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { DEV_API } from "../constants/const";


const DownloadResume = () => {
    const handleDownload =() => {
        const url = `${DEV_API}/nelsonAkujiobiCV.pdf`
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const blobUrl = window.URL.createObjectURL(new Blob([blob]))
                const fileName = url.split('/').pop()
                const aTag = document.createElement('a')
                aTag.href = blobUrl
                aTag.setAttribute("download", fileName)
                document.body.appendChild(aTag)
                aTag.click()
                aTag.remove()
            })
        
       

          
    }

  return (
    <button className="flex w-full  text-sm sm:text-lg bg-secondaryDark  text-buttonDark justify-center items-center gap-2 py-2 px-2 rounded-lg font-semibold" onClick={handleDownload}>
      <MdOutlineDownloadForOffline className="text-2xl" />{" "}
      <p>DOWNLOAD RESUME</p>
    </button>
  );
};

export default DownloadResume;
