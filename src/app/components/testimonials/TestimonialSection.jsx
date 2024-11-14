import React from "react";
import Image from "next/image";
import img3 from "/public/images/testimonials/Vansh.png";
import icon1 from "/public/images/testimonials/icon1.png";
import icon2 from "/public/images/testimonials/icon2.png";

const TestimonialsSection = () => {
  return (
    <div className="w-full h-full px-16 pt-28 pb-28 bg-[#F5F5DC] flex flex-col items-start gap-20 md:px-16 md:pt-24 md:pb-24 sm:px-4 sm:pt-12 sm:pb-12">
      <div className="w-full flex justify-start items-center gap-20 flex-col lg:flex-row">
        <div className="flex-1 flex flex-col gap-8 h-[640px]">
          <div className="flex flex-col gap-8 h-[416.25px] w-full">
            <div className="flex flex-col gap-4 h-[234px] w-full">
              <div className="flex items-center">
                <div className="text-black text-lg font-semibold leading-6">
                  Testimonials
                </div>
              </div>
              <div className="flex flex-col gap-6 h-[194px] w-full">
                <div className="text-black text-start md:text-6xl font-bold leading-tight break-words sm:text-3xl font-['Merriweather Sans']">
                  Customer reviews are important to us.
                </div>
                <div className="text-black text-start md:text-xl font-medium leading-7 break-words sm:text-base sm:leading-6">
                  Our customers&apos;s
                  <span className="text-[#2E7D32]">satisfaction</span> is our
                  priority. Their reviews inspire us and help us improve.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 h-[150.25px] w-full">
              <div className="flex gap-6 py-2 items-start w-full">
                <div className="flex-1 flex flex-col gap-4">
                  <div className="relative w-7 h-6">
                    <Image
                      src={icon1}
                      alt="Icon 1"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="text-black text-start text-xl font-bold leading-7">
                    Customer Experience
                  </div>
                  <div className="text-black  text-start text-lg font-normal leading-6">
                    Our customers have appreciated the quality of our services.
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="relative w-7 h-6">
                    <Image
                      src={icon2}
                      alt="Icon 1"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="text-black text-start text-xl font-bold leading-7">
                    Positive Feedbacks
                  </div>
                  <div className="text-black text-start text-lg font-normal leading-6">
                    Customers say our services are unique and effective.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start">
            <button className="px-6 py-3 bg-[#B5651D] border border-[#B5651D] rounded-md text-white text-base font-normal">
              Learn More
            </button>
          </div>
        </div>
        <Image
          className="w-[640px] h-[640px] rounded-lg"
          src={img3}
          alt="Customer testimonials"
        />
      </div>
    </div>
  );
};

export default TestimonialsSection;
