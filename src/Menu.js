import React from 'react';
import { motion } from "framer-motion"
import "./Menu.css";

export default function Menu({setSelectedMode}) {

    const onButtonClick=(mode)=>{
        setSelectedMode(mode)
    }
    
    const MyButton = ({ children, onClick }) => (
        <motion.button onClick={onClick} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {children}
        </motion.button>
    )

        return (
            <React.Fragment>

                <div className="col-12 text-center ">
                    <button onClick={()=>onButtonClick('Home')} className="btn btn-primary button">Home</button>
                    <button onClick={()=>onButtonClick('Services')} className="btn btn-primary button">Services</button>
                    <button onClick={()=>onButtonClick('Guides')} className="btn btn-primary button">Guides</button>
                    <button onClick={()=>onButtonClick('Shop')} className="btn btn-primary button">Shop</button>

                </div>

            </React.Fragment >
        );
};