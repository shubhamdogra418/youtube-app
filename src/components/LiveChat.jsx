import React, {useEffect, useState} from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { randomNames,randomMsgs } from '../utils/helper';


const LiveChat = () => {  
  const dispatch = useDispatch();
  const chatMsgs= useSelector((store)=> store.chat.messages); //show in the UI layer  
  const [liveMsg, setLiveMSg] = useState("");
  useEffect(()=> {
      const timer=setInterval(()=> {
          console.log("API polling");

        dispatch(addMessage( {
          name: randomNames(),
          message: randomMsgs(20),
        }))

      },2000);

      return ()=> clearInterval(timer); //otherwise interval keeps piling up

  },[])

  return (
    <>
    <div 
      className='h-[400px] border border-black w-full-[5px] bg-slate-100 rounded-lg ml-2 mt-5 overflow-y-scroll shadow-lg flex flex-col-reverse'>
          { chatMsgs.map((e, index)=> <ChatMessage key={index} name={e.name} message={e.message}/>)}        
    </div>
    <form
        onSubmit={(e)=> {
          e.preventDefault();
          dispatch(addMessage({
            name:"shubhamdogra",
            message: liveMsg,
          }))
          setLiveMSg("")
        }}
    >
      <input 
          className='w-[370px] p-1 pl-4 font-bold' 
          placeholder='Comment Here'
          value={liveMsg}
          onChange={(e)=> setLiveMSg(e.target.value)}
      /> 
      <button className='bg-blue-400 px-4 p-1 rounded-lg ml-1'> Send </button>
    </form>
    </>
  )
}

export default LiveChat;