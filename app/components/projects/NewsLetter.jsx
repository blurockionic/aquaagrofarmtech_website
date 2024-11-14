import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full h-full bg-[#B5651D] px-16 py-28 flex flex-col justify-start items-start gap-20">
      <div className="w-full flex justify-between items-center gap-8 flex-col lg:flex-row">
        <div className="flex flex-col justify-start items-start gap-6">
          <h1 className="text-white text-4xl font-bold leading-tight">
            Discover Our Featured Projects
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Find the perfect project for your needs
          </p>
        </div>
        <div className="w-full lg:w-[513px] flex flex-col justify-start items-start gap-4">
          <div className="w-full flex justify-between items-center gap-4">
            <div className="flex-1 h-12 px-4 border border-[#FFCC80] rounded-lg flex items-center">
              <input
                className="w-full text-[#FFCC80] bg-transparent text-base focus:outline-none"
                placeholder="Your Email Here"
              />
            </div>
            <button className="px-6 py-3 bg-[#B5651D] text-white font-bold border border-white rounded-lg">
              Submit
            </button>
          </div>
          <p className="text-[#FFCC80] text-xs">
            By clicking Submit Now, you agree to our Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
