import Image from "next/image";
import React from "react";
import about_image from "../../images/about_image.png";

const AboutSectionMain = () => {
  return (
    <div className="w-full h-full px-6 md:px-16 py-10 md:py-20 bg-[#F5F5DC] flex flex-col justify-start items-start gap-10 md:gap-20">
      <div className="w-full flex flex-col md:flex-row justify-start items-center gap-10 md:gap-20">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6 md:gap-8">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <h1 className="text-black text-[32px] md:text-[56px] font-merriweather-sans font-bold leading-tight md:leading-[67.2px] break-words">
                About Us
              </h1>
              <p className="text-black text-[16px] md:text-[18px] font-roboto font-normal leading-[24px] md:leading-[27px] break-words">
                With 8 years of experience in farming and landscaping, AQUA AGRO
                FARMTECH is Punjab’s fastest-growing farm tech solution
                provider. Founded in 2021, we pride ourselves on delivering
                superior quality and service across India.
              </p>
            </div>
          </div>
          {/* Learn More Button */}
          <div className="flex justify-start items-center gap-4">
            <button className="px-4 py-2 md:px-6 md:py-3 bg-[#B5651D] rounded-lg border border-[#B5651D] text-white text-[14px] md:text-[16px] font-roboto">
              Learn More
            </button>
          </div>
        </div>
        {/* Image */}
        <Image
          className="w-full md:w-[600px] h-auto md:h-[600px] rounded-lg"
          src={about_image}
          alt="About Us Image"
        />
      </div>
    </div>
  );
};

export default AboutSectionMain;
