import React from "react";
import { useSelector } from "react-redux";
import { selectContactById } from "../features/contactMessageApiSlice";
import { useParams } from "react-router-dom";

const MessagePage = () => {
    const {id} = useParams()
    const contact = useSelector((state) => selectContactById(state, id));

  return (
    <article className="w-11/12 sm:w-3/5 mx-auto grid grid-cols-1 justify-items-center items-center py-7">
        <div>
        <p>Name: {contact.fullname}</p>
      <p>Email: {contact.mail}</p>
      <p className="font-semibold">Subject: { contact.subject}</p>
      <p className="bg-black rounded-md p-2">Message: {contact.message}</p>
        </div>
      
    </article>
  );
};

export default MessagePage;
