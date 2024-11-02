import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useState, useRef } from "react";

const items = [
  {
    id: 1,
    title: "Unit Converter",
    img: "https://img-aws.ehowcdn.com/360x267p/photos.demandstudios.com/getty/article/197/122/89686659.jpg",
    desc: "The Unit Converter App allows users to easily convert between different units of measurement, including length, weight, and temperature. Developed in Java with an intuitive XML interface, it delivers quick and accurate conversions",
    link: "https://github.com/Prathzzz/UNIT_CONVERTER" // Repository link for Unit Converter
  },
  {
    id: 2,
    title: "LinkedIn Clone",
    img: "https://s3-alpha.figma.com/hub/file/936983486/e8feec80-7708-41f4-9485-13c67223bfba-cover.png",
    desc: "This LinkedIn Clone is a full-featured social networking web application built with the MERN stack (MongoDB, Express.js, React, Node.js). Designed to simulate core functionalities of LinkedIn, this project allows users to connect, share, and engage with one another.",
    link: "https://github.com/Prathzzz/LinkedIn-Clone" // Repository link for LinkedIn Clone
  },
  {
    id: 3,
    title: "Pneumonia Detection System",
    img: "/pneu.png",
    desc: "This Pneumonia Detection System is a deep learning-based web application designed to assist in the detection of pneumonia from chest X-ray images. Built using Convolutional Neural Networks (CNNs) for image classification and a Flask app for a simple user interface, this system provides users with an accessible and intuitive diagnostic tool.",
    link: "https://github.com/Prathzzz/Pneumonia_detection_system" // Repository link for Pneumonia Detection
  }
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const buttonRect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - (buttonRect.left + buttonRect.width / 2);
    const offsetY = e.clientY - (buttonRect.top + buttonRect.height / 2);

    const moveRange = 50;
    const limitedX = Math.max(-moveRange, Math.min(moveRange, offsetX));
    const limitedY = Math.max(-moveRange, Math.min(moveRange, offsetY));

    setPos({ x: limitedX, y: limitedY });
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="imageContainer"
          >
            <img src={item.img} alt="" />
          </motion.div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.button
              style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setPos({ x: 0, y: 0 })}
              onClick={() => window.open(item.link, "_blank")} // Opens link in new tab
            >
              Demo
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
