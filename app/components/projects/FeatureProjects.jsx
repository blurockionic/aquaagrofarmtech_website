import Image from "next/image";
import React from "react";
import image_1 from "/public/images/services/agri_type_image_1.png";
import image_2 from "/public/images/services/agri_type_image_2.png";
import image_3 from "/public/images/services/agri_type_image_3.png";
import image_4 from "/public/images/services/agri_type_image_4.png";
import image_5 from "/public/images/services/agri_type_image_5.png";
import image_6 from "/public/images/services/agri_type_image_6.png";

function FeatureProjects() {
  return (
    <div className="w-full h-full px-4 md:px-16 py-16 md:py-28 bg-[#F5F5DC] flex flex-col justify-start items-start gap-20">
      <div className="flex flex-col justify-start items-start gap-4 h-auto">
        <div className="inline-flex items-center justify-start">
          <div className="text-center text-black text-lg font-semibold leading-6">
            Projects
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="text-center text-black text-4xl md:text-5xl font-bold leading-tight">
            Our Featured Projects
          </div>
          <div className="text-center text-black text-lg font-normal leading-7">
            Explore our innovative agricultural solutions and designs.
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-16  ">
        <div className="flex flex-col justify-center items-center gap-12">
          {/* Project 1 */}
          <div className="w-full md:w-[632px] h-[539px] border border-black rounded-2xl flex flex-col justify-start items-start">
            <Image
              className="w-full h-[356px] rounded-t-lg"
              src={image_1}
              alt="Polyhouse Project"
            />
            <div className="w-full h-[183px] p-6 flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="text-black text-2xl font-bold leading-tight">
                  Polyhouse Project
                </div>
                <div className="text-black text-base leading-6 font-normal">
                  Transforming spaces with sustainable polyhouse solutions for
                  optimal growth.
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Polyhouse
                </div>
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Sustainable Farming
                </div>
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Innovative Design
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-full md:w-[632px] h-[539px] border border-black rounded-2xl flex flex-col justify-start items-start">
            <Image
              className="w-full h-[356px] rounded-t-lg"
              src={image_3}
              alt="Irrigation System"
            />
            <div className="w-full h-[183px] p-6 flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="text-black text-2xl font-bold leading-tight">
                  Irrigation System
                </div>
                <div className="text-black text-base leading-6 font-normal">
                  Efficient irrigation solutions tailored to enhance crop
                  productivity and water conservation.
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Irrigation
                </div>
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Water Management
                </div>
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Crop Health
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[632px] h-[790px] border border-black rounded-2xl flex flex-col justify-start items-start">
            <Image
              className="w-full h-[610px] rounded-t-lg"
              src={image_4}
              alt="Irrigation System"
            />
            <div className="w-full h-[183px] p-6 flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="text-black text-2xl font-bold leading-tight">
                  Irrigation System
                </div>
                <div className="text-black text-base leading-6 font-normal">
                  Efficient irrigation solutions tailored to enhance crop
                  productivity and water conservation.
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Irrigation
                </div>
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Water Management
                </div>
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Crop Health
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-12">
          {/* Project 3 */}
          <div className="w-full md:w-[632px] h-[791px] border border-black rounded-2xl flex flex-col justify-start items-start">
            <Image
              className="w-full h-[632px] rounded-t-lg"
              src={image_2}
              alt="Landscaping Design"
            />
            <div className="w-full h-[159px] p-6 flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="text-black text-2xl font-bold leading-tight">
                  Polyhouse Project
                </div>
                <div className="text-black text-base leading-6 font-normal">
                  Creating beautiful landscapes that blend functionality with
                  nature&apos;s beauty.
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Landscaping
                </div>
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Outdoor Spaces
                </div>
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Design Excellence
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="w-full md:w-[632px] h-[539px] border border-black rounded-2xl flex flex-col justify-start items-start">
            <Image
              className="w-full h-[356px] rounded-t-lg"
              src={image_5}
              alt="Project 4"
            />
            <div className="w-full h-[183px] p-6 flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="text-black text-2xl font-bold leading-tight">
                  Farming
                </div>
                <div className="text-black text-base leading-6 font-normal">
                  Efficient irrigation solutions tailored to enhance crop
                  productivity and water conservation.
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Irrigation
                </div>
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Agriculture
                </div>
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Farming
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[632px] h-[539px] border border-black rounded-2xl flex flex-col justify-start items-start">
            <Image
              className="w-full h-[356px] rounded-t-lg"
              src={image_6}
              alt="Project 4"
            />
            <div className="w-full h-[183px] p-6 flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="text-black text-2xl font-bold leading-tight">
                  Community Gardens
                </div>
                <div className="text-black text-base leading-6 font-normal">
                  Engaging communities through sustainable gardening practices
                  and educational initiatives.
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Community Impact
                </div>
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Sustainability Focus
                </div>
                <div className="px-2 py-1 bg-gray-200 text-black text-sm font-semibold leading-5">
                  Educational Programs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProjects;
