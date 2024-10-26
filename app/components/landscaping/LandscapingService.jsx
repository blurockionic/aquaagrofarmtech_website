import Image from "next/image";
import React from "react";
import img1 from "../../images/landscaping/landscaping_image_1.png";
import img2 from "../../images/landscaping/landscaping_image_2.png";
import img3 from "../../images/landscaping/landscaping_image_3.png";
import img4 from "../../images/landscaping/landscaping_image_4.png";
import img5 from "../../images/landscaping/landscaping_image_5.png";
import img6 from "../../images/landscaping/landscaping_image_6.png";
import img7 from "../../images/landscaping/landscaping_image_7.png";

const LandscapingService = () => {
  return (
    <div className="w-full h-full p-8 bg-white flex flex-col justify-center items-center gap-8">
      {/* Title and Description Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
        <div className="flex flex-col justify-start items-start gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text-green-500 text-4xl md:text-5xl font-bold leading-tight">
              Landscaping Services
            </h1>
            <h1 className="text-black text-4xl md:text-5xl font-bold leading-tight">
              that Enhance Your Outdoor Spaces
            </h1>
            <p className="text-black text-base md:text-lg font-normal leading-7">
              Experience the transformation of your landscape with our expert
              landscaping solutions.
            </p>
          </div>
        </div>
        {/* Right-Side Image */}
        <div className="flex-shrink-0">
          <Image
            src={img1}
            alt="Landscape Image"
            className="w-[489px] h-[206px] rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Three-Image Row */}
      <div className="flex flex-wrap justify-center items-center gap-8 w-full">
        <Image
          src={img2}
          alt="Image 1"
          className="w-[240px] h-[540px] rounded-2xl object-cover hidden md:block"
        />
        <Image
          src={img3}
          alt="Image 2"
          className="w-[802px] h-[540px] rounded-2xl object-cover"
        />
        <Image
          src={img4}
          alt="Image 3"
          className="w-[240px] h-[540px] rounded-2xl object-cover hidden md:block"
        />
      </div>

      {/* Bottom Image Grid */}
      <div className="flex flex-wrap justify-center items-center gap-8 w-full">
        <Image
          src={img5}
          alt="Image 4"
          className="w-[575px] h-[206px] rounded-2xl object-cover "
        />
        <Image
          src={img6}
          alt="Image 5"
          className="w-[358px] h-[206px] rounded-2xl object-cover hidden md:block"
        />
        <Image
          src={img7}
          alt="Image 6"
          className="w-[379px] h-[206px] rounded-2xl object-cover hidden md:block"
        />
      </div>
    </div>
  );
};

export default LandscapingService;
