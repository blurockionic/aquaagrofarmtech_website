import React from 'react';
import '../../App.css';
import Image from 'next/image';  
import img2 from '../../images/aboutpics/greenbg.png';  

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-image-wrapper">
        <Image 
          src={img2} 
          alt="Greenhouse" 
          className="hero-image" 
        />
      </div>
      <div className="hero-content py-10">
        <h1>Innovative Agriculture Solutions</h1>
        <p className='text-sm px-5'>Leading Punjab's Agro-tech revolution with 700+ successful projects</p>
      </div>
    </section>
  );
};

export default HeroSection;
