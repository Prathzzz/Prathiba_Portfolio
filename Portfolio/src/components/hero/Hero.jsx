import { motion } from "framer-motion";
import "./hero.scss";

const textVariants={
    initial: {
        x: -500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
};
const SliderVariants={
    initial: {
        x: 0,
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
};

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <div className="imageContainer">
        <img src="/mee.jpg" alt="" />
        </div>
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate" >
                <motion.h2 variants={textVariants}>I'M PRATHIBA MAHESHWARI</motion.h2>
                <motion.h1 variants={textVariants}>Software Developer</motion.h1>
                <motion.h3 variants={textVariants}>FREELANCER</motion.h3>
                <motion.div variants={textVariants} className="buttons">
                    {/* Navigate to Projects Section */}
            <motion.button variants={textVariants}>
              <a href="#Projects">Check my latest works</a>
            </motion.button>
            
            {/* Navigate to Contact Page */}
            <motion.button variants={textVariants}>
              <a href="#Contact">Contact Me</a>
            </motion.button>
                    {/* Link to Google Drive Resume */}
          <motion.button variants={textVariants}>
            <a 
              href="https://drive.google.com/file/d/18zJNhCrclGt1tsLzUlMy7FgtCNJnjgI2/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </motion.button>
          
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={SliderVariants} initial="initial" animate="animate">
                Software developer
            </motion.div>
        </div>
  );
};

export default Hero;