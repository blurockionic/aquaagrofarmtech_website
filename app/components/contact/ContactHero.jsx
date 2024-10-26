import React from 'react';
import Image from "next/image";
import Heroimg from '../../images/contact/Hero/Hero.jpg';

const ContactHero = () => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      <Image
        className="w-full h-full object-cover opacity-70"
        src={Heroimg}
        alt="Hero Image"
      />
      <div className="absolute md:ml-12 inset-0 flex justify-center md:justify-start items-center">
        <div className="text-black text-[56px] md:text-[48px] lg:text-[56px] font-bold font-['Merriweather Sans'] leading-tight md:leading-[58px] lg:leading-[67.20px] text-center px-4">
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
