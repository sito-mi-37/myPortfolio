import { useState, useRef, useEffect } from "react";
import { useAddNewProjectMutation } from "../projectApiSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CLOUDINARY_PRESET, CLOUDINARY_NAME } from "../../constants/const";


const NewProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stacks, setStacks] = useState([{ stack: "" }]);
  const [github, setGithub] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [version, setVersion] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState(false)
  const [progress, setProgress] = useState(0)
  

  const titleRef = useRef();
  const navigate = useNavigate();

  const [addNewProject, { isLoading }] = useAddNewProjectMutation();

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleStackChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...stacks];
    list[index][name] = value;
    setStacks(list);
  };

  const handleStackAdd = () => {
    setStacks([...stacks, { stack: "" }]);
  };

  const handleStackRemove = (index) => {
    const list = [...stacks];
    list.splice(index, 1);
    setStacks(list);
  };

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
        // console.log(data)
        const fileURL = data.secure_url
        setProgress(100)
        return fileURL
      })
      .catch(err => {
        setUploadError(true)
        setUploading(false)
        // console.log(err)

      })
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileURL = await uploadToCloudinary(file);
      setUploading(false)
      setImageUrl(fileURL);
      // console.log(imageUrl)
    }
  };

  const payload = {
    title,
    description,
    stacks,
    github,
    liveLink,
    imageUrl,
    version
  };

  const canSave =
    [title, description, stacks, github].every(Boolean) && !isLoading;
  
    const handleSubmit = async (e) => {
    e.preventDefault();
    if (canSave) {
      const res = await addNewProject(payload);
      setTitle("");
      setDescription("");
      setStacks([{ stack: "" }]);
      setGithub("");
      setLiveLink("");
      setImageUrl("")
      navigate("/jefe/projects");
    }
  };

  return (
    <section className="w-11/12 sm:w-3/5 mx-auto grid grid-cols-1 justify-items-center items-center py-7">
      <div className="w-full ">
        <h1 className="text-3xl">Create New Project:</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="title">Title:</label>
            <input
              ref={titleRef}
              type="text"
              id="title"
              className="text-buttonDark py-2 rounded-md px-2 "
              autoCapitalize="true"
              autoComplete="off"
              placeholder="enter project title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description:</label>
            <textarea
              className="text-buttonDark py-2 rounded-md px-2 "
              id="description"
              autoComplete="off"
              placeholder="enter project description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Stacks:</label>
            {stacks.map((stack, index) => (
              <div className=" flex justify-between gap-2" key={index}>
                <input
                  type="text"
                  placeholder="enter stack"
                  autoComplete="off"
                  className="text-buttonDark py-2 rounded-md px-2 flex-1"
                  required
                  name="stack"
                  value={stack.stack}
                  onChange={(e) => handleStackChange(e, index)}
                />
                {stacks.length - 1 === index && stacks.length !== 1 && (
                  <button
                    onClick={() => handleStackRemove(index)}
                    className="border text-sm p-1 px-3 text-white rounded dark:bg-gradient-to-br dark:from-red-400 dark:to-red-700  mt-2"
                  >
                    remove
                  </button>
                )}
                {stacks.length - 1 === index && (
                  <button
                    onClick={handleStackAdd}
                    className="border text-sm p-1 px-3 text-white rounded dark:bg-gradient-to-br dark:from-green-400 dark:to-green-700  mt-2"
                  >
                    add stack
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <label htmlFor="github">Github Link:</label>
            <input
              type="text"
              id="github"
              autoComplete="off"
              placeholder="enter github link"
              className="text-buttonDark py-2 rounded-md px-2 "
              required
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="live">Live link:</label>
            <input
              type="text"
              autoComplete="off"
              placeholder="enter live link"
              className="text-buttonDark py-2 rounded-md px-2 "
              value={liveLink}
              onChange={(e) => setLiveLink(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="version">version:</label>
            <input
              type="text"
              id="version"
              autoComplete="off"
              placeholder="app version"
              className="text-buttonDark py-2 rounded-md px-2 "
              value={version}
              onChange={(e) => setVersion(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="live">Image Link:</label>
            <input
              type="file"
              className="text-buttonDark py-2 rounded-md px-2 "
              accept="image/*"
              onChange={(e) => uploadImage(e)}
            />
            {
              uploadError && <p className="text-sm text-red-500">upload failed</p>
            }
            <div className="my-5 ">
              {
                uploading
                    ? <p className="text-green-500">{progress}%</p>
                    : null
              }
              {
                !uploading && imageUrl && <img src={imageUrl}/>
              }
            </div>
          </div>
          <button
            type="submit"
            disabled={!canSave}
            className="w-full py-2 rounded-md px-2 text-buttonDark font-semibold bg-secondaryDark "
          >
            Create
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewProject;
