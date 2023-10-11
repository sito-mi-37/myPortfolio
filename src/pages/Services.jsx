import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { servicesData } from '../data'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className="w-11/12 sm:w-4/5 mx-auto grid grid-cols-1 justify-items-center items-center py-7">
      <h1 className="text-3xl font-bold mb-3">My <span className="text-secondaryDark">Services</span></h1>
      <p className="text-center text-sm sm:text-lg mt-">Here are some <Link to="/jefe" className='text-aspect'>services</Link>  that I provide for my clients.</p>
      <div>
        <div className='flex flex-wrap -m-4 mt-4 '>
          {
            servicesData.map((card, index) => (
              <ServiceCard 
              key={index}
              src={card.src}
              title={card.title}
              description={card.description}
              />
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Services