import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="w-full h-full px-6 sm:px-8 md:px-12 lg:px-16 py-20 bg-[#B5651D] flex flex-col justify-start items-center gap-12">
      <div className="h-14 flex flex-col justify-start items-center gap-6">
        <div className="w-full text-center text-white text-3xl md:text-5xl font-bold font-[Merriweather_Sans] leading-tight md:leading-[57.6px]">
          Customer testimonials
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
        {/* First Testimonial */}
        <div className="w-full md:w-[416px] p-8 rounded-lg overflow-hidden border border-[#F5F5DC] flex flex-col justify-start items-start gap-6">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-6">
            <div className="h-12 flex justify-start items-center gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="https://via.placeholder.com/48x48"
                alt="Testimonial 1"
              />
              <div className="w-72 flex flex-col justify-start items-start">
                <div className="w-full text-white text-lg font-medium font-[Roboto] leading-[27px]">
                  ANSHUL ARORA
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start gap-1">
              {/* Star Ratings */}
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-[#FFEB3B]" />
              ))}
            </div>
            <div className="w-full text-white text-lg font-normal font-[Roboto] leading-[27px]">
              I recently hired Aqua Agro Farmtech to design and maintain my
              garden, and I am very happy with their service. They were
              professional, knowledgeable, and listened carefully to my
              requests. My garden now looks absolutely stunning and has become
              the envy of my neighborhood!
            </div>
          </div>
        </div>

        {/* Second Testimonial */}
        <div className="w-full md:w-[416px] p-8 rounded-lg overflow-hidden border border-[#F5F5DC] flex flex-col justify-start items-start gap-6">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-6">
            <div className="w-full flex justify-start items-center gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="https://via.placeholder.com/48x48"
                alt="Testimonial 2"
              />
              <div className="flex-1 flex flex-col justify-start items-start">
                <div className="w-full text-white text-lg font-medium font-[Roboto] leading-[27px]">
                  VANSH DHEER
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start gap-1">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-[#FFEB3B]" />
              ))}
            </div>
            <div className="w-full text-white text-lg font-normal font-[Roboto] leading-[27px]">
              I highly recommend this gardening and farming service to anyone
              looking to improve the appearance of their outdoor space. They
              provided exceptional service and attention to detail, and their
              team was always friendly and respectful. I will definitely be
              using their services again in the future!
            </div>
          </div>
        </div>

        {/* Third Testimonial */}
        <div className="w-full md:w-[416px] p-8 rounded-lg overflow-hidden border border-[#F5F5DC] flex flex-col justify-start items-start gap-6">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-6">
            <div className="w-full flex justify-start items-center gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="https://via.placeholder.com/48x48"
                alt="Testimonial 3"
              />
              <div className="flex-1 flex flex-col justify-start items-start">
                <div className="w-full text-white text-lg font-medium font-[Roboto] leading-[27px]">
                  VANSH DHEER
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start gap-1">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-[#FFEB3B]" />
              ))}
            </div>
            <div className="w-full text-white text-lg font-normal font-[Roboto] leading-[27px]">
              I highly recommend this gardening and farming service to anyone
              looking to improve the appearance of their outdoor space. They
              provided exceptional service and attention to detail, and their
              team was always friendly and respectful. I will definitely be
              using their services again in the future!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
