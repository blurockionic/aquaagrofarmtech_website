import React from "react";
import Image from "next/image";
import "../../App.css";
import img1 from "../../images/aboutpics/timelineicon.png";

const Milestones = () => {
  return (
    <div className="w-full h-full px-16 py-28 bg-[#B5651D] flex flex-col justify-start items-start gap-20">
      <div className="w-full flex  flex-col md:flex-row justify-start items-start gap-20">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-start items-start gap-8">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="flex justify-start items-center">
              <div className="text-white text-lg font-semibold">Milestones</div>
            </div>
            <div className="w-full text-start text-white text-4xl font-bold leading-tight">
              Our Journey: Key <br />
              Milestones in Growth
            </div>
          </div>

          <button className="text-white bg-[#B5651D] border border-white px-4 py-2 rounded-lg">
            Contact Us
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col justify-start items-start gap-4">
          {/* Milestone 1 */}
          <div className="w-full flex justify-start items-start gap-10">
            <div className="flex flex-col justify-start items-center gap-4">
              <div className="w-12 h-8 relative">
                <div className="absolute top-1 left-1 w-9 h-10 ">
                  <Image
                    className="w-full h-full"
                    src={img1}
                    alt="Timeline Icon"
                  />
                </div>
              </div>
              <div className="mt-10 w-24 h-0 transform rotate-90 border-2 border-white"></div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-4">
              <div className="w-full text-white text-xl font-bold text-start">
                2015 Launch
              </div>
              <div className="w-full text-start text-white text-base font-normal">
                AQUA AGRO FARMTECH was founded, driven by a passion for
                sustainable agriculture and landscaping.
              </div>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="w-full flex justify-start items-start gap-10">
            <div className="flex flex-col justify-start items-center gap-4">
              <div className="w-12 h-8 relative">
                <div className="absolute top-7 left-1 w-9 h-10 ">
                  <Image
                    className="w-full h-full"
                    src={img1}
                    alt="Timeline Icon"
                  />
                </div>
              </div>
              <div className="mt-16 w-24 h-0 transform rotate-90 border-2 border-white"></div>
            </div>
            <div className="flex-1 mt-10 flex flex-col justify-start items-start gap-4">
              <div className="w-full text-start text-white text-xl font-bold">
                First Project
              </div>
              <div className="w-full text-start text-white text-base font-normal">
                Completed our first major project, establishing a reputation for
                quality and innovation in the field.
              </div>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="w-full flex justify-start items-start gap-10">
            <div className="flex flex-col justify-start items-center gap-4">
              <div className="w-12 h-8 relative">
                <div className="absolute top-3 left-1 w-9 h-10 ">
                  <Image
                    className="w-full h-full"
                    src={img1}
                    alt="Timeline Icon"
                  />
                </div>
              </div>
              <div className="mt-12 w-24 h-0 transform rotate-90 border-2 border-white"></div>
            </div>
            <div className="mt-8 flex-1 flex flex-col justify-start items-start gap-4">
              <div className="w-full text-start text-white text-xl font-bold">
                Community Impact
              </div>
              <div className="w-full text-start text-white text-base font-normal">
                Launched community initiatives focusing on environmental
                sustainability and education in local schools.
              </div>
            </div>
          </div>

          {/* Milestone 4 */}
          <div className="w-full flex justify-start items-start gap-10">
            <div className="flex flex-col justify-start items-center gap-4">
              <div className="w-12 h-8 relative">
                <div className="absolute top-2 left-1 w-9 h-10 ">
                  <Image
                    className="w-full h-full"
                    src={img1}
                    alt="Timeline Icon"
                  />
                </div>
              </div>
              <div className="mt-12 w-24 h-0 transform rotate-90 border-2 border-white"></div>
            </div>
            <div className="flex-1 mt-6 flex flex-col justify-start items-start gap-4">
              <div className="w-full text-start text-white text-xl font-bold">
                Awards Received
              </div>
              <div className="w-full text-start text-white text-base font-normal">
                Recognized with multiple awards for excellence in agriculture
                and landscape design over the years.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
