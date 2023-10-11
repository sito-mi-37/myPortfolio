import React from 'react'
// import { useGetSkillsQuery } from '../features/skillApiSlice'

const SkillCard = ({skill}) => {
    // const {skill} = useGetSkillsQuery('skillsList', {
    //   selectFromResult: ({data}) => ({
    //     skill: data?.entities[skillId]
    //   })
    // })


  return (
    <div className='skill flex  items-center justify-center flex-col border-primaryDark gap-3 h-[7rem] '>
        <img className='w-16' src={skill?.imageUrl} alt="skill" />
        <p>{skill?.title}</p>
    </div>
  )
}

export default SkillCard