import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title}) {
  return (
    <div className=' group wrap w-40 py-2 px-4 h-[4vh] bg-zinc-100 text-black overflow-hidden rounded-full  '>
       <div className='flex items-center justify-between w-full  text-black group-hover:-translate-y-7  transition-all ease-out'>
        <span className='font-[myfont] whitespace-nowrap text-[0.92vw]'>{title? title:"Get Started"}</span>
       <IoIosReturnRight /> 
       </div>
       <div className='flex items-center justify-between w-full mt-1 text-black group-hover:-translate-y-6 transition-all ease-in'>
        <span className='font-[myfont] text-[0.92vw]'>{title? title:"Get Started"}</span>
       <IoIosReturnRight className='transition-all delay-500' /> 
       </div>
      
       
    </div>
  )
}

export default Button