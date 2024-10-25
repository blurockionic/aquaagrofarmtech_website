import Image from "next/image";
import React from "react";
import img1 from "../../images/landscaping/image_1.svg";
import img2 from "../../images/landscaping/image_2.svg";
import img3 from "../../images/landscaping/image_3.svg";

const ExploreSection = () => {
  return (
    <div className="w-full h-full px-20 py-28 bg-white flex flex-col justify-start items-start gap-20">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-start items-start gap-20">
        {/* Left Column - Title and Description */}
        <div className="w-156 flex flex-col justify-start items-start gap-4">
          <div className="flex items-center">
            <span className="text-black text-base font-semibold leading-6">
              Innovation
            </span>
          </div>
          <h2 className="text-black text-5xl font-bold leading-tight">
            Explore Our <br />
            Comprehensive <br />
            <span className="text-[#2E7D32]">Landscaping</span> Services
          </h2>
        </div>

        {/* Right Column - Description */}
        <div className="flex-1 text-black text-lg font-normal leading-7">
          At Aqua Agro, we specialize in delivering customized landscaping
          solutions tailored to meet your specific needs. Our services include
          design, installation, regular maintenance, and expert consultation,
          ensuring your outdoor spaces are both beautiful and sustainable.
          Harness the power of modern landscaping techniques and sustainable
          practices with our dedicated team.
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col gap-16">
        <div className="flex flex-col md:flex-row justify-start items-start gap-12">
          {/* Service 1 */}
          <div className="flex-1 flex flex-col justify-start items-start gap-6">
            <Image className="w-12 h-11 " src={img1} alt="Landscape Image"/>
            <h3 className="text-black text-2xl font-bold leading-10">
              Expert Landscape Design and Installation
            </h3>
            <p className="text-black text-base font-normal leading-6">
              We design and install stunning landscapes that enhance the natural
              beauty of your outdoor spaces.
            </p>
          </div>

          {/* Service 2 */}
          <div className="flex-1 flex flex-col justify-start items-start gap-6">
            <div className="w-12 h-12 relative">
            <Image className="w-12 h-11 " src={img2} alt="Landscape Image"/>
            </div>
            <h3 className="text-black text-2xl font-bold leading-10">
              Reliable Maintenance for Long-lasting Beauty
            </h3>
            <p className="text-black text-base font-normal leading-6">
              Our maintenance services ensure your landscape remains vibrant and
              functional all year long.
            </p>
          </div>

          {/* Service 3 */}
          <div className="flex-1 flex flex-col justify-start items-start gap-6">
          <Image className="w-12 h-11 " src={img3} alt="Landscape Image"/>
            <h3 className="text-black text-2xl font-bold leading-10">
              Expert Consultation for Your Landscaping Success
            </h3>
            <p className="text-black text-base font-normal leading-6">
              Receive expert guidance tailored to your unique landscaping needs.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="rounded-lg flex justify-start items-start gap-4">
        <div className="px-6 py-3 bg-[#B5651D] rounded-md border border-[#4CAF50] flex justify-center items-center">
          <span className="text-white text-base font-bold leading-6">
            Contact Us
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
