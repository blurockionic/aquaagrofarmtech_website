import React from "react";

const CoreAgriSerives = () => {
  return (
    <div className="w-full h-full px-16 py-28 bg-white flex flex-col justify-start items-start gap-20">
      <div className="h-44 flex flex-col justify-start items-start gap-4">
        <div className="flex justify-start items-center">
          <div className="text-black text-base font-semibold leading-6">
            Services
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="text-black text-4xl font-bold leading-tight break-words">
            Explore Our Core Agricultural Services
          </div>
          <div className="text-black text-lg font-normal leading-7 break-words">
            At Aqua Agro Farmtech, we specialize in innovative agricultural
            solutions. Our services are designed to enhance productivity and
            sustainability in farming.
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-8">
        <div className="w-full flex flex-wrap justify-start items-start gap-8">
          <div className="w-full md:w-[411px] bg-white border border-gray-400 rounded-lg flex flex-col justify-start items-start">
            <img
              className="w-full h-[233px] rounded-t-lg"
              src="https://via.placeholder.com/411x233"
              alt="Service Image"
            />
            <div className="w-full h-[239px] p-8 flex flex-col justify-center items-start gap-6">
              <div className="w-full h-[106px] flex flex-col justify-start items-start gap-4">
                <div className="text-black text-2xl font-bold leading-10">
                  Polyhouse Solutions
                </div>
                <div className="text-black text-base font-normal leading-6 break-words">
                  Revolutionizing agriculture with top-tier polyhouse
                  structures.
                </div>
              </div>
              <div className="h-11 flex justify-start items-center gap-6 border border-yellow-200 rounded-md">
                <div className="px-3 py-1 flex justify-center items-center gap-2 rounded-md">
                  <div className="text-yellow-600 text-base">Details</div>
                  <div className="w-6 h-6">
                    <div className="w-[7px] h-[11px] bg-yellow-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat similar structure for other items */}
          <div className="w-full md:w-[411px] bg-white border border-gray-400 rounded-lg flex flex-col justify-start items-start">
            <img
              className="w-full h-[233px] rounded-t-lg"
              src="https://via.placeholder.com/411x233"
              alt="Service Image"
            />
            <div className="w-full h-[239px] p-8 flex flex-col justify-center items-start gap-6">
              <div className="w-full h-[106px] flex flex-col justify-start items-start gap-4">
                <div className="text-black text-2xl font-bold leading-10">
                  Irrigation Systems
                </div>
                <div className="text-black text-base font-normal leading-6 break-words">
                  Maximizing growth with precision irrigation solutions.
                </div>
              </div>
              <div className="h-11 flex justify-start items-center gap-6 border border-yellow-200 rounded-md">
                <div className="px-3 py-1 flex justify-center items-center gap-2 rounded-md">
                  <div className="text-yellow-600 text-base">Details</div>
                  <div className="w-6 h-6">
                    <div className="w-[7px] h-[11px] bg-yellow-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[411px] bg-white border border-gray-400 rounded-lg flex flex-col justify-start items-start">
            <img
              className="w-full h-[233px] rounded-t-lg"
              src="https://via.placeholder.com/411x233"
              alt="Service Image"
            />
            <div className="w-full h-[239px] p-8 flex flex-col justify-center items-start gap-6">
              <div className="w-full h-[106px] flex flex-col justify-start items-start gap-4">
                <div className="text-black text-2xl font-bold leading-10">
                  Landscaping
                </div>
                <div className="text-black text-base font-normal leading-6 break-words">
                  Transforming spaces with expert landscaping craftsmanship.
                </div>
              </div>
              <div className="h-11 flex justify-start items-center gap-6 border border-yellow-200 rounded-md">
                <div className="px-3 py-1 flex justify-center items-center gap-2 rounded-md">
                  <div className="text-yellow-600 text-base">Details</div>
                  <div className="w-6 h-6">
                    <div className="w-[7px] h-[11px] bg-yellow-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreAgriSerives;
