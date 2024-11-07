import { useState } from 'react';
import Links from './Links/Links';
import { motion } from 'framer-motion';
import './sidebar.scss';
import ToggleButton from './toggleButton/ToggleButton';
import Cursor from '../cursor/Cursor';
const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)", // Ensure 'px' is added to radius values
        transition: {
            type: "spring",  // Fix typo from "string" to "spring"
            stiffness: 20,
        },
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};
const Sidebar = () => {
    
    const [open, setOpen] = useState(false);

    

    return (
    
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    );
};

export default Sidebar;
