import React from "react";

function Stripe({image,number}) {
  return (
    <div className="w-[16.66%] px-4 text-zinc-100 py-4 text-lg border-[1.2px] font-[myFont] border-zinc-600 flex  justify-between items-center">
     <img src={image} alt="" />
      <span>{number}</span>
    </div>
  );
}

export default Stripe;
