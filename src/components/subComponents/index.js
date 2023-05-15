import About from './About';
import Contact from './Contact';
import Home from './Home';
import Services from './Services';
import Skills from './Skills';
import Works from './Works';
import { FaHome, FaLaptop, FaUber } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiBookContent, BiServer, BiEnvelope } from "react-icons/bi";
import "../../styles/Navbar.css";

const subComponents = [
    {
        "name": "Home",
        "component": <Home/>,
        "icon": <FaHome className='mid-icon' />,
        "here": "home",              // class name
    },
    {
        "name": "About",
        "component": <About/>,
        "icon": <FiUser className='mid-icon' />,
        "here": "about",
    },
    {
        "name": "Skills",
        "component": <Skills/>,
        "icon": <FaLaptop className='mid-icon' />,
        "here": "skills",
    },
    {
        "name": "Services",
        "component": <Services/>,
        "icon": <BiServer className='mid-icon' />,
        "here": "services",
    },
    {
        "name": "Works",
        "component": <Works/>,
        "icon": <BiBookContent className='mid-icon' />,
        "here": "works",
    },
    {
        "name": "Contact",
        "component": <Contact/>,
        "icon": <BiEnvelope className='mid-icon' />,
        "here": "contact",
    },
]

export default subComponents