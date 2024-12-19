import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitel from "../assets/arqitel.mp4";
import ttr from "../assets/ttr.mp4";
import yir from "../assets/yir.mp4";
import yahoo from "../assets/yahoo.mp4";
import rainfall from "../assets/rainfall.mp4";

function Products() {
  const [y_pos, setypos] = useState();
  const data = [
    {
      title: "Arqitel",
      p: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      p: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      p: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      p: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      p: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
  ];
  const mover = (index) => {
    setypos(index * 23);
    console.log(y_pos);
  };
  return (
    <div className="mt-32 w-full relative">
      {data.map((elem, index) => (
        <Product key={index} elem={elem} mover={mover} index={index} />
      ))}
      <div className=" window-wrapper w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: y_pos, x: "-50%" }}
          animate={{ y: y_pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem]  rounded-3xl left-[44%] overflow-hidden "
        >
          <motion.div
            animate={{ y: -y_pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            {" "}
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={arqitel}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -y_pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            {" "}
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={ttr}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -y_pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            {" "}
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yir}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -y_pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            {" "}
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yahoo}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -y_pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            {" "}
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={rainfall}
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
