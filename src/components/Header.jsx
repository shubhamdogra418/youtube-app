import React from 'react';
import { Hamburger_Menu, user_avatar } from '../utils/constants';
import { Logo } from '../utils/constants'; 
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler =() => {
        dispatch(toggleMenu());
    }
  return (
    <div className='flex h-20 justify-between shadow-lg'>
        <div className='flex'>
            <img
                onClick={() => toggleMenuHandler()} 
                className='rounded-md p-5 cursor-pointer' alt="menu" 
                src={Hamburger_Menu}/>
            <img 
                className='w-40 h-20  cursor-pointer' 
                src={Logo} alt="logo"/>
        </div>

        <div className='mt-5 w-8/12'>
            <input className='p-2 w-8/12 text-center rounded-md font-bold border border-black' type='text' placeholder='Search'/> 
            <button className='bg-red-600 text-white ml-4 p-2 rounded-md font-bold'> Search 🔍</button>
        </div>
        <img 
            className='p-2 cursor-pointer'   
            src={user_avatar} alt="avatar"/> 
    </div>
  )
}

export default Header;