import React from 'react';
import Image from "next/image";
import img6 from '../../images/polyhouse/Hero/img7.png';

const PolyhouseUnlock = () => {
  return (
    <div className="mx-auto md:px-36 py-16 md:py-36 bg-[#f5f5dc] flex flex-col gap-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col justify-start items-start gap-8 md:w-1/2"> {/* Make this take half width on medium screens */}
          <h2 className="text-black text-3xl md:text-4xl font-bold leading-tight">
            Unlock the Potential of Your Crops with Our Innovative Polyhouse Solutions
          </h2>
          <p className="text-black text-lg leading-relaxed">
            Our polyhouse solutions provide an optimal environment for crops, enhancing growth and yield. Experience the benefits of controlled climate agriculture that adapts to your farming needs.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-[#4caf50] rounded-full" />
              <p className="text-black text-lg leading-[27px]">Maximized crop yield through climate control technology.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-[#4caf50] rounded-full" />
              <p className="text-black text-lg leading-[27px]">Protection against pests and harsh weather conditions.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-[#4caf50] rounded-full" />
              <p className="text-black text-lg leading-[27px]">Sustainable farming practices that promote environmental health.</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2"> {/* Make the image container take half width on medium screens */}
          <Image className="w-full h-auto rounded-2xl" src={img6} alt="Polyhouse example" layout="responsive" /> {/* Use layout="responsive" for optimal image scaling */}
        </div>
      </div>
    </div>
  );
};

export default PolyhouseUnlock;
