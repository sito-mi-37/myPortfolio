import React,{useState} from 'react';
import {FaBars, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import {AiFillLinkedin, AiFillCloseSquare} from 'react-icons/ai';


const Navbar = () => {
const [nav, setNav] = useState(false)
const handleNav = () =>   {
    setNav(!nav) 
}
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center pr-8 pl-4 z-20 absolute bg-black text-white'>
        <div className='hidden' >
         <ul className='sm:flex' >
                    <li><a href="/" className='hover:text-[#3496a3]'>Home</a></li>
                    <li><a href="#location" className='hover:text-[#3496a3]'>Locations</a></li>
                    <li><a href="#projects" className='hover:text-[#3496a3]'>Projects</a></li>
                    <li><a href="#testimonials" className='hover:text-[#3496a3]'>Testimonials</a></li>
                    <li><a href="#contact" className='hover:text-[#3496a3]'>Contact</a></li>
                </ul>
                </div>
            <div className='flex justify-between'>
             <FaFacebookF className='mx-4 hover:text-[#3496a3] cursor-pointer' />
             <AiFillLinkedin className='mx-4 hover:text-[#3496a3] cursor-pointer'/>
             <FaTwitter className='mx-4 hover:text-[#3496a3] cursor-pointer'/>
             <FaInstagram className='mx-4 hover:text-[#3496a3] cursor-pointer'/>
            </div>

            <div className='sm:hidden z-10' >
           {nav ?<AiFillCloseSquare onClick={() => handleNav()}  size={30} />:
           <FaBars onClick={() => handleNav()}  size={30} /> }
            </div>
            <div className={nav ?'overflow-y-hidden md:hidden  ease-in px-4 py-7 flex flex-col w-full duration-300 text-gray-300 absolute left-0 top-0 h-screen bg-black': 'absolute top-0 h-screen left-[-100%] ease-in duration-500' }>
            <ul className='text-center pt-8 w-full h-full' onClick={() => setNav(!nav)} >
                    <li><a className='text-xl' href="/">Home</a></li>
                    <li><a  className='text-xl' href="#location">Our Locations</a></li>
                    <li><a className='text-xl' href="#projects">Projects</a></li>
                    <li><a className='text-xl' href="#testimonials">Testimonials</a></li>
                    <li><a className='text-xl' href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
   
  )
}

export default Navbar
