import React, {useEffect, useState} from 'react';
import { Hamburger_Menu, Youtube_Search_API, commentor, user_avatar } from '../utils/constants';
import { Logo } from '../utils/constants'; 
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
    const dispatch= useDispatch();
    const[searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions]= useState([]);
    const [showSuggestions, setShowSuggestions] =useState(false);

    const searchCache= useSelector((store)=> store.search);

    useEffect (()=> {
        //make api call on every search query 
        //but if diff bw two API calls < threshold (200ms)
        // ignore / decline the API call
        //I want to make API call only after 200ms
        const timer= setTimeout(() => {
            if(searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }   
        }, 300);
        return  ()=> {
            clearTimeout(timer);
        };
    },[searchQuery]); //on every searchQUery call the API (apply debouncing) 

    const getSearchSuggestions = async ()=> {   
        const data= await  fetch(Youtube_Search_API + searchQuery);
        const json= await data.json();
        setSuggestions(json[1]);

        //update cache
        dispatch(
            cacheResults({
                [searchQuery]: json[1],
            })
        )
    }

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
            <div> 
            <input 
                className='p-2 w-8/12 text-center rounded-md font-bold border border-black' 
                type='text' 
                placeholder='Search'
                value={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={()=> setShowSuggestions(false)}    
                /> 
            <button 
                className='bg-red-600 text-white ml-4 p-2 rounded-md font-bold'> Search 🔍
                </button>
            </div>
            { showSuggestions && (<div className='absolute'>
                <ul className=' rounded-lg px-2 py-2 w-[35rem] bg-white fixed'>
                    {suggestions.map((e)=> 
                        <li key={e} className='py-1 hover:bg-gray-100 '> ⌕ {e}</li>)
                    }
                </ul>
            </div>) }
        </div> 
        <img 
            className='p-2 pr-4 cursor-pointer'   
            src={commentor} alt="avatar"/> 
    </div>
  )
}

export default Header;