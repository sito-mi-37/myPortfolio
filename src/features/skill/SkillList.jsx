import React from 'react'
import SkillExerpt from './SkillExerpt'


const SkillList = ({skills}) => {
  
  return (
    <section>
      <ul className='flex flex-wrap gap-2 justify-between'>
        {
          skills.map(skill => (
            <SkillExerpt key={skill._id} skill={skill} />
          ) )
        }
        </ul>
    </section>
  )
}

export default SkillList