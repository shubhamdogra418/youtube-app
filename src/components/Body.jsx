import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        {/* as i click on video.. rendering changes from main container to watch page */}
        {/* children comes in outlet */}
        <Outlet/> 
    </div>
  )
}

export default Body