import React from "react";
import { useSelector } from "react-redux";
import { selectContactById } from "../features/contactMessageApiSlice";
import { Link } from "react-router-dom";

const Message = ({ id }) => {
  const contact = useSelector((state) => selectContactById(state, id));

  return (
    <li className="p-2 border-b border-slate-600">
      <Link to={`message/${id}`} className="flex justify-between">
        <p>{contact.mail}</p>
        <p className="w-1/2">
          {contact.subject.length > 15
            ? `${contact.subject.slice(0, 25)}...`
            : contact.subject}
        </p>
      </Link>
    </li>
  );
};

export default Message;
