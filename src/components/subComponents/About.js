import React from 'react';
import "../../styles/About.css"
import { motion } from "framer-motion";
import GreetingLottie from '../DisplayLottie';

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>I am a Full-Stack and Blockchain engineer, with 7+years of experience in all stages of advanced web development, specialized in both frontend and backend. </p>
                        <br/>
                        <p>I also have full experience with Blockchain platforms using Solidity, Web3.js, React, Redux, and Node. </p>
                    </motion.div>
                    <motion.div initial={{x: '100%', opacity: 0}} whileInView={horizontal}  className='about-img'>
                      <GreetingLottie animationPath="/lottie/coding.json" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
