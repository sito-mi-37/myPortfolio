import React, { useState } from "react";
import { useGetSkillsQuery, useAddNewSkillMutation } from "../skillApiSlice";
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";

import axios from "axios";
import { CLOUDINARY_PRESET, CLOUDINARY_NAME } from "../../constants/const";


const JefeSkills = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [progress, setProgress] = useState(0);

  const {skills} = useGetSkillsQuery('skillsList', {
    selectFromResult: ({data}) => ({
      skills: data?.ids.map(id => data?.entities[id])
    })
  })
  
  const [addNewSkill] = useAddNewSkillMutation()
  

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("tags", "project image");
    formData.append("upload_preset", CLOUDINARY_PRESET);
    formData.append("timestamp", (Date.now() / 1000) | 0);

    return axios
      .request({
        method: "POST",
        url: `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
        data: formData,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
        onUploadProgress: (ProgressEvent) => {
          setUploading(true);
          setProgress(
            Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total || 0)
          );
        },
      })
      .then((response) => {
        const data = response.data;
        // console.log(data);
        const fileURL = data.secure_url;
        setProgress(100);
        return fileURL;
      })
      .catch((err) => {
        setUploadError(true);
        setUploading(false);
        // console.log(err);
      });
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileURL = await uploadToCloudinary(file);
      setUploading(false);
      setImageUrl(fileURL);
      // console.log(imageUrl);
    }
  };

const payload = {
  id: Math.floor(Math.random() * 100 + 1),
  title,
  imageUrl
}

const canSave = [title, imageUrl].every(Boolean)

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(canSave){
      // console.log(payload)
      const res = addNewSkill(payload)
      setTitle('')
      setImageUrl('')
    }
  }

  return (
    <section className="w-11/12 sm:w-3/5 mx-auto grid grid-cols-1 justify-items-center items-center py-7">
      <div className=" w-full">
        <div className="flex justify-between">
          <h1 className="text-3xl">Skills World...</h1>
        </div>
        <div>
         <NewSkillForm  
              title={title} 
              setTitle={setTitle}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              handleSubmit= {handleSubmit}
              uploading={uploading}
              uploadError={uploadError}
              progress={progress}
              uploadImage={uploadImage}
              canSave={canSave}
          />
        </div>
        <div>
          { !skills?.length ? (
            <p>No skill to display</p>
          ) : (
            <SkillList skills={skills} />
          )}
        </div>
      </div>
    </section>
  );
};

export default JefeSkills;
