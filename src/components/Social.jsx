import React from 'react'
import { socialLink } from '../data'

const Social = () => {
  return (
    <ul className='flex gap-3'>
    {
        socialLink.map(social => (
            <li key={social.id}>
                <a href={social.link} target="_blank" rel="noreferrer">{social.icon}</a>
            </li>
        ) )
    }
    </ul>
  )
}

export default Social