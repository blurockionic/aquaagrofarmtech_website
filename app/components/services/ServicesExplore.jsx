import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Explore1 from '../../images/services/Explore/Explore1.png';
import Explore2 from '../../images/services/Explore/Explore2.png';
import Explore3 from '../../images/services/Explore/Explore3.png';

const ServicesExplore = () => {
  
  return (
    <>
      <div className="w-full min-h-screen px-16 py-28 bg-[#f5f5dc] flex flex-col justify-start items-start gap-20">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="text-black text-base font-semibold font-['Roboto']">Services</div>
          <div className="flex flex-col gap-6">
            <h2 className="text-black text-5xl font-bold font-['Merriweather Sans'] leading-tight">
              Explore Our Core Agricultural Services
            </h2>
            <p className="text-black text-lg font-normal font-['Roboto']">
              At Aqua Agro Farmtech, we specialize in innovative agricultural solutions. Our services are designed to enhance productivity and sustainability in farming.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="w-full flex flex-wrap gap-8 justify-center">
          {/* Polyhouse Solutions Card */}
          <div className="w-[411px] bg-white rounded-2xl border border-[#aaaaaa] flex flex-col">
            <Image 
              className="w-full h-[233px] rounded-t-2xl" 
              src={Explore1} 
              alt="Polyhouse Solutions" 
            />
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div className="flex flex-col gap-4">
                <h3 className="text-black text-[32px] font-bold font-['Merriweather Sans']">Polyhouse Solutions</h3>
                <p className="text-black text-base font-normal font-['Merriweather Sans']">
                  Revolutionizing agriculture with top-tier polyhouse structures.
                </p>
              </div>
              {/* Standardized Button */}
              <Link href={'#polyhouse'}>
                <div className="w-fit mt-4 py-1 px-2 rounded-lg border border-[#ffcc80] flex justify-start items-center gap-1 text-[#ff9800] hover:bg-[#ff9800] hover:text-white transition-all duration-300 cursor-pointer">
                  <span className="text-base font-normal font-['Roboto']">Details</span>
                  <span>{`>`}</span> {/* Right Arrow */}
                </div>
              </Link>
            </div>
          </div>

          {/* Irrigation Systems Card */}
          <div className="w-[411px] bg-white rounded-2xl border border-[#aaaaaa] flex flex-col">
            <Image 
              className="w-full h-[233px] rounded-t-2xl" 
              src={Explore2} 
              alt="Polyhouse Solutions" 
            />
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div className="flex flex-col gap-4">
                <h3 className="text-black text-[32px] font-bold font-['Merriweather Sans']">Irrigation Systems</h3>
                <p className="text-black text-base font-normal font-['Merriweather Sans']">
                  Maximizing growth with precision irrigation solutions.
                </p>
              </div>
              {/* Standardized Button */}
              <Link href={`#irrigation`}>
                <div className="w-fit mt-4 py-1 px-2 rounded-lg border border-[#ffcc80] flex justify-start items-center gap-1 text-[#ff9800] hover:bg-[#ff9800] hover:text-white transition-all duration-300 cursor-pointer">
                  <span className="text-base font-normal font-['Roboto']">Details</span>
                  <span>{`>`}</span> {/* Right Arrow */}
                </div>
              </Link>
            </div>
          </div>

          {/* Landscaping Card */}
          <div className="w-[411px] bg-white rounded-2xl border border-[#aaaaaa] flex flex-col">
            <Image 
              className="w-full h-[233px] rounded-t-2xl" 
              src={Explore3} 
              alt="Polyhouse Solutions" 
            />
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div className="flex flex-col gap-4">
                <h3 className="text-black text-[32px] font-bold font-['Merriweather Sans']">Landscaping</h3>
                <p className="text-black text-base font-normal font-['Merriweather Sans']">
                  Transforming spaces with expert landscaping craftsmanship.
                </p>
              </div>
              {/* Standardized Button */}
              <Link href={`/pages/landscaping`}>
                <div className="w-fit mt-4 py-1 px-2 rounded-lg border border-[#ffcc80] flex justify-start items-center gap-1 text-[#ff9800] hover:bg-[#ff9800] hover:text-white transition-all duration-300 cursor-pointer">
                  <span className="text-base font-normal font-['Roboto']">Details</span>
                  <span>{`>`}</span> {/* Right Arrow */}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesExplore;
