import Image from "next/image";
import React from "react";
import image_1 from "../../images/ourproject/main.jpg"

const HeroSection = () => {
  return (
    <div className="w-full h-full pb-20 bg-white flex flex-col justify-start items-center gap-10">
      <Image className="w-full  h-auto" src={image_1} alt="Project Image" />

      <div className="flex flex-col justify-start items-center gap-6">
        <div className="flex flex-col justify-start items-start gap-6">
          <div
            className="text-center text-black font-bold leading-tight break-words 
                      w-full max-w-[768px] 
                      text-4xl md:text-5xl lg:text-6xl"
          >
            Project Showcase
          </div>
          <div
            className="text-center text-black leading-normal break-words
                      w-full max-w-[768px] 
                      text-base md:text-lg lg:text-xl"
          >
            Explore Our Transformative Agricultural Solutions
          </div>
        </div>

        <div className="w-full max-w-[768px] flex justify-center items-start gap-2">
          <div className="px-2 py-1 bg-gray-200 flex justify-start items-center">
            <div className="text-black text-sm font-semibold leading-5">
              Polyhouse
            </div>
          </div>
          <div className="px-2 py-1 bg-gray-200 flex justify-start items-center">
            <div className="text-black text-sm font-semibold leading-5">
              Irrigation
            </div>
          </div>
          <div className="px-2 py-1 bg-gray-200 flex justify-start items-center">
            <div className="text-black text-sm font-semibold leading-5">
              Landscaping
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
