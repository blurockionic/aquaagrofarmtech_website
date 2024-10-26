import React from 'react';
import Image from "next/image";
import img1 from '../../images/polyhouse/Hero/img1.png';
import img2 from '../../images/polyhouse/Hero/img2.png';
import img3 from '../../images/polyhouse/Hero/img3.png';
import img4 from '../../images/polyhouse/Hero/img4.png';
import img5 from '../../images/polyhouse/Hero/img5.png';
import img6 from '../../images/polyhouse/Hero/img6.png';
import img7 from '../../images/polyhouse/Hero/img7.png';


const PolyhouseExplore = () => {
  return (
    <div className="px-36 px-4 py-16 bg-white flex flex-col gap-12">
    <div className="flex flex-col gap-8 md:gap-12">
        <h2 className="text-black text-3xl md:text-5xl font-bold leading-tight">
            Innovation
        </h2>
        <h1 className="text-black text-5xl font-bold leading-[57.60px]">
            Explore Our Comprehensive Polyhouse Services
        </h1>
        <p className="text-black text-base md:text-lg leading-relaxed">
            At Polyhouse, we specialize in creating customized polyhouse solutions tailored to your agricultural needs. Our services encompass construction, maintenance, and expert consultancy, ensuring your crops thrive in a controlled environment. Experience the benefits of advanced technology and sustainable practices with our dedicated team.
        </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
            <h3 className="text-black text-2xl md:text-[32px] font-bold leading-tight">
                Expert Polyhouse Construction and Design Services
            </h3>
            <p className="text-black text-base md:text-lg leading-normal">
                We build durable and efficient polyhouses to maximize your yield.
            </p>
        </div>
        <div className="flex flex-col">
            <h3 className="text-black text-2xl md:text-[32px] font-bold leading-tight">
                Reliable Maintenance for Optimal Performance
            </h3>
            <p className="text-black text-base md:text-lg leading-normal">
                Our maintenance services ensure your polyhouse operates at peak efficiency.
            </p>
        </div>
        <div className="flex flex-col">
            <h3 className="text-black text-2xl md:text-[32px] font-bold leading-tight">
                Professional Consultancy for Your Agricultural Success
            </h3>
            <p className="text-black text-base md:text-lg leading-normal">
                Get expert advice tailored to your specific needs.
            </p>
        </div>
    </div>
    <div className="flex justify-start">
        <button className="px-6 py-3 bg-[#b5651d] text-white rounded-lg border border-[#4caf50] transition duration-200 hover:bg-[#a65e1a] focus:outline-none focus:ring-2 focus:ring-[#4caf50]">
            Contact Us
        </button>
    </div>
</div>

  );
};

export default PolyhouseExplore;
