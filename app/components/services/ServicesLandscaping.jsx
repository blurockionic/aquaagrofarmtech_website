import React from 'react';
import Image from "next/image";
import Landscaping from '../../images/services/Details/Landscaping.png';
import Logo from '../../images/services/Hero/Logo.png';

const ServicesLandscaping = () => {
  return (
    <div id='landscaping'>
      <div className="w-full min-h-screen px-8 md:px-16 py-28 bg-white flex flex-col justify-start items-start gap-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-8 md:mr-6">
            <div className="flex flex-col md:mt-12 gap-4">
              <div className="text-black text-5xl font-bold font-['Merriweather Sans'] leading-tight">
                Transform Your Outdoors with Expert{" "}
                <span className="text-[#027a48]">Landscaping{" "}</span>
              </div>
              <p className="text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                At Aqua Agro Farmtech, we specialize in creating stunning landscapes that enhance the beauty of your property. Our team combines creativity and expertise to deliver tailored solutions that meet your needs.
              </p>
            </div>
            
            {/* Key Features and Benefits */}
            <div className="flex flex-wrap justify-between gap-6">
              <div className="flex-1 flex flex-col">
                <div className="text-[#4caf50] text-xl font-bold font-['Roboto'] leading-7">Key Features</div>
                <p className="text-black text-base font-normal font-['Merriweather Sans'] leading-normal">
                  We focus on sustainable practices to create beautiful, functional outdoor environments.
                </p>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="text-[#4caf50] text-xl font-bold font-['Roboto'] leading-7">Benefits</div>
                <p className="text-black text-base font-normal font-['Merriweather Sans'] leading-normal">
                  Our experienced team is dedicated to exceeding your expectations with every project.
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
              <Image className="w-full rounded-2xl" src={Landscaping} alt="Polyhouse" />
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

export default ServicesLandscaping;
