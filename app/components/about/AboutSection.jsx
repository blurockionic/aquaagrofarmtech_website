import React from 'react';
import '../../App.css';
import Image from 'next/image'; 
import img5 from '../../images/aboutpics/aqua.png'; // Import the Image component from Next.js

const AboutSection = () => {
  return (
    <section className=" py-10 md:px-24" id="about">
      <div className=" flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col justify-start items-start mt-10 gap-3">
          <h2 className="text-md  ">ABOUT</h2>
          <h3 className='font-bold text-2xl md:text-4xl text-[#4CAF50]'>AQUA AGRO FARMTECH</h3>
          <p className='text-sm md:text-md text-[#FF9800]'>Transforming Farming & Landscaping with Innovative Solutions</p>
        </div>
        <div className="about-image flex justify-center items-center mt-5">
          <Image 
            src= {img5}  // Path relative to the public folder
            alt="About Aqua Agro FarmTech"
            width={400}   // Adjust the width as needed
            height={200}  // Adjust the height as needed
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
