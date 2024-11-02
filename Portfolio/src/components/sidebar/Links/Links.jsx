import {motion} from "framer-motion";
const variants = {
    open:{
        transition:{
            staggerChildren:0.1,
        },
    },
    closed:{
        transition:{
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
    
};
const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300 },
    },
    closed: {
      opacity: 0,
      y: 50, // Start from slightly below
      transition: { type: "spring", stiffness: 300 },
    },
};
const Links = () => {
    
const items = [
    "Homepage", "AboutMe","Projects", "Experience", "Contact"
];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}  // Apply variants to individual items
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;