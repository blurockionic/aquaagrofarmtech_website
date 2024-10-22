import ExploreSection from "@/app/components/landscaping/ExploreSection";
import FrequentlyAskQuestion from "@/app/components/landscaping/FrequentlyAskQuestion";
import GetInTouch from "@/app/components/landscaping/GetInTouch";
import InnovativeSection from "@/app/components/landscaping/InnovativeSection";
import LandscapingService from "@/app/components/landscaping/LandscapingService";
import UnlockSection from "@/app/components/landscaping/UnlockSection";
import React from "react";

const Landscaping = () => {
  return (
    <>
      <LandscapingService />
      <InnovativeSection />
      <ExploreSection />
      <UnlockSection />
      <FrequentlyAskQuestion />
      <GetInTouch />
    </>
  );
};

export default Landscaping;
