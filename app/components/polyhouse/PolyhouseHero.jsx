import React from 'react';
import Image from "next/image";
import img1 from '/public/images/polyhouse/Hero/img1.png';
import img2 from '/public/images/polyhouse/Hero/img2.png';
import img3 from '/public/images/polyhouse/Hero/img3.png';
import img4 from '/public/images/polyhouse/Hero/img4.png';
import img5 from '/public/images/polyhouse/Hero/img5.png';
import img6 from '/public/images/polyhouse/Hero/img6.png';
import img7 from '/public/images/polyhouse/Hero/img7.png';

const PolyhouseSection = () => {
  return (
    <div className="w-full min-h-screen p-4 sm:p-8 bg-white flex flex-col gap-8">
      {/* Header Section */}
      <div className="grid grid-cols-1 sm:grid-cols-10 gap-8">
        {/* Image Section for Mobile */}
        <div className="sm:col-span-4 mb-6 w-[90vw] sm:w-[auto] sm:mb-0 relative order-1 sm:order-2">
          <Image
            className="w-full sm:h-full rounded-[32px] object-fill"
            src={img1}
            alt="Polyhouse Solutions"
          />
        </div>
        
        {/* Text Section */}
        <div className="col-span-6 flex flex-col gap-6 order-2 sm:order-1">
          <h1 className="text-black text-4xl sm:text-5xl font-bold font-['Merriweather Sans'] leading-tight">
            Innovative <span className="text-[#ff9800]">Polyhouse<br /></span> Solutions Tailored for You
          </h1>
          <p className="text-black text-base sm:text-lg font-normal font-['Roboto'] leading-relaxed">
            Experience the future of farming with our state-of-the-art polyhouse technology designed for optimal growth.
          </p>
        </div>
      </div>

      {/* Main Image Grid for Desktop Only */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-10 gap-8">
        <Image
          className="col-span-2 w-full h-[540px] rounded-[40px] object-cover"
          src={img2}
          alt="Polyhouse Solution Image 1"
        />
        <Image
          className="col-span-5 w-full h-[540px] rounded-[32px] object-cover"
          src={img3}
          alt="Polyhouse Solution Image 2"
        />
        <Image
          className="col-span-3 w-full h-[540px] rounded-[32px] object-cover"
          src={img4}
          alt="Polyhouse Solution Image 3"
        />
      </div>

      {/* Mobile Image Grid */}
      <div className="grid grid-cols-2 gap-4 sm:hidden">
        <Image
          className="w-full h-[270px] rounded-[40px] object-cover"
          src={img2}
          alt="Polyhouse Solution Image 1"
        />
        <Image
          className="w-full h-[270px] rounded-[40px] object-cover"
          src={img4}
          alt="Polyhouse Solution Image 2"
        />
        <Image
          className="col-span-2 w-full h-[540px] rounded-[32px] object-cover"
          src={img3}
          alt="Polyhouse Solution Image 3"
        />
        <Image
          className="col-span-1 w-full h-[270px] rounded-[32px] object-cover"
          src={img6}
          alt="Additional Polyhouse Image 2"
        />
        <Image
          className="col-span-1 w-full h-[270px] rounded-[32px] object-cover"
          src={img7}
          alt="Additional Polyhouse Image 3"
        />
      </div>

      {/* Footer Image Grid (Desktop Only) */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-10 gap-8">
        <div className="relative col-span-5">
          <Image
            className="w-full h-[270px] rounded-[32px] object-cover"
            src={img5}
            alt="Additional Polyhouse Image 1"
          />
        </div>
        <div className="relative col-span-3">
          <Image
            className="w-full h-[270px] rounded-[32px] object-cover"
            src={img6}
            alt="Additional Polyhouse Image 2"
          />
        </div>
        <div className="relative col-span-2">
          <Image
            className="w-full h-[270px] rounded-tl-2xl rounded-tr-2xl object-cover"
            src={img7}
            alt="Additional Polyhouse Image 3"
          />
        </div>
      </div>
    </div>
  );
};

export default PolyhouseSection;
