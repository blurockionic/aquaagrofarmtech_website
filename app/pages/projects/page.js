import React from "react";
import image_1 from "../../images/ourproject/project_image_1.png";
import Image from "next/image";
import HeroSection from "@/app/components/projects/HeroSection";
import FeatureProjects from "@/app/components/projects/FeatureProjects";
import CoreAgriSerives from "@/app/components/projects/CoreAgriSerives";
import NewsLetter from "@/app/components/projects/NewsLetter";
const ProjectPage = () => {
  return (
    <>
      <HeroSection />
      <FeatureProjects />
      <CoreAgriSerives />
      <NewsLetter />
    </>
  );
};

export default ProjectPage;
