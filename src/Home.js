import React, { useState } from 'react';
import { motion } from "framer-motion"
import HomeContent from "./HomeContent";
import Services from './Services';
import Guides from "./Guides";
import Shop from './Shop';
import "./App.css";

const variants = {
  open: { opacity: 1, y: "32%" },
  closed: { opacity: 0, x: "-35%", y: "-15%" },
  big: { scale: 1.64, x: "35%", y: "32%", width: "100%" },
  normal: { scale: 1, x: "35%", y: "32%" },
  small: { scale: 0.1 },
  rotate: { rotate: 1000 },
  circle: { borderRadius: "100%" }

}

export default function Home({ selectedMode }) {

  switch ( selectedMode ) {
    case 'home':
      return <div className="" >
        <motion.div initial={""} animate={selectedMode} variants={variants}
          transition={{ duration: 0.5 }} ><HomeContent /></motion.div></div>
    case 'services':
      return <div className='home'>
        <motion.div initial={"open"} animate={selectedMode} variants={variants}
          transition={{ duration: 0.5 }} ><Services /></motion.div></div>
    case 'guides':
      return <div className='home'>
        <motion.div initial={"open"} animate={selectedMode} variants={variants}
          transition={{ duration: 0.5 }} ><Guides /></motion.div></div>
    case 'shop':
      return <div className='home'>
        <motion.div initial={"open"} animate={selectedMode} variants={variants}
          transition={{ duration: 0.5 }} ><Shop /></motion.div></div>
    default:
      return <div className='home contentbg'>
        <motion.div initial={"closed"} animate={selectedMode} variants={variants}
          transition={{ duration: 0.5 }} ><HomeContent /></motion.div></div>
  }

}