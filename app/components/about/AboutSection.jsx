import React from 'react';
import '../../App.css';
import Image from 'next/image'; 
import img5 from '../../images/aboutpics/aqua.png'; // Import the Image component from Next.js

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
          <Image 
            src= {img5}  // Path relative to the public folder
            alt="About Aqua Agro FarmTech"
            width={600}   // Adjust the width as needed
            height={400}  // Adjust the height as needed
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
