import React from "react";
import Button from "./Button";
import "../../App.css";
import Image from "next/image";
import img7 from "/public/images/aboutpics/target.png";
import img8 from "/public/images/aboutpics/targeticon.png"; // Import the Image component from Next.js

const MissionVision = () => {
  return (
    <section className=" flex flex-col md:flex-row justify-around items-center gap-20 px-10 py-20 bg-[#F5F5DC]">
      <div className="mission-vision-content">
        <div className="flex flex-row justify-start items-center">
          <Image
            src={img8}
            alt="Mission Icon"
            // width={300}  // Set the appropriate width
            // height={500} // Set the appropriate height
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] mr-2"
          />
          <h2 className="text-3xl md:text-5xl  px-2 font-bold">
            Our Mission and Vision
          </h2>
        </div>
        <p className="mt-4 text-justify">
          With over 8 years of dedicated experience, AQUA AGRO FARMTECH has
          cultivated a deep passion for greenery and sustainable practices. Our
          team is committed to enhancing landscapes and promoting agricultural
          innovation.
        </p>
        <p className="mt-4 text-justify">
          At Aqua Agro Farmtech, we strive to revolutionize sustainable farming
          with innovative polyhouse solutions, efficient irrigation systems, and
          high-quality landscaping services. Our vision is to create green
          spaces that empower agricultural productivity while conserving
          resources.
        </p>
        <div className="mt-5 flex flex-row justify-start items-center gap-5">
          <button className="bg-[#B5651D] text-white rounded-md px-4 py-2 text-sm md:text-base">Contact Us</button>
          <button className="border border-[#B5651D] text-[#B5651D] bg-white rounded-md px-4 py-2 text-sm md:text-base">Our Services</button>
        </div>
      </div>
      <div className="mission-vision-image">
        <Image
          src={img7}
          alt="Target with arrow"
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>
    </section>
  );
};

export default MissionVision;
