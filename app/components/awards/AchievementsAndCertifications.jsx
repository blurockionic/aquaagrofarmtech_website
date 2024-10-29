import { ChevronRight } from "lucide-react";
import React from "react";

const AchievementsAndCertifications = () => {
  const achievements = [
    {
      imgSrc: "https://via.placeholder.com/405x240",
      title: "Lorem Ipsum 1",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      imgSrc: "https://via.placeholder.com/405x240",
      title: "Lorem Ipsum 2",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      imgSrc: "https://via.placeholder.com/405x240",
      title: "Lorem Ipsum 3",
      description: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <div className="w-full h-full px-16 py-28 bg-white flex flex-col items-center gap-20">
      {/* Centered Heading */}
      <div className="w-full flex justify-start items-start py-4 text-black text-4xl font-bold leading-tight">
        Achievements and Certifications
      </div>
      <div className="w-full flex flex-col items-start gap-16">
        <div className="flex justify-center items-start gap-12 flex-wrap">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex flex-col items-start gap-8">
              <img
                className="w-[405px] h-[240px] object-cover"
                src={achievement.imgSrc}
                alt={achievement.title}
              />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="text-black text-2xl font-bold leading-8">
                    {achievement.title}
                  </div>
                  <div className="text-black text-base leading-6">
                    {achievement.description}
                  </div>
                </div>

                <button className="flex items-center justify-center w-24 h-10 border border-[#B5651D] bg-white text-[#B5651D] text-sm font-semibold rounded-md hover:bg-[#B5651D] hover:text-white transition duration-200">
                  More
                  <ChevronRight className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsAndCertifications;
