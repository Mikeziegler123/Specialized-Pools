import React from 'react';
import { motion } from "framer-motion";
import "./App.css";

export default function Sidebar({setSelectedMode}) {

    const onButtonClick=(mode)=>{
        setSelectedMode(mode)
    }

    const MyButton = ({ children, onClick }) => (
        <motion.button className="mybutton" onClick={onClick} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {children}
        </motion.button>
    )

    return (<div className='sidebar'>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossOrigin="anonymous" />

        <MyButton  onClick={()=>onButtonClick('home')}><i className="fas fa-home fa-lg" />&nbsp;Home</MyButton>
        <MyButton  onClick={()=>onButtonClick('services')}><i className="fas fa-wrench fa-lg" />&nbsp;&nbsp;Services</MyButton>
        <MyButton  onClick={()=>onButtonClick('guides')}><i className="fas fa-bookmark fa-lg" />&nbsp;&nbsp;&nbsp;Guides</MyButton>
        <MyButton  onClick={()=>onButtonClick('shop')}><i className="fas fa-gem fa-lg" />&nbsp;&nbsp;Shop</MyButton>


    </div>)
}