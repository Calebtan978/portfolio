import React, { useState } from "react";
import { BiDownload } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import "../../styles/Navbar.css";

const Main = () => {
	const scrollToTop = () => {
		scroll.scrollToTop({ smooth: "linear" });
	};

	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			if (!visible) setVisible(true);
		} else if (scrolled <= 300) {
			if (visible) setVisible(false);
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

	
	return (
        <motion.div
            variants={heroVariants}
            initial='hidden'
            whileInView='visible'
            className={visible ? "to-top-icon show" : "to-top-icon hide"}
            onClick={scrollToTop}>
            <AiOutlineArrowUp />
        </motion.div>
	);
};

export default Main;
