import React from "react";

const InnovativeSection = () => {
  return (
    <div className="w-full h-full px-20 py-28 bg-[#F5F5DC] flex flex-col justify-start items-start gap-20">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-start items-center gap-20 w-full">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-start items-start gap-8">
          {/* Title and Description */}
          <div className="flex flex-col gap-6">
            <h1 className="text-black text-4xl md:text-5xl font-bold leading-tight">
              Innovative Landscaping Solutions for Sustainable Environments
            </h1>
            <p className="text-black text-base md:text-lg font-normal leading-7">
              At Aqua Agro, we are committed to enhancing outdoor spaces through
              innovative landscaping services. Our mission is to deliver
              sustainable solutions that elevate the aesthetic and functionality
              of your landscape.
            </p>
          </div>

          {/* Vision and Mission Section */}
          <div className="flex flex-col md:flex-row justify-start items-start gap-8">
            {/* Vision */}
            <div className="flex-1 flex flex-col justify-start items-start gap-4">
              <h2 className="text-black text-lg font-bold leading-7">
                Our Vision
              </h2>
              <p className="text-black text-sm md:text-base font-normal leading-6">
                To be a leader in innovative landscape design and sustainable
                outdoor practices.
              </p>
            </div>

            {/* Mission */}
            <div className="flex-1 flex flex-col justify-start items-start gap-4">
              <h2 className="text-black text-lg font-bold leading-7">
                Our Mission
              </h2>
              <p className="text-black text-sm md:text-base font-normal leading-6">
                Empowering property owners with beautifully crafted landscapes
                to promote environmental health.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="https://via.placeholder.com/640x640"
            alt="Landscaping Image"
            className="w-[640px] h-[640px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default InnovativeSection;
