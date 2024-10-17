import Image from "next/image";
import React from "react";
import bghero from "../images/bg-hero.png";
import center from "../images/image_center.png";
import right from "../images/image_right.png";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col  gap-5 px-12 w-1/2">
          <h1 className="text-[#4CAF50] text-[56px] font-merriweather-sans font-bold leading-[67.2px] break-words">
            AQUA AGRO FARMTECH
          </h1>

          <div className="text-[#FF9800] text-[32px] font-merriweather-sans font-bold leading-[41.6px] break-words">
            A complete Greenery project under one roof for Your Home
          </div>

          <p className="text-black text-[16px] font-merriweather-sans font-normal leading-[24px] break-words">
            Grounding your home's beauty and value in nature's best. Our expert
            farming and landscaping solutions deliver lasting quality and care.
          </p>

          <div className="flex flex-row gap-5">
            <button
              type="button"
              className="bg-[#B5651D] text-white rounded-md px-4 py-2"
            >
              Contact Us
            </button>
            <button
              type="button"
              className="border border-[#B5651D] text-[#b5651d] rounded-md px-4 py-2"
            >
              Our Services
            </button>
          </div>
        </div>

        <div className="w-1/2 relative h-[600px]">
          <Image
            src={bghero}
            alt="background_hero_image"
            className="object-cover"
            fill // Use fill for proper positioning and responsiveness
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
          <Image
            className="hidden md:flex bottom-0 -left-20 w-40 absolute h-40 shadow-md rounded-lg border-5 border-[#b7b7b7]/70"
            src={center}
            alt="center_image"
          />
          <Image
            className="hidden md:flex top-10 -right-10 w-40 absolute h-52 shadow-md rounded-lg border-5 border-[#b7b7b7]/70"
            src={right}
            alt="center_image"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
