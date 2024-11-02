import React from "react";
import frame from "../../images/testimonials/bg_image.png";
import Image from "next/image";

const Frame = () => {
  return (
    <>
      <div className="relative w-full h-full flex justify-center items-center">
        <Image
          src={frame}
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
          <h1 className="md:text-6xl text-2xl font-bold">
            Share your experience
          </h1>
          <p className="text-lg mt-2">
            We are excited to hear your valuable feedback.
          </p>
          <button className="mt-4 px-4 py-2 bg-[#B5651D] text-white rounded-lg hover:bg-[#B5651D] hover:border hover:border-white">
            Write Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Frame;
