import React from "react";
import Button from "./Button";

function Product({elem,index,mover}) {
  
  return (
  <div onMouseEnter={()=>mover(index)} className="w-full py-20 h-[23rem]">
    <div className="max-w-screen-xl flex mx-auto items-center justify-between">
        <h1 className="text-5xl  capitilize  font-medium"> {elem.title}</h1>
        <div className="dets   w-1/4">
            <p className="mb-10">{elem.p}</p>
            <div className="flex items-center gap-5">
            {elem.live &&  <Button title="Live Project"/>}
            {elem.case && <Button title="Case Study"/> }
            </div>
           
       
        </div>
    </div>
     
  </div>
  );
}

export default Product;
