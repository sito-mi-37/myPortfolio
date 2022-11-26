import React from 'react'

const SkillCard = ({src, skillName}) => {
  return (
    <div className='skill flex basis-1/3 items-center justify-center flex-col border-primaryDark border-1/2 gap-3 '>
        <img className='w-16' src={src} alt="skill" />
        <p>{skillName}</p>
    </div>
  )
}

export default SkillCard