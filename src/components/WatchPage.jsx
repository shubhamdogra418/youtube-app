import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const dispatch= useDispatch();
    const[searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    useEffect(()=> {
        dispatch(closeMenu());
    },[])
  return (
    <div>
      <iframe 
          className='ml-9 mt-5 rounded-lg'
          width="640" 
          height="360" 
          src={"https://www.youtube.com/embed/"+ searchParams.get("v")}  
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage;