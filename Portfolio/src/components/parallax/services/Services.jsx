import { color, motion, useInView } from "framer-motion";
import "./services.scss";
import { useRef } from "react";
import ButtonSpace from "../../hero/BUttonSpace";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2, // Adjusted for smooth staggering
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Added duration for smoother transitions
    },
  },
};

const Services = () => {
    const ref= useRef()
    const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
      //whileInView="animate"
    >
      <motion.div className="textContainer" variants={itemVariants}>
        <p>
          I work to elevate your brand and
          <br /> ensure continuous progress
        </p>
        <hr />
      </motion.div>

     <motion.div className="titleContainer" variants={itemVariants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"#e75d9e"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"#e75d9e"}}>For Your</motion.b> Business
          </h1>
          <ButtonSpace />
        </div>
      </motion.div>
 
      <motion.div className="listContainer" variants={itemVariants}>
        {/*Individual boxes with hover effects */}
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
            transition: { duration: 0.3 }, // Smooth transition for hover
          }}
        >
          <h2>Software Development</h2>
          <p>
            I create custom software solutions for desktop and mobile
            applications. My focus is on efficient, innovative software that
            drives business growth, streamlining operations through
            high-performance, user-friendly systems.
          </p>
          <button>Transform</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
            transition: { duration: 0.3 },
          }}
        >
          <h2>Front-End Development</h2>
          <p>
            I build responsive, user-friendly interfaces using HTML, CSS,
            JavaScript, and React. My designs ensure seamless interaction across
            devices, enhancing the user experience while meeting modern web
            standards.
          </p>
          <button>Engage</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
            transition: { duration: 0.3 },
          }}
        >
          <h2>Back-End Development</h2>
          <p>
            I develop secure and scalable back-end systems with Node.js,
            MongoDB, and SQL. I focus on API development and database
            management, delivering reliable, fast solutions for growing business
            needs.
          </p>
          <button>Empower</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
            transition: { duration: 0.3 },
          }}
        >
          <h2>Machine Learning Development</h2>
          <p>
            I provide machine learning services from data preparation to
            deployment. My expertise covers predictive modeling, NLP, and deep
            learning. I create custom AI solutions to help businesses automate
            tasks, improve decision-making, and gain value from data.
          </p>
          <button>Innovate</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
