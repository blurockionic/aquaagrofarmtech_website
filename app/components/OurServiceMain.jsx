import Image from 'next/image'
import React from 'react'
import image_1  from "../images/image_service_1.png"
import image_2  from "../images/image_service_2.png"
import image_3  from "../images/image_service_3.png"

const OurServiceMain = () => {
  return (
    <div className="w-full h-full px-16 py-28 bg-white flex flex-col justify-start items-center gap-20">
  <div className="h-40 flex flex-col justify-start items-center gap-4">
    <div className="flex justify-start items-center">
      <div className="text-center text-[#FF9800] text-lg font-semibold leading-6">
        Growing Nature, Elevating Dreams
      </div>
    </div>
    <div className="w-full h-28 flex flex-col justify-start items-center gap-6">
      <div className="w-full text-center text-[#B5651D] text-5xl font-bold leading-tight">
        Our Services
      </div>
      <div className="w-full text-center text-black text-lg font-normal leading-7">
        Discover a full range of innovative farming and landscaping services designed to nurture your space and elevate your environment.
      </div>
    </div>
  </div>

  <div className="w-full h-[488px] flex flex-col justify-start items-center gap-8">
    <div className="w-[1312px] p-2 flex justify-start items-start gap-8">
      {/* <!-- Card 1 --> */}
      <div className="w-[411px] bg-white rounded-xl border border-gray-400 flex flex-col justify-start items-start">
        <div className="flex flex-col justify-start items-start gap-2">
          <Image className="w-full h-[233px] rounded-t-xl" src={image_1} alt="Polyhouse Solutions" />
        </div>
        <div className="w-full h-[239px] p-8 flex flex-col justify-center items-start gap-6">
          <div className="w-full h-28 flex flex-col justify-start items-start gap-4">
            <div className="flex justify-center items-center gap-2">
              <div className="text-black text-2xl font-bold leading-tight">
                Polyhouse Solutions
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-2">
              <div className="flex-1 text-black text-lg font-normal leading-6">
                Revolutionizing agriculture with top-tier polyhouse structures.
              </div>
            </div>
          </div>
          <div className="h-12 py-1 border border-[#FFCC80] rounded-lg flex justify-start items-center gap-6">
            <div className="px-3 rounded flex justify-center items-center gap-2">
              <div className="text-[#FF9800] text-lg font-normal leading-6">Details</div>
              <div className="relative w-6 h-6">
                <div className="absolute left-2 top-1 w-2 h-3 bg-[#FF9800]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Card 2 --> */}
      <div className="w-[411px] bg-white rounded-xl border border-gray-400 flex flex-col justify-start items-start">
        <div className="flex flex-col justify-start items-start gap-2">
          <Image className="w-full h-[233px] rounded-t-xl" src={image_2} alt="Irrigation Systems" />
        </div>
        <div className="w-full h-[239px] p-8 flex flex-col justify-center items-start gap-6">
          <div className="w-full h-28 flex flex-col justify-start items-start gap-4">
            <div className="flex justify-center items-center gap-2">
              <div className="text-black text-2xl font-bold leading-tight">
                Irrigation Systems
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-2">
              <div className="flex-1 text-black text-lg font-normal leading-6">
                Maximizing growth with precision irrigation solutions.
              </div>
            </div>
          </div>
          <div className="h-12 py-1 border border-[#FFCC80] rounded-lg flex justify-start items-center gap-6">
            <div className="px-3 rounded flex justify-center items-center gap-2">
              <div className="text-[#FF9800] text-lg font-normal leading-6">Details</div>
              <div className="relative w-6 h-6">
                <div className="absolute left-2 top-1 w-2 h-3 bg-[#FF9800]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Card 3 --> */}
      <div className="w-[411px] bg-white rounded-xl border border-gray-400 flex flex-col justify-start items-start">
        <div className="flex flex-col justify-start items-start gap-2">
          <Image className="w-full h-[233px] rounded-t-xl" src={image_3} alt="Landscaping" />
        </div>
        <div className="w-full h-[239px] p-8 flex flex-col justify-center items-start gap-6">
          <div className="w-full h-28 flex flex-col justify-start items-start gap-4">
            <div className="flex justify-center items-center gap-2">
              <div className="text-black text-2xl font-bold leading-tight">
                Landscaping
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-2">
              <div className="flex-1 text-black text-lg font-normal leading-6">
                Transforming spaces with expert landscaping craftsmanship.
              </div>
            </div>
          </div>
          <div className="h-12 py-1 border border-[#FFCC80] rounded-lg flex justify-start items-center gap-6">
            <div className="px-3 rounded flex justify-center items-center gap-2">
              <div className="text-[#FF9800] text-lg font-normal leading-6">Details</div>
              <div className="relative w-6 h-6">
                <div className="absolute left-2 top-1 w-2 h-3 bg-[#FF9800]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default OurServiceMain