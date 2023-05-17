import React from 'react';
import "../../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";
import { BsStack } from "react-icons/bs";
import { SiHiveBlockchain } from "react-icons/si";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I can do</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BsStack className='services-icon' />
                        <p className='services-title'>Full Stack Development</p>
                        <p className='services-desc'>I've used various web technologies for frontend and backend to develop attractive, creative, interactive, responsive and functional website.</p>
                    </div>
                    <div className="services-card">
                        <SiHiveBlockchain className='services-icon' />
                        <p className='services-title'>Blockchain Development</p>
                        <p className='services-desc'>I have many experiences in the Blockchain Development including solidity, web3.js, Consensus Algorithms, Decentralized Application and so on.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
