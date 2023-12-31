import React from 'react'

const VideoCards = ({ info }) => {
    console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle, title, thumbnails}=snippet;

    return (
    <div className='mt-4 shadow-lg w-60 ml-7'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt= "thumbnail"/>
        <h2 className='font-bold py-2'> {title.slice(0,50)} </h2>
        <h3> {channelTitle} </h3>
        <h4> {Math.round(statistics.viewCount/1000000)+1}M views </h4>
    </div>
  )
}

export default VideoCards;