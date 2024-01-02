import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/helper';

const Demo = () => {
    const [text, setText] =useState(0);
    const [isDarkTheme, setIsDarkTheme]= useState(false);
//useMemo hook takes first value as callback function and second as dependencies
//means only change it only when dependencies changes
//we did memoize the heavy operation >>  made our app more optimise    
    const prime = useMemo(() => findNthPrime(text),[text]);
    console.log("redering")


  return (
    <div className={'h-96 w-96  border border-black ' + (isDarkTheme && 'bg-black text-white')}>
        <div>
        <input className='font-bold' type="number" value={text} onChange={(e)=> setText(e.target.value)}/>
        </div>
        <div>
            <h1 className='font-bold' > nth prime is: {prime} </h1>
        </div>
        <button 
            onClick={(e)=> setIsDarkTheme(!isDarkTheme)}
            className='bg-green-400 rounded-lg'
            > Change Theme</button>
    </div>
  )
}

export default Demo;