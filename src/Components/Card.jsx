import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width,para,start,arr}) {
  return (
    <div className={`${width} min-h-[30rem] flex flex-col justify-between bg-zinc-700 p-5 rounded-xl  transition-all ease-out hover:${start && 'bg-violet-600'}`}>
<div className='w-full'>
<div className='w-full flex items-center justify-between '>
        <h3>{arr[0]}</h3>
        <IoIosArrowRoundForward/>
       </div>
      
       <div className='max-w-[18rem]'>
        <h1 className='text-3xl whitespace-pre-line font-medium mt-5'>{arr[1]}</h1>
       </div>
</div>
<div className='fr-down w-full flex flex-col gap-4 '>
  {start && (
    <>
      <h1 className='text-8xl tracking-tight font-bold  leading-none'>Start a project</h1>
      <button className='rounded-full self-start py-2 px-5 mt-3 border-[1px] border-zinc-400'> Contact us </button>
    </>
  )}
  {para &&  <p className='text-sm text-zinc-500 font-medium  '>{arr[2]}</p>}
   
</div>

      
        
        </div>
  )
}

export default Card