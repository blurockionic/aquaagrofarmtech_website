import Image from "next/image";
import React from "react";
import bghero from "../../images/bg-hero.png";
import center from "../../images/image_center.png";
import right from "../../images/image_right.png";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="flex flex-col gap-5 px-6 md:px-12 w-full md:w-1/2">
          <h1 className="text-[#4CAF50] text-[32px] md:text-[56px] font-merriweather-sans font-bold leading-tight md:leading-[67.2px] break-words">
            AQUA AGRO FARMTECH
          </h1>

          <div className="text-[#FF9800] text-[24px] md:text-[32px] font-merriweather-sans font-bold leading-tight md:leading-[41.6px] break-words">
            A complete Greenery project under one roof for Your Home
          </div>

          <p className="text-black text-[14px] md:text-[16px] font-merriweather-sans font-normal leading-[20px] md:leading-[24px] break-words">
            Grounding your home's beauty and value in nature's best. Our expert
            farming and landscaping solutions deliver lasting quality and care.
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <button
              type="button"
              className="bg-[#B5651D] text-white rounded-md px-4 py-2 text-sm md:text-base"
            >
              Contact Us
            </button>
            <button
              type="button"
              className="border border-[#B5651D] text-[#B5651D] rounded-md px-4 py-2 text-sm md:text-base"
            >
              Our Services
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[600px] mt-8 md:mt-0">
          <Image
            src={bghero}
            alt="background_hero_image"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
          <Image
            className="hidden md:flex bottom-0 -left-10 md:-left-20 w-24 md:w-40 absolute h-24 md:h-40 shadow-md rounded-lg border-5 border-[#b7b7b7]/70"
            src={center}
            alt="center_image"
          />
          <Image
            className="hidden md:flex top-5 md:top-10 -right-5 md:-right-10 w-24 md:w-40 absolute h-32 md:h-52 shadow-md rounded-lg border-5 border-[#b7b7b7]/70"
            src={right}
            alt="right_image"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
