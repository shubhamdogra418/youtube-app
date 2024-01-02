import React from 'react'
import { commentor } from '../utils/constants'
const ChatMessage = ({ name,message}) => {
  return (
    <div className='flex m-2'>
        <img 
            className=' h-8'   
            src={commentor} alt="avatar"/> 
        <span className='pl-2 font-bold'> {name} </span>
        <span className='pl-2'> { message} </span>
        </div>
  )
}

export default ChatMessage