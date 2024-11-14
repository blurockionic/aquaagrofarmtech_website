import React from "react";
import Image from "next/image";
import HeroSection from "../../components/projects/HeroSection";
import FeatureProjects from "../../components/projects/FeatureProjects";
import CoreAgriSerives from "../../components/projects/CoreAgriSerives";
import NewsLetter from "../../components/projects/NewsLetter";
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
