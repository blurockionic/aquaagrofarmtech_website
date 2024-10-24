import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="h-auto px-4 sm:px-16 py-28 bg-white flex flex-col justify-start items-center gap-20">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-black text-5xl font-bold font-['Merriweather Sans'] leading-tight">
          Contact us
        </h2>
        <p className="text-black text-lg font-normal font-['Roboto'] leading-[27px]">
          We welcome your inquiries; feel free to write to us.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-col w-full sm:flex-row justify-center items-center gap-12 w-full">
        {/* Email Info */}
        <div className="flex flex-col flex-1 items-center text-center">
          <Mail className="text-[#ff9800] w-16 h-16 mb-2" /> {/* Increased Icon Size */}
          <div className="text-[#ff9800] text-[32px] font-bold font-['Merriweather Sans']">
            Email
          </div>
          <p className="text-black text-base font-bold font-['Roboto']">
            aquaagrofarmtech@gmail.com
          </p>
        </div>

        {/* Phone Info */}
        <div className="flex flex-col flex-1 items-center text-center">
          <Phone className="text-[#ff9800] w-16 h-16 mb-2" /> {/* Increased Icon Size */}
          <div className="text-[#ff9800] text-[32px] font-bold font-['Merriweather Sans']">
            Phone
          </div>
          <p className="text-black text-base font-bold font-['Roboto']">
            +919878106932
          </p>
        </div>

        {/* Office Info */}
        <div className="flex flex-col flex-1 items-center text-center">
          <MapPin className="text-[#ff9800] w-16 h-16 mb-2" /> {/* Increased Icon Size */}
          <div className="text-[#ff9800] text-[32px] font-bold font-['Merriweather Sans']">
            Office
          </div>
          <p className="text-black text-base font-bold font-['Roboto']">
            Ludhiana, Punjab, 141006
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
