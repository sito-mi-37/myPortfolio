import React from 'react'
import {HiCode} from 'react-icons/hi'

const Projects = () => {
  return (
    <div className='projects'>
        <h1>My Projects</h1>
        <p>Here are some of my projects that I've been working on.</p>
        <div className="projects-container">
            <div className="project">
                <h2>project name</h2>
                <h4>project description</h4>
                <div className="lang-used">
                    <h5>language name</h5>
                </div>
                <div className="category-container">
                    <h5>web||mobile</h5>
                    <HiCode />
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Projects