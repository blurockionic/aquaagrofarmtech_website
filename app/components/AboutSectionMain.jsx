import Image from "next/image";
import React from "react";
import about_image from "../images/about_image.png";

const AboutSectionMain = () => {
  return (
    <div className="w-full h-full px-16 py-20 bg-[#F5F5DC] flex flex-col justify-start items-start gap-20">
      <div className="w-full flex justify-start items-center gap-20">
        <div className="flex-1 flex flex-col justify-start items-start gap-8">
          <div className="w-full h-[239px] flex flex-col justify-start items-start gap-4">
            <div className="inline-flex justify-start items-center"></div>
            <div className="w-full h-[199px] flex flex-col justify-start items-start gap-6">
              <div className="w-full text-black text-[56px] font-merriweather-sans font-bold leading-[67.2px] break-words">
                About Us
              </div>
              <div className="w-full text-black text-[18px] font-roboto font-normal leading-[27px] break-words">
                With 8 years of experience in farming and landscaping, AQUA AGRO
                FARMTECH is Punjab’s fastest-growing farm tech solution
                provider. Founded in 2021, we pride ourselves on delivering
                superior quality and service across India.
              </div>
            </div>
          </div>
          <div className="rounded-lg flex justify-start items-center gap-6">
            <div className="px-6 py-3 bg-[#B5651D] rounded-lg border border-[#B5651D] flex justify-center items-center gap-2">
              <div className="text-white text-[16px] font-roboto font-normal leading-[24px] break-words">
                Learn More
              </div>
            </div>
          </div>
        </div>
        <Image
          className="w-[600px] h-[600px] rounded-lg"
          src={about_image}
          alt="About Us Image"
        />
      </div>
    </div>
  );
};

export default AboutSectionMain;
