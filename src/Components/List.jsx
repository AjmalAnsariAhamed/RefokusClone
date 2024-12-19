import React from 'react'

function List({heading,dets}) {
  return (
    <div className='flex flex-col justify-center items-start gap-3'>
        <h1 className='font-semibold'>{heading}</h1>
        <div>
            {dets.map((data,index)=> <h3 className={`${heading==="Stemap"? "text-zinc-200":"text-zinc-400"} font-medium`} key={index}>{data}</h3>)}
        
            
        </div>
    </div>
  )
}

export default List