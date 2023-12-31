import React, {useEffect, useState} from 'react';
import { Youtube_API } from '../utils/constants';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] =useState([]);

  useEffect ( () => {
    getVideos(); 
  }, []);

  const getVideos = async()=> {
      const data= await fetch(Youtube_API);
      const json= await data.json();
      // console.log(json.items);
      setVideos(json.items); //now videos has all the data
  }

  return (
    <div className='flex flex-wrap'>
      {videos.map((video)=>
        <Link to={"/watch?v="+ video.id}> 
        <VideoCards key={video.id} info={video}/>
        </Link>
        )}
        
    </div>
  )
}

export default VideoContainer;