import React from 'react';
import Button from './Button';
import '../../App.css';
import Image from 'next/image';
import img7 from '../../images/aboutpics/target.png';  
import img8 from '../../images/aboutpics/targeticon.png';// Import the Image component from Next.js

const MissionVision = () => {
  return (
    <section className="mission-vision">
      <div className="mission-vision-content">
        <div className="mission-vision-header">
         
          <Image 
            src={img8} 
            alt="Mission Icon" 
            // width={300}  // Set the appropriate width
            // height={500} // Set the appropriate height
            className="mission-icon"
          />
          <h2>Our Mission and Vision</h2>
        </div>
        <p>
          With over 8 years of dedicated experience, AQUA AGRO FARMTECH has cultivated a deep passion
          for greenery and sustainable practices. Our team is committed to enhancing landscapes and promoting
          agricultural innovation.
        </p>
        <p>
          At Aqua Agro Farmtech, we strive to revolutionize sustainable farming with innovative polyhouse solutions, efficient irrigation systems, and high-quality landscaping services. Our vision is to create green spaces that empower agricultural productivity while conserving resources.
        </p>
        <div className="button-group">
          <Button label="Contact Us" />
          <Button label="Our Services" secondary />
        </div>
      </div>
      <div className="mission-vision-image">
      
        <Image 
          src= {img7} 
          alt="Target with arrow" 
          width={200}  // Set the appropriate width
          height={200} // Set the appropriate height
        />
      </div>
    </section>
  );
};

export default MissionVision;
