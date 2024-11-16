import React from 'react';
import Image from "next/image";
import img6 from '/public/images/polyhouse/Hero/img6.png';

const PolyhouseSolutions = () => {
  return (
    <div className="w-full h-auto px-4 py-16 sm:px-8 md:px-16 bg-[#f5f5dc] flex flex-col justify-start items-center gap-20">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-12 w-full">
        {/* Wrapper for both text and image to take equal space */}
        <div className="flex flex-col sm:flex-row-reverse flex-1 gap-4">
          {/* Image Section */}
          <Image className="w-full h-auto rounded-2xl mb-6 sm:mb-0 sm:w-1/2" src={img6} alt="Polyhouse Solutions" />

          {/* Text Section */}
          <div className="flex-1 flex flex-col mt-6 gap-8">
            <div className="flex flex-col justify-start items-start gap-4">
              <h1 className="text-black text-3xl sm:text-4xl font-bold font-['Merriweather Sans'] leading-tight">
                Innovative Polyhouse Solutions for Sustainable Growth
              </h1>
              <p className="text-black text-lg font-normal font-['Roboto'] leading-relaxed">
                At Polyhouse, we are dedicated to revolutionizing the agricultural landscape. Our mission is to provide cutting-edge polyhouse solutions that enhance productivity and sustainability.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-start gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-black text-xl font-bold font-['Roboto'] leading-7">Our Vision</h2>
                <p className="text-black text-base font-normal font-['Merriweather Sans'] leading-normal">
                  To lead the industry in innovative farming techniques and sustainable agricultural practices.
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-black text-xl font-bold font-['Roboto'] leading-7">Our Mission</h2>
                <p className="text-black text-base font-normal font-['Merriweather Sans'] leading-normal">
                  Empowering farmers with advanced technology for better yields and environmental stewardship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolyhouseSolutions;
