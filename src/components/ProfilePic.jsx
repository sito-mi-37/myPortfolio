import React from "react";

const ProfilePic = () => {
  return (
    <div className="profile--pic h-[8rem] w-[8rem] border rounded-full overflow-hidden ring ring-secondaryDark ring-offset-base-100 ring-offset-5 origin-center animate-show-image">
      <img className="h-full w-full object-cover" src="ad.jpg" alt="" />
    </div>
  );
};

export default ProfilePic;
