import React from 'react'
import {HiMail, HiPhone, HiLocationMarker} from 'react-icons/hi'
import {AiOutlineLinkedin, AiFillGithub, AiOutlineTwitter} from "react-icons/ai"

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <div>
        <div>
          <div>
              <HiMail />
              <h4>sito.mi.37@gmail.com</h4>
              <p>Email me for any questions or inquiries</p>
          </div>
          <div>
              <HiPhone />
              <h4 className=''>+234805659302</h4>
              <p>Call me for any questions or inquiries</p>
          </div>
          <div>
              <HiLocationMarker />
              <h4>Port-Harcourt, Rivers State, Nigeria</h4>
              <p>Visit me for any questions or inquiries</p>
          </div>
        </div>
        <div>
          <form action="">
            <input type="text" placeholder='Your name'/>
            <input type="text" placeholder='Subject'/>
            <input type="text" placeholder='Your email' />
            <textarea name="" id="" cols="30" rows="3" placeholder='Your Message'></textarea>
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
        <div>
          <h3>Follow me on</h3>
          <div>
            <AiOutlineLinkedin />
            <AiFillGithub />
            <AiOutlineTwitter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact