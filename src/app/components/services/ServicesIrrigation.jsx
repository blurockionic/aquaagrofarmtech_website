import React from 'react';
import Image from "next/image";
import Irrigation from '/public/images/services/Details/Irrigation.png';
import Logo from '/public/images/services/Hero/Logo.png';

const ServicesIrrigation = () => {
  return (
    <div id='irrigation'>
      <div className="w-full min-h-screen px-8 md:px-16 py-28 bg-[#f5f5dc] flex flex-col justify-start items-start gap-20">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-10">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-8 md:mr-6">
            <div className="flex flex-col md:mt-12 gap-4">
              <div className="text-black text-5xl font-bold font-['Merriweather Sans'] leading-tight">
                Efficient{" "}
                <span className="text-[#1c83f9]">Irrigation{" "}</span>
                for Sustainable Farming
              </div>
              <p className="text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                Our advanced irrigation systems are designed to optimize water usage while ensuring your crops receive the hydration they need. With innovative technology and expert installation, we help you achieve a thriving agricultural environment.
              </p>
            </div>
            
            {/* Key Features and Benefits */}
            <div className="flex flex-wrap justify-between gap-6">
              <div className="flex-1 flex flex-col">
                <div className="text-[#4caf50] text-xl font-bold font-['Roboto'] leading-7">Key Features</div>
                <p className="text-black text-base font-normal font-['Merriweather Sans'] leading-normal">
                  Efficient water management systems for optimal plant growth.
                </p>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="text-[#4caf50] text-xl font-bold font-['Roboto'] leading-7">Benefits</div>
                <p className="text-black text-base font-normal font-['Merriweather Sans'] leading-normal">
                  Conserves water and improves crop productivity.
                </p>
              </div>
            </div>

            {/* Contact Us Button */}
            <div className="flex justify-start items-start">
              <button className="px-6 py-3 bg-[#b5651d] rounded-lg border border-[#4caf50] text-white text-base font-bold font-['Merriweather Sans'] leading-normal transition-all duration-300 hover:bg-[#4caf50] hover:text-white">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column (Image with Logo) */}
          <div className="flex-1 flex justify-center relative">
            <div className='w-full'>
              <Image className="w-full rounded-2xl" src={Irrigation} alt="Polyhouse" />
            </div>
            {/* Small Logo Image */}
            <div className="absolute top-4 right-4">
              <Image className="w-[42px] h-[42px]" src={Logo} alt="Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesIrrigation;
