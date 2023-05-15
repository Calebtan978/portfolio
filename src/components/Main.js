import React from 'react';
import About from './subComponents/About';
import Contact from './subComponents/Contact';
import HeroSection from './subComponents/HeroSection';
import Services from './subComponents/Services';
import Skills from './subComponents/Skills';
import Works from './subComponents/Works';

const Main = ({nav, handleNav, closeNav}) => {
  console.log("Main func is called!");
  return(
    <div onClick={closeNav } className='main'>
        <HeroSection/>
        <About />
        <Skills />
        <Services />
        <Works />
        <Contact />
    </div>
  )
};

export default Main;
