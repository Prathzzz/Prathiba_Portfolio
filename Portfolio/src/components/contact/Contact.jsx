// contact.js
import React, { useRef, useState } from "react";
import "./contact.scss";
import { animate, motion, stagger } from "framer-motion";
import emailjs from '@emailjs/browser';
import Button from './Button.jsx'
const variants={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        },
    },
}
const Contact = () => {

    const ref = useRef();
    const formRef = useRef();
    const [error , setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_dtlyol9', 'template_4h6g1po', formRef.current, {
            publicKey: 'S_tn-0irmjQWDOzcM',
          })
          .then(
            (result) => {
              setSuccess(true)
            },
            (error) => {
                setError(true)
            },
          );
      };
    
    return (
        <motion.div ref={ref} variants={variants} initial="initial" whileInView="animate" className="contact">
            <motion.div variants={variants} className="textContainer">
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div variants={variants} className="item">
                    <br /><h2>Mail</h2>
                    <Button text="prathiba2654@gmail.com"  />
                    
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Phone</h2>
                    <Button text="9361237767"  />
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Address</h2>
                    <Button text="Chennai, India"  />
                </motion.div>
                
            </motion.div>
            
            <motion.div className="form-container">
            
                <motion.form className="form" ref={formRef} onSubmit={sendEmail}>
                    <div className="form-group">
                        <div className="input-container">
                            <input name="name" required placeholder=" " id="name" type="text" />
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-container">
                            <input name="email" required placeholder=" " id="email" type="email" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-container">
                            <textarea name="message" required id="textarea" placeholder=" " rows="5"></textarea>
                            <label htmlFor="textarea">How Can We Help You?</label>
                        </div>
                    </div>
                    <button type="submit" className="form-submit-btn">Submit</button>
                    {error && "Error"}
                    {success && "Message sent ➣ "}
                </motion.form>
</motion.div>


        </motion.div>
    );
};

export default Contact;
