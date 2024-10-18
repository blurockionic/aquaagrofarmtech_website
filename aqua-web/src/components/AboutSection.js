import React from 'react';
import '../App.css';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>ABOUT</h2>
          <h3>AQUA AGRO FARMTECH</h3>
          <p>Transforming Farming & Landscaping with Innovative Solutions</p>
        </div>
        <div className="about-image">
          <img src="./images/aqua.png" alt="About Aqua Agro FarmTech" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
