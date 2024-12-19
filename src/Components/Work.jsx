import React, { useState } from "react";
import { motion,useScroll } from "framer-motion"

function Work() {
  const [images,setImages]=useState([{image:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:"43%",left:"50%",isActive:false },
    {image:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"56%",left:"44%",isActive:false },
    {image:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"66%",left:"55%",isActive:false },
    {image:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"75%",left:"43%",isActive:false },
    {image:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"70%",left:"50%",isActive:false },
     {image:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"56%",left:"52%",isActive:false}]
 )


const {scrollYProgress} = useScroll()

scrollYProgress.on("change",(data)=>{
  function imageShow(arr){
    setImages((prev)=>
     prev.map((img,index)=> {
      
   //return arr.includes(index)? {...img,isActive:true}:{...img,isActive:false}
    return {...img,isActive:arr.includes(index)}
      })
  )
      }
      switch (Math.floor(data*100)){
        case 0:
          imageShow([]);
          break;
          case 1:
            imageShow([0])
            break;
            case 2:
              imageShow([0,1])
              break;
          case 3:
            imageShow([0,1,2])
            break;
          case 4:
            imageShow([0,1,2,3])
            break;
          case 5:
            imageShow([0,1,2,3,4])
           break;
           case 6:
            imageShow([0,1,2,3,4,5])
            break;
          
            
      }
})
   
  return (
    <div className="w-full mt-28">
      
      <div className="max-w-screen-xl mx-auto relative">
        <h1 className="font-[myFont] text-[26vw] tracking-tight text-zinc-100 select-none text-center leading-none">Work</h1>
        <div className="w-full h-full top-0 absolute">
            { images.map((elem,index)=>{
             
               return (elem.isActive && <img key={index} style={{ left: elem.left, top: elem.top }} className="w-52   absolute rounded-md -translate-x-[50%] -translate-y-[50%]" 
                src={elem.image} alt="Helooooooo" />)
})}

        </div>
      </div>
      
    </div>
  );
}

export default Work;
