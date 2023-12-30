import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {

  const isMenuOpen =useSelector((store)=> store.app.isMenuOpen);
  //open sidebar menu only when selector is true
  //early return
  // if(!isMenuOpen) return null;
  
  return !isMenuOpen ? 
      <div className='ml-1'>
        <ul className='pt-5 cursor-pointer  '>
          <li className='p-2 text-3xl'>🏠 </li>
          <li className='p-2 text-3xl'>🎶</li>
          <li className='p-2 text-3xl'>▶</li>
          <li className='p-2 text-3xl'>🔴</li>
        </ul>
      </div>
  : (
    <div className='ml-4'>
      <ul className=' pt-5 font-bold text-lg'>
        <li className='p-1'> 🏠 Home</li>
        <li className='p-1'> 🎶 Shorts</li>
        <li className='p-1'> ▶ Subscriptions</li>
        <li className='p-1'> 🔴 Live</li>
      </ul>
      <h1 className='font-bold pt-5   text-red-500 text-lg'>Explore</h1>
      <ul className='font-bold text-lg'>
        <li className='p-1'> 🔥 Trending</li>
        <li className='p-1'> 🛍 Shopping</li>
        <li className='p-1'> 🎵 Music </li>
        <li className='p-1'> 📰 News </li>
        <li className='p-1'> 🥎 Sports</li>
      </ul>
    </div>
  )
}

export default Sidebar;