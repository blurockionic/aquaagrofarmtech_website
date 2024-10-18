import React from 'react';
import Button from './Button';
import '../App.css';

const MissionVision = () => {
  return (
    <section className="mission-vision">
      <div className="mission-vision-content">
        <h2>Our Mission and Vision</h2>
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
        <img src="./images/target.png" alt="Target with arrow" />
      </div>
    </section>
  );
};

export default MissionVision;
