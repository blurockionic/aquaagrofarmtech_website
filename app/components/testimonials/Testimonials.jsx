import React from "react";

const Testimonials = () => {
  return (
    <div className="w-full h-full px-16 pt-28 pb-28 bg-white flex flex-col items-start gap-20 md:px-16 md:pt-20 md:pb-20 sm:px-4 sm:pt-12 sm:pb-12">
      <div className="flex flex-col items-start gap-8 h-40">
        <div className="flex flex-col items-start gap-4 w-full h-40">
          <div className="flex items-center">
            <div className="text-black text-lg font-semibold leading-6">
              Testimonials
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 w-full h-[118px]">
            <div className="text-black md:text-6xl font-bold leading-tight break-words text-3xl font-['Merriweather Sans']">
              Our Happy Customers
            </div>
            <div className="text-black md:text-xl font-normal leading-7 break-words sm:text-base sm:leading-6 font-['Merriweather Sans']">
              The reviews of our satisfied customers reflect the quality of our
              work for you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
