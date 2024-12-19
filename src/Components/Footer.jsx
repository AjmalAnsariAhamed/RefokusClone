import React from "react";
import List from "./List";

function Footer() {
  return (
    <div className="w-full mt-10 ">
      <div className="max-w-screen-xl mx-auto p-1 flex justify-around items-center">

      <h1 className="text-zinc-100 font-bold font-[myFont] text-[10vw]">refokus.</h1>
      <div className="other-details flex justify-between gap-14 items-center">
        <List key={1} heading={"Socials"} dets={["Instagram","Twitter (X?)","LinkedIn"]}/>
        <List key={2} heading={"Stemap"} dets={["Home","work","Careers","Contact"]}/>
      <div className="bg-emerald-600 max-w-44 p-2 rounded-sm text-[#d8f3dc] " style={{boxShadow: "0px 0px 0.45em #00FF19"}}>
        <p className="whitespace-pre-wrap">Refokus Clone made by Ajmal Ansari Ahamed Mohammed.</p>
      </div>
      </div>
      </div>
       
    
    </div>
  );
}

export default Footer;
