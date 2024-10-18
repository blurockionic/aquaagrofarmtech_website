import React from 'react';
import '../App.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="./images/greenbg.png" alt="Greenhouse" className="hero-image" />
      <div className="hero-content">
        <h1>Innovative Agriculture Solutions</h1>
        <p>Leading Punjab's Agro-tech revolution with 700+ successful projects</p>
      </div>
    </section>
  );
};

export default HeroSection;
