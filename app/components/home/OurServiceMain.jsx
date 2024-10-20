import Image from "next/image";
import React from "react";
import image_1 from "../../images/image_service_1.png";
import image_2 from "../../images/image_service_2.png";
import image_3 from "../../images/image_service_3.png";
import { IoIosArrowForward } from "react-icons/io";

const OurServiceMain = () => {
  return (
    <div className="w-full h-full px-4 md:px-16 py-12 md:py-28 bg-white flex flex-col justify-start items-center gap-10 md:gap-20">
      {/* Heading Section */}
      <div className="h-auto md:h-40 flex flex-col justify-start items-center gap-2 md:gap-4">
        <div className="flex justify-start items-center">
          <div className="text-center text-[#FF9800] text-base md:text-lg font-semibold leading-6">
            Growing Nature, Elevating Dreams
          </div>
        </div>
        <div className="w-full h-auto md:h-28 flex flex-col justify-start items-center gap-4 md:gap-6">
          <div className="w-full text-center text-[#B5651D] text-3xl md:text-5xl font-bold leading-tight">
            Our Services
          </div>
          <div className="w-full text-center text-black text-sm md:text-lg font-normal leading-6 md:leading-7">
            Discover a full range of innovative farming and landscaping services
            designed to nurture your space and elevate your environment.
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-8">
        {/* Card 1 */}
        <div className="w-full md:w-[400px] bg-white rounded-xl border border-gray-400 flex flex-col justify-start items-start">
          <Image
            className="w-full h-[233px] rounded-t-xl"
            src={image_1}
            alt="Polyhouse Solutions"
          />
          <div className="w-full p-4 md:p-8 flex flex-col justify-center items-start gap-4 md:gap-6">
            <div className="text-black text-xl md:text-2xl font-bold leading-tight">
              Polyhouse Solutions
            </div>
            <div className="text-black text-sm md:text-lg font-normal leading-5 md:leading-6">
              Revolutionizing agriculture with top-tier polyhouse structures.
            </div>
            <div className="h-10 md:h-12 py-1 border border-[#FFCC80] rounded-lg flex justify-start items-center gap-2 md:gap-6">
              <div className="px-3 flex justify-center items-center gap-2">
                <span className="text-[#FF9800] text-base md:text-lg font-normal">
                  Details
                </span>
                <IoIosArrowForward className="text-[#FF9800] text-lg md:text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-[400px] bg-white rounded-xl border border-gray-400 flex flex-col justify-start items-start">
          <Image
            className="w-full h-[233px] rounded-t-xl"
            src={image_2}
            alt="Irrigation Systems"
          />
          <div className="w-full p-4 md:p-8 flex flex-col justify-center items-start gap-4 md:gap-6">
            <div className="text-black text-xl md:text-2xl font-bold leading-tight">
              Irrigation Systems
            </div>
            <div className="text-black text-sm md:text-lg font-normal leading-5 md:leading-6">
              Maximizing growth with precision irrigation solutions.
            </div>
            <div className="h-10 md:h-12 py-1 border border-[#FFCC80] rounded-lg flex justify-start items-center gap-2 md:gap-6">
              <div className="px-3 flex justify-center items-center gap-2">
                <span className="text-[#FF9800] text-base md:text-lg font-normal">
                  Details
                </span>
                <IoIosArrowForward className="text-[#FF9800] text-lg md:text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-[400px] bg-white rounded-xl border border-gray-400 flex flex-col justify-start items-start">
          <Image
            className="w-full h-[233px] rounded-t-xl"
            src={image_3}
            alt="Landscaping"
          />
          <div className="w-full p-4 md:p-8 flex flex-col justify-center items-start gap-4 md:gap-6">
            <div className="text-black text-xl md:text-2xl font-bold leading-tight">
              Landscaping
            </div>
            <div className="text-black text-sm md:text-lg font-normal leading-5 md:leading-6">
              Transforming spaces with expert landscaping craftsmanship.
            </div>
            <div className="h-10 md:h-12 py-1 border border-[#FFCC80] rounded-lg flex justify-start items-center gap-2 md:gap-6">
              <div className="px-3 flex justify-center items-center gap-2">
                <span className="text-[#FF9800] text-base md:text-lg font-normal">
                  Details
                </span>
                <IoIosArrowForward className="text-[#FF9800] text-lg md:text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServiceMain;
