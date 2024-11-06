import React from "react";
import img1 from "../../images/products/nethouse.jpg";
import img2 from "../../images/products/polyhouse.jpg";
import img3 from "../../images/products/irrigation.jpeg";
import img4 from "../../images/products/landscaping.jpg";
import img5 from "../../images/products/Greenhouse.jpg";
import img6 from "../../images/products/terracegardern.jpg";
import img7 from "../../images/products/gardensprinkle.jpg";
import img8 from "../../images/products/planting.jpg";
import Image from "next/image";

const OurAccessoriesSection = () => {
  return (
    <div className="w-full h-full p-8 bg-white flex flex-col justify-start items-center gap-12">
      <div className="self-stretch flex justify-center items-center">
        <div className="text-center text-black text-4xl font-bold leading-[57.6px] font-[Merriweather Sans] break-words">
        Our Products
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {/* Item 1 */}
        <div className="p-6 bg-white shadow-[0px_19px_33px_-16px_rgba(0,0,0,0.25)] rounded-[25px] flex flex-col justify-start items-center gap-8">
          <Image
            className="w-[189px] h-[190px] rounded-[25px] border border-black"
            src={img1}
            alt="BRACKET 'F' TYPE"
          />
          <div className="w-[189px] text-center text-black text-lg font-bold font-roboto leading-[27px] break-words">
          Net House
          </div>
          <div className="px-6 py-3 bg-[#B5651D] rounded-[8px] border border-[#B5651D] flex justify-center items-center">
            <div className="text-white text-base font-bold font-roboto leading-[24px]">
              Learn More
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="p-6 bg-white shadow-[0px_19px_33px_-16px_rgba(0,0,0,0.25)] rounded-[25px] flex flex-col justify-start items-center gap-8">
          <Image
            className="w-[190px] h-[190px] rounded-[25px] border border-black"
            src={img2}
            alt="BRACKET 'L' TYPE"
          />
          <div className="w-[189px] text-center text-black text-lg font-bold font-roboto leading-[27px] break-words">
          Poly House
          </div>
          <div className="px-6 py-3 bg-[#B5651D] rounded-[8px] border border-[#B5651D] flex justify-center items-center">
            <div className="text-white text-base font-bold font-roboto leading-[24px]">
              Learn More
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="p-6 bg-white shadow-[0px_19px_33px_-16px_rgba(0,0,0,0.25)] rounded-[25px] flex flex-col justify-start items-center gap-8">
          <Image
            className="w-[189px] h-[190px] rounded-[25px] border border-black"
            src={img3}
            alt="TUBLAR-L-JOINER"
          />
          <div className="w-[189px] text-center text-black text-lg font-bold font-roboto leading-[27px] break-words">
          Irrigation System
          </div>
          <div className="px-6 py-3 bg-[#B5651D] rounded-[8px] border border-[#B5651D] flex justify-center items-center">
            <div className="text-white text-base font-bold font-roboto leading-[24px]">
              Learn More
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="p-6 bg-white shadow-[0px_19px_33px_-16px_rgba(0,0,0,0.25)] rounded-[25px] flex flex-col justify-start items-center gap-8">
          <Image
            className="w-[190px] h-[190px] rounded-[25px] border border-black"
            src={img4}
            alt="TUBLAR-T-JOINER"
          />
          <div className="w-[189px] text-center text-black text-lg font-bold font-roboto leading-[27px] break-words">
          Landscaping
          </div>
          <div className="px-6 py-3 bg-[#B5651D] rounded-[8px] border border-[#B5651D] flex justify-center items-center">
            <div className="text-white text-base font-bold font-roboto leading-[24px]">
              Learn More
            </div>
          </div>
        </div>

        {/* Item 5 */}
        <div className="p-6 bg-white shadow-[0px_19px_33px_-16px_rgba(0,0,0,0.25)] rounded-[25px] flex flex-col justify-start items-center gap-8">
          <Image
            className="w-[190px] h-[190px] rounded-[25px] border border-black"
            src={img5}
            alt="GUTTER BRACKET"
          />
          <div className="w-[189px] text-center text-black text-lg font-bold font-roboto leading-[27px] break-words">
          Green House
          </div>
          <div className="px-6 py-3 bg-[#B5651D] rounded-[8px] border border-[#B5651D] flex justify-center items-center">
            <div className="text-white text-base font-bold font-roboto leading-[24px]">
              Learn More
            </div>
          </div>
        </div>

        {/* Item 6 */}
        <div className="p-6 bg-white shadow-[0px_19px_33px_-16px_rgba(0,0,0,0.25)] rounded-[25px] flex flex-col justify-start items-center gap-8">
          <Image
            className="w-[190px] h-[190px] rounded-[25px] border border-black"
            src={img6}
            alt="GUTTER PLATE"
          />
          <div className="w-[189px] text-center text-black text-lg font-bold font-roboto leading-[27px] break-words">
          Terrance garden
          </div>
          <div className="px-6 py-3 bg-[#B5651D] rounded-[8px] border border-[#B5651D] flex justify-center items-center">
            <div className="text-white text-base font-bold font-roboto leading-[24px]">
              Learn More
            </div>
          </div>
        </div>

        {/* Item 7 */}
        <div className="p-6 bg-white shadow-[0px_19px_33px_-16px_rgba(0,0,0,0.25)] rounded-[25px] flex flex-col justify-start items-center gap-8">
          <Image
            className="w-[190px] h-[190px] rounded-[25px] border border-black"
            src={img7}
            alt="GUTTER PLATE"
          />
          <div className="w-[189px] text-center text-black text-lg font-bold font-roboto leading-[27px] break-words">
          Garden Sprinkle
          </div>
          <div className="px-6 py-3 bg-[#B5651D] rounded-[8px] border border-[#B5651D] flex justify-center items-center">
            <div className="text-white text-base font-bold font-roboto leading-[24px]">
              Learn More
            </div>
          </div>
        </div>

        {/* Item 8 */}
        <div className="p-6 bg-white shadow-[0px_19px_33px_-16px_rgba(0,0,0,0.25)] rounded-[25px] flex flex-col justify-start items-center gap-8">
          <Image
            className="w-[190px] h-[190px] rounded-[25px] border border-black"
            src={img8}
            alt="GUTTER PLATE"
          />
          <div className="w-[189px] text-center text-black text-lg font-bold font-roboto leading-[27px] break-words">
            Home Planting
          </div>
          <div className="px-6 py-3 bg-[#B5651D] rounded-[8px] border border-[#B5651D] flex justify-center items-center">
            <div className="text-white text-base font-bold font-roboto leading-[24px]">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAccessoriesSection;
