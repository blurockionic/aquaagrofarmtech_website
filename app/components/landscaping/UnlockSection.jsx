import React from "react";
import img9 from "../../images/landscaping/landscaping_image_9.png";
import Image from "next/image";

const UnlockSection = () => {
  return (
    <div className="w-full h-full px-20 py-28 bg-white flex flex-col justify-start items-start gap-20">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-start items-center gap-20">
        {/* Left Column - Text Content */}
        <div className="flex-1 flex flex-col justify-start items-start gap-8">
          <div className="flex flex-col justify-start items-start gap-6 h-[228px]">
            <h1 className="text-black text-4xl font-bold leading-[48px]">
              Unlock the Full Potential of Your Outdoor Spaces
            </h1>
            <p className="text-black text-lg font-normal leading-7">
              Our innovative landscaping services ensure aesthetically pleasing
              and functional outdoor environments, promoting sustainability and
              efficient resource use. Experience the benefits of expert
              landscaping tailored to your space’s needs.
            </p>
          </div>

          {/* Features List */}
          <div className=" mt-20 md:mt-0 flex flex-col justify-start items-start gap-4 h-[156px] py-2">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 relative">
                <div className="w-4 h-4 bg-[#4CAF50] rounded-full"></div>
              </div>
              <p className="text-black text-lg font-normal leading-7">
                Maximized beauty and functionality through tailored landscape
                design.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 relative">
                <div className="w-4 h-4 bg-[#4CAF50] rounded-full"></div>
              </div>
              <p className="text-black text-lg font-normal leading-7">
                Protection against soil erosion and effective use of water
                resources.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 relative">
                <div className="w-4 h-4 bg-[#4CAF50] rounded-full"></div>
              </div>
              <p className="text-black text-lg font-normal leading-7">
                Sustainable landscaping practices that enhance environmental
                health.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <Image
          className="w-[640px] h-[400px] md:h-[640px] rounded-2xl"
          src={img9}
          alt="Landscaping Example"
        />
      </div>
    </div>
  );
};

export default UnlockSection;
