import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import "../../styles/Navbar.css";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const Main = ({ nav, handleNav }) => {
	console.log("navbar index.js is called!");

	return (
		<div className='NavBarAndScroll'>
			<ScrollToTop></ScrollToTop>
			<Navbar nav={ nav } handleNav={ handleNav }></Navbar>
		</div>
	);
};

export default Main;
