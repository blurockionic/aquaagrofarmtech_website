import React from "react";
import Image from "next/image";
import head from "/public/images/award/head.png";

const ImageHeader = ({ title }) => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] flex justify-center items-center">
      <Image
        src={head}
        alt="Placeholder"
        className="w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-70 text-white p-6 md:px-16">
        <span className="text-sm md:text-lg  md:mt-24">Awards</span>
        <h1 className="text-3xl md:text-6xl font-bold mt-3 md:mt-5">
          Our Achievements
        </h1>
        <p className="text-sm md:text-lg mt-2 text-[#FFEB3B]">
          We proudly share our awards and recognition, a testament to our hard
          work.
        </p>
      </div>
    </div>
  );
};

export default ImageHeader;
