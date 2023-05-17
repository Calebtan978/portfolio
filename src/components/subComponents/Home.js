import React, { useState } from "react";
import "../../styles/Home.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const Home = ({ nav, handleNav }) => {
	const heroVariants = {
		hidden: {
			opacity: 0,
			y: "-50%",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.4,
			},
		},
	};

	const contactVariants = {
		hidden: {
			opacity: 0,
			x: "-50%",
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1.4,
			},
		},
	};
	
	return (
		<div className='hero-section' name='home' id='home'>
			<div className='hero-overlay'></div>
			<motion.div
				variants={heroVariants}
				initial='hidden'
				whileInView='visible'
				className='hero-content'>
				<p className='hero-intro'>
					<span>Caleb Tan</span>
				</p>
				<p className='hero-desc'>
					I'm a <span className='hero-desc-sub'>Full Stack/Blockchain Developer.</span>
				</p>
			</motion.div>
			<motion.span
				variants={contactVariants}
				initial='hidden'
				whileInView='visible'>
				<a
					href='Peace Jinadu-Paul CV.pdf'
					download='Peace Jinadu-Paul CV'
					className='hero-contact'>
					Download CV <BiDownload className='cv-icon' />
				</a>
			</motion.span>
		</div>
	);
};

export default Home;
