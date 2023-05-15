import React from "react";
import "../../styles/Navbar.css";
import { FaHome, FaLaptop } from "react-icons/fa";
import { BiBookContent, BiServer, BiEnvelope } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { Link } from "react-scroll";
import ProfileImg from "../../images/profile.jpg";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import subComponents from "../subComponents";

const navVariants = {
	hidden: {
		opacity: 0,
		transition: {
			delay: 0.5,
			staggerChildren: 0.2,
			staggerDirection: -1,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.2,
			staggerDirection: 1,
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


const Navbar = ({ nav, handleNav }) => {
	return (
		<div>
			<AnimatePresence>
				<motion.nav
					initial={{ width: "0" }}
					animate={
						nav ? { width: "300px" } : { width: "0", transition: { delay: 1 } }
					}
					className={nav ? "navbar active" : "navbar"}>
					<motion.div
						initial='hidden'
						whileInView={nav ? "visible" : "hidden"}
						variants={navVariants}
						exit='hidden'
						className='navbar-container'>
						<div className='top-details'>
							<div className='img__cover'>
								<img src={ProfileImg} alt='Main' className='profile-pic-small' />
							</div>
							<Link
								activeClass='active'
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								onClick={handleNav}
								to='home'
								className='profile-name'>
								Peace Jinadu-Paul
							</Link>
							<NavLinks handleNav={handleNav} />
						</div>
						<ul className='mid-details'>
							{subComponents.map((w, index) => {
								return(
									<Link
										activeClass='active'
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
										key={index}
										to={w.here}
										className='mid-links'>
										{w.icon}
										<li className='mid-link' onClick={handleNav}>
											{w.name}
										</li>
									</Link>
								)
							})}
						</ul>
						<div className='copy'>
							<small className='copyright'>
								© Copyright ©2022 <br /> All rights reserved |
							</small>
						</div>
					</motion.div>
				</motion.nav>
			</AnimatePresence>
			<motion.div
				// viewport={{ once: true }}
				variants={menuVariants}
				initial='hidden'
				whileInView='visible'
				onClick={handleNav}
				className='menu-icon'>
				{nav ? <FaTimes /> : <FaBars />}
			</motion.div>
		</div>
	);
};

export default Navbar;
