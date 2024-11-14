import React from "react";
import "../../App.css";

const ServicesSection = () => {
  return (
    <section className="px-10">
      <div className=" flex flex-row gap-2 justify-center items-center">
        <button className="px-1 py-2 rounded-md text-black bg-gray-300 hover:bg-[#B5651D] hover:text-white text-sm md:text-lg">
          Polytunnel Innovation
        </button>
        <button className="px-1 py-2 rounded-md text-black bg-gray-300 hover:bg-[#B5651D] hover:text-white text-sm md:text-lg">
          Irrigation Excellence
        </button>
        <button className="px-1 py-2 rounded-md text-black bg-gray-300 hover:bg-[#B5651D] hover:text-white text-sm md:text-lg">
          Landscape Mastery
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
