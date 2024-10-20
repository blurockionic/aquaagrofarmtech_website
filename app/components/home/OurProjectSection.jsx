import React from "react";
import img_1 from "../../images/ourproject/image_project_1.png";
import img_2 from "../../images/ourproject/image_project_2.png";
import img_3 from "../../images/ourproject/image_project_3.png";
import img_4 from "../../images/ourproject/image_project_4.png";
import img_5 from "../../images/ourproject/image_project_5.png";
import img_6 from "../../images/ourproject/image_project_6.png";
import Image from "next/image";

const OurProjectSection = () => {
  return (
    <div className="w-full h-full px-4 md:px-8 lg:px-16 py-20 bg-[#FFF8E1] flex flex-col justify-start items-center gap-12">
      {/* Section Title */}
      <div className="h-auto text-center flex flex-col justify-start items-center gap-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-black font-[Merriweather Sans]">
          Our Projects
        </h2>
        <p className="text-lg md:text-xl text-[#FF9800] font-normal leading-7 font-roboto">
          Explore Our Successful Projects and See Nature-Driven Solutions in Action
        </p>
      </div>

      {/* Project Images Grid */}
      <div className="w-full flex flex-wrap justify-center lg:justify-between gap-6 lg:gap-8">
        <div className="w-full md:w-1/2 lg:w-[416px]">
          <Image
            className="rounded-[16px] w-full h-auto"
            src={img_1}
            alt="Project 1"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-[416px]">
          <Image
            className="rounded-[16px] w-full h-auto"
            src={img_2}
            alt="Project 2"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-[416px]">
          <Image
            className="rounded-[16px] w-full h-auto"
            src={img_3}
            alt="Project 3"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-[416px]">
          <Image
            className="rounded-[16px] w-full h-auto"
            src={img_4}
            alt="Project 4"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-[416px]">
          <Image
            className="rounded-[16px] w-full h-auto"
            src={img_5}
            alt="Project 5"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-[416px]">
          <Image
            className="rounded-[16px] w-full h-auto"
            src={img_6}
            alt="Project 6"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProjectSection;
