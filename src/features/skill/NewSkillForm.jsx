import React from "react";

const NewSkillForm = ({
  title,
  setTitle,
  imageUrl,
  handleSubmit,
  uploading,
  uploadError,
  progress,
  uploadImage,
  canSave
}) => {
  return (
    <form onSubmit={handleSubmit} className="my-5 flex flex-col gap-3">
      <div className="flex flex-col">
        <label htmlFor="title">Add skill:</label>
        <input
          type="text"
          id="title"
          autoComplete="off"
          placeholder="enter title"
          className="text-buttonDark py-2 rounded-md px-2 "
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
        {uploadError && <p className="text-sm text-red-500">upload failed</p>}
        <div className="my-5 ">
          {uploading ? <p className="text-green-500">{progress}%</p> : null}
          {!uploading && imageUrl && <img src={imageUrl} />}
        </div>
      </div>
      <button type="submit" className="w-full py-2 rounded-md px-2 text-buttonDark font-semibold bg-secondaryDark " disabled={!canSave}>
        Create
      </button>
    </form>
  );
};

export default NewSkillForm;
