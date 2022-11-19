import { useState } from 'react'

import {HiMenu} from 'react-icons/hi'
import {FaToggleOff, FaToggleOn} from 'react-icons/fa'

const Nav = () => {
  const [dark, setDark] = useState(false)

    return (
      <div className=' grid grid-cols-2 lg:grid-cols-3 py-4 px-3 lg:py-1 lg:px-14 items-center '>
          <div className="logo__container absolute  right-[45%] lg:static">
            <h3 className="logo text-3xl font-bold  ">Sito<span className="text-green-700 text-4xl">.</span></h3>
          </div>
          <div className="text-3xl lg:hidden">
            <HiMenu className='border rounded drop-shadow-md' />
          </div>
          <div className="hidden lg:block">
            <ul className='flex gap-4 text-lg font-medium'>
              <li className='navlink'><a href="/">Home</a></li>
              <li className='navlink'><a href="/about">About</a></li>
              <li className='navlink'><a href="/skills">Skills</a>  </li>
              <li className='navlink'><a href="/projects">Projects</a> </li>
              <li className='navlink'><a href="/services">Services</a></li>
              <li className='navlink'> <a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="justify-self-end flex items-center gap-2" title='Theme'>
            <span className='hidden'>Theme</span>
            <div onClick={() => setDark(!darkTheme)} className='text-3xl'>{dark ? <FaToggleOn /> : <FaToggleOff />}</div>

          </div>
  
  
      </div>
    )
  }
  
  export default Nav