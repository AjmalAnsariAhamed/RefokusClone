import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full '>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-1'>
        <Card width={"basis-1/3"} para={true} start={false} arr={["Up Next: Culture", "Who we are","explore What drives our team"]}/>
        <Card width={"basis-2/3"} para={false} start={true} arr={["Get in touch", "Lets get to it, together"]}/>
        </div>
      
    </div>
  )
}

export default Cards