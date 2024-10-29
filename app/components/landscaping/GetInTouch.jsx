import { Hotel, Mail, Phone } from "lucide-react";
import React from "react";

const GetInTouch = () => {
  return (
    <div className="w-full h-full px-4 md:px-16 py-12 bg-[#F5F5DC] flex flex-col justify-start items-center gap-10">
      <div className="h-28 flex flex-col justify-start items-center gap-4">
        <div></div>
        <div className="flex flex-col justify-start items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
            Get in Touch
          </h1>
          <p className="text-base md:text-lg text-black text-center">
            We welcome your inquiries; feel free to write to us.
          </p>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col justify-start items-start gap-16">
        <div className="flex flex-wrap justify-between gap-6 w-full">
          <div className="flex-1 min-w-[150px] flex flex-col justify-start items-center gap-6">
            <div className="w-12 h-12 relative">
              <Mail className="w-10 h-8 text-[#FF9800] absolute top-2 left-2"></Mail>
            </div>
            <div className="flex flex-col justify-start items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FF9800] text-center">
                Email
              </h2>
              <p className="text-sm md:text-base font-bold text-black text-center">
                aquaagrofarmtech@gmail.com
              </p>
            </div>
          </div>
          <div className="flex-1 min-w-[150px] flex flex-col justify-start items-center gap-6">
            <div className="w-12 h-12 relative">
              <Phone className="w-9 h-9 text-[#FF9800] absolute top-1 left-1"></Phone>
            </div>
            <div className="flex flex-col justify-start items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FF9800] text-center">
                Phone
              </h2>
              <p className="text-sm md:text-base font-bold text-black text-center">
                +919878106932
              </p>
            </div>
          </div>
          <div className="flex-1 min-w-[150px] flex flex-col justify-start items-center gap-6">
            <div className="w-12 h-12 relative">
              <Hotel className="w-8 h-10 text-[#FF9800] absolute top-2 left-2"></Hotel>
            </div>
            <div className="flex flex-col justify-start items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FF9800] text-center">
                Office
              </h2>
              <p className="text-sm md:text-base font-bold text-black text-center">
                Ludhiana, Punjab, 141006
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
