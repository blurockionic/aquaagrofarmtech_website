import React from 'react';
import img5 from '../../images/services/page_img/Hero.png'; // Import the Image component from Next.js

const ServicesHero = () => {
  return (
    <div className="w-full h-[100vh] bg-white flex flex-col justify-center items-center gap-20">
  <div className="relative w-full h-full">
    <img
      className="w-full h-full absolute top-0 left-0 opacity-60"
      src={img5}
      alt="Background"
    />

    <div className="absolute inset-0 flex flex-col justify-center items-center gap-8 px-4 text-center">
      <h1 className="text-[40px] sm:text-[56px] font-bold text-black font-['Merriweather Sans'] leading-tight max-w-3xl">
        Transforming Agriculture, One Innovation at a Time
      </h1>
      <p className="text-lg sm:text-xl text-black font-['Roboto'] leading-[30px] max-w-2xl">
        Delivering innovative agricultural solutions with unmatched expertise in <span className="font-bold">Poly Houses, Irrigation Systems,</span> and <span className="font-bold">Landscaping.</span>
      </p>
    </div>

    <div className="absolute right-8 bottom-8">
      <img
        className="w-[80px] sm:w-[123px] h-[80px] sm:h-[123px]"
        src="https://via.placeholder.com/123x123"
        alt="Company Logo"
      />
    </div>
  </div>
</div>
  );
};

export default ServicesHero;
