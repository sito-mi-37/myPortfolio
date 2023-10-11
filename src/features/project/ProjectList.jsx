import React from 'react'
import ProjectExerpt from './ProjectExerpt'

const ProjectList = ({projects}) => {
    return (
    <ul className='my-5 flex flex-col gap-3'>
        {
            projects?.map((project, i) => (
                <ProjectExerpt key={project?._id} project={project} />
            ))
        }
      </ul>
  )
}

export default ProjectList