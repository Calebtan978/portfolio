import About from './subComponents/About';
import Contact from './subComponents/Contact';
import HeroSection from './subComponents/HeroSection';
import Services from './subComponents/Services';
import Skills from './subComponents/Skills';
import Works from './subComponents/Works';

const subComponents = [
    {
        "componentName": "About",
        "component": <About/>
    },
    {
        "componentName": "Contact",
        "component": <Contact/>,
    },
    {
        "componentName": "HeroSection",
        "component": <HeroSection/>,
    },
    {
        "componentName": "Services",
        "component": <Services/>,
    },
    {
        "componentName": "Skills",
        "component": <Skills/>,
    },
    {
        "componentName": "Works",
        "component": <Works/>,
    },
]

export default subComponents