import React from 'react'
import Message from './Message'

const MessageList = ({ids}) => {
  return (
    <ul className='flex flex-col gap-3 bg-black border h-[16rem] overflow-y-auto'>
        {
            ids.map(id => (
                
                    <Message key={id} id={id} />
                
            ))
        }
    </ul>
  )
}

export default MessageList