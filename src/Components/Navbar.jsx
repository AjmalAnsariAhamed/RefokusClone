import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between bg-zinc-800 border-solid border-b-2 border-zinc-700'>
        <div className='leftSide flex'>
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='Links flex gap-14 ml-20'>
        {["Home","Work","Culture","","News"].map((elem,index)=>(
            elem.length===0 ? <span className='w-[2px] h-7 inline-block bg-zinc-700'></span>:
            <a className='text-sm font-extrabold font-[myFont] flex items-center gap-1' key={index} href=""> {index===1 && (<span style={{boxShadow: "0px 0px 0.55em #00FF19"}} className='bg-green-600 shadow- rounded-full w-1 h-1 inline-block'></span>)}{elem}</a>

        ))}
</div>
</div>
<Button  />
       
    </div>
  )
}

export default Navbar