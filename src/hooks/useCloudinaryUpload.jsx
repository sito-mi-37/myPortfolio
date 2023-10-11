import { useState } from "react";
import axios from "axios";
import { CLOUDINARY_PRESET, CLOUDINARY_NAME } from "../constants/const";

const useCloudinaryUpload = () => {
    const [uploadError, setUploadError] = useState(false)
    const [progress, setProgress] = useState(0)

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
            }
          })
          .then((response) => {
            const data = response.data
            console.log(data)
            const fileURL = data.secure_url
            setProgress(100)
            return fileURL
          })
          .catch(err => {
            setUploadError(true)
            setUploading(false)
            console.log(err)
    
          })
      };

      return [uploadToCloudinary, progress, setProgress, uploadError, setUploadError]
}

export default useCloudinaryUpload