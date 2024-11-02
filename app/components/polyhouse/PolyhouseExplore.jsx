import React from 'react';

const PolyhouseExplore = () => {
  return (
    <div className="px-4 md:px-36 py-16 md:py-36 bg-white flex flex-col gap-12">
      <div className="flex flex-col gap-8 md:gap-12">
        <h2 className="text-black text-3xl md:text-5xl font-bold leading-tight">
          Innovation
        </h2>
        <h1 className="text-black text-4xl md:text-5xl font-bold leading-tight">
          Explore Our Comprehensive Polyhouse Services
        </h1>
        <p className="text-black text-base md:text-lg leading-relaxed">
          At Polyhouse, we specialize in creating customized polyhouse solutions tailored to your agricultural needs. Our services encompass construction, maintenance, and expert consultancy, ensuring your crops thrive in a controlled environment. Experience the benefits of advanced technology and sustainable practices with our dedicated team.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <h3 className="text-black text-xl md:text-2xl font-bold leading-tight">
            Expert Polyhouse Construction and Design Services
          </h3>
          <p className="text-black text-base md:text-lg leading-normal">
            We build durable and efficient polyhouses to maximize your yield.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-black text-xl md:text-2xl font-bold leading-tight">
            Reliable Maintenance for Optimal Performance
          </h3>
          <p className="text-black text-base md:text-lg leading-normal">
            Our maintenance services ensure your polyhouse operates at peak efficiency.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-black text-xl md:text-2xl font-bold leading-tight">
            Professional Consultancy for Your Agricultural Success
          </h3>
          <p className="text-black text-base md:text-lg leading-normal">
            Get expert advice tailored to your specific needs.
          </p>
        </div>
      </div>
      <div className="flex justify-center md:justify-start">
        <button className="px-6 py-3 bg-[#b5651d] text-white rounded-lg border border-[#4caf50] transition duration-200 hover:bg-[#a65e1a] focus:outline-none focus:ring-2 focus:ring-[#4caf50]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default PolyhouseExplore;
