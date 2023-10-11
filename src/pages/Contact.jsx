import React, {useEffect} from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { useForm } from "react-hook-form";
import Social from "../components/Social";
import { useAddNewContactMutation } from "../features/contactMessageApiSlice";

const Contact = () => {
  const [addNewContact, {isLoading, isSuccess, isError, error}] = useAddNewContactMutation()
  
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
      reset()
  }, [isSuccess])

  const handleOnSubmit = async (data) => {
    try {
      const res = await addNewContact(data)
    } catch (err) {
      // console.log(err)
    }
  };

  let reply = null

  if(isSuccess){
    reply = 'message sent successfully!'
  }
  if(isError){
    reply = `Error: ${error?.data?.message}` 
  }

  return (
    <div className="w-11/12 sm:w-3/5  mx-auto grid grid-cols-1 justify-items-center items-center py-7">
      <h1 className="text-3xl font-bold mb-3">
        Contact <span className="text-secondaryDark">Me</span>
      </h1>
      <div className="w-full flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-start mt-5">
        <div className="w-full sm:w-2/5 flex flex-col gap-3 mb-5 border p-4 rounded-xl bg-white/10 shadow-xl">
          <div className="flex items-center gap-2">
            <HiMail />
            <h4>sito.mi.37@gmail.com</h4>
          </div>
          <div className="flex items-center gap-2">
            <HiPhone />
            <h4 className=" text-sm">+234 7065526251, +234 8119659302 </h4>
          </div>
          <div className="flex items-center gap-2">
            <HiLocationMarker />
            <h4 className="text-sm">Port-Harcourt, Rivers State, Nigeria</h4>
          </div>
          <div>
            <div className="flex gap-3 text-xl">
              <Social />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <h2 className="text-center font-semibold">Send a message through</h2>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <div className="flex flex-col ">
              <label htmlFor="fullname">Full name:</label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your name"
                className="text-buttonDark py-2 rounded-md px-2 "
                autoComplete="off"
                {...register("fullname", {
                  required: "Fullname is a required field",
                  maxLength: {
                    value: 100,
                    message: "fullname cannot exceed 100 characters",
                  },
                  minLength: {
                    value: 2,
                    message: "must not be less than two characters",
                  },
                  pattern:{
                    value: /^[a-zA-Z ]*$/,
                    message: "only alphabets characters space is permitted"
                  }
                })}
              />
              {errors.fullname && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.fullname.message}
                </p>
              )}
            </div>
            <div className="flex flex-col ">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject"
                className="text-buttonDark py-2 rounded-md px-2"
                autoComplete="off"
                {...register("subject", {
                  required: "subject is a required field",
                  maxLength: {
                    value: 100,
                    message: "subject cannot exceed 100 characters",
                  },
                  minLength: {
                    value: 2,
                    message: "must not be less than two characters",
                  },
                  pattern:{
                    value: /^[a-zA-Z0-9 ]*$/,
                    message: "only alphabets and digits characters are permitted"
                  }
                })}
              />
              {errors.subject && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="flex flex-col ">
              <label htmlFor="email">Email: </label>
              <input
                type="mail"
                id="email"
                placeholder="Enter your email"
                className="text-buttonDark py-2 rounded-md px-2"
                autoComplete="off"
                {...register("mail", {
                  required: "mail is a required field",

                  pattern:{
                    value:       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "please enter a valid email"
                  }
                })}
              />
              {errors.mail && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.mail.message}
                </p>
              )}
            </div>
            <div className="flex flex-col ">
              <label htmlFor="userMessage">Message:</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="Enter your Message"
                className="text-buttonDark py-2 rounded-md px-2"
                autoComplete="off"
                {...register("userMessage", {
                  required: "message is a required field",
                  maxLength: {
                    value: 200,
                    message: "subject cannot exceed 200 characters",
                  },
                  minLength: {
                    value: 2,
                    message: "must not be less than two characters",
                  },
                  pattern:{
                    value: /^[a-zA-Z0-9 ]*$/g,
                    message: "only alphabets and digits characters are permitted"
                  }
                })}
              ></textarea>
              {errors.userMessage && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.userMessage.message}
                </p>
              )}
            </div>
            <button disabled={isLoading} className="flex w-full text-sm sm:text-ld bg-secondaryDark  text-buttonDark justify-center items-center gap-2 py-2 px-2  rounded-lg  font-semibold">
              {
                isLoading ? 'loading...': 'Submit'
              }
            </button>
          </form>
              <p className={`${isSuccess? 'text-green-500 animate-disappear' : 'text-red-500'}`}>{reply}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
