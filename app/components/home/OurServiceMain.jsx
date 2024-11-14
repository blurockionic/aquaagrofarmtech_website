"use client";
import Image from "next/image";
import React from "react";
import image_1 from "/public/images/ourservices.jpg";
import image_2 from "/public/images/1111.jpg";
import image_3 from "/public/images/image_service_3.png";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";

const OurServiceMain = () => {
  const router = useRouter();
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
            <Link href={`/pages/polyhouse`}>
              <div className="w-fit mt-4 py-1 px-2 rounded-lg border border-[#ffcc80] flex justify-start items-center gap-1 text-[#ff9800] hover:bg-[#ff9800] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="text-base font-normal font-['Roboto']">
                  Details
                </span>
                <span>{`>`}</span> {/* Right Arrow */}
              </div>
            </Link>
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
              <Link href={`/pages/irrigation`}>
                <div className="w-fit mt-4 py-1 px-2 rounded-lg border border-[#ffcc80] flex justify-start items-center gap-1 text-[#ff9800] hover:bg-[#ff9800] hover:text-white transition-all duration-300 cursor-pointer">
                  <span className="text-base font-normal font-['Roboto']">
                    Details
                  </span>
                  <span>{`>`}</span> {/* Right Arrow */}
                </div>
              </Link>
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
            <Link href={`/pages/landscaping`}>
              <div className="w-fit mt-4 py-1 px-2 rounded-lg border border-[#ffcc80] flex justify-start items-center gap-1 text-[#ff9800] hover:bg-[#ff9800] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="text-base font-normal font-['Roboto']">
                  Details
                </span>
                <span>{`>`}</span> {/* Right Arrow */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServiceMain;
