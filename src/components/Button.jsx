import React from 'react'

const Button = ({ name }) => {
  return (
    <div>
        <button className='bg-gray-700 hover:bg-gray-500  text-white font-bold px-4 py-1 rounded-md mr-2'> {name} </button>
    </div>
  )
}

export default Button;