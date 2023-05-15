import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import "../../styles/Navbar.css";
import Navbar from "./Navbar";

const Main = ({ nav, handleNav }) => {
	console.log("navbar index.js is called!");
	const scrollToTop = () => {
		scroll.scrollToTop({ smooth: "linear" });
	};

	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	window.addEventListener("scroll", toggleVisible);

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

	const menuVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			scale: [1, 1.2, 1.5, 1.2, 1],
			rotate: [0, 0, 360, 360, 360],
			borderRadius: ["50%", "50%", "50%", "50%", "50%"],
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<div className='NavBarAndScroll'>
			<div className='NavBarAndScroll-overlay'></div>
			<motion.div
				// viewport={{ once: true }}
				variants={menuVariants}
				initial='hidden'
				whileInView='visible'
				onClick={handleNav}
				className='menu-icon'>
				{nav ? <FaTimes /> : <FaBars />}
			</motion.div>
			<motion.div
				variants={heroVariants}
				initial='hidden'
				whileInView='visible'
				className={visible ? "to-top-icon show" : "to-top-icon hide"}
				onClick={scrollToTop}>
				<AiOutlineArrowUp />
			</motion.div>
			<Navbar></Navbar>
		</div>
	);
};

export default Main;
