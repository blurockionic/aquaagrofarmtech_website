import ExploreSection from "../../components/landscaping/ExploreSection";
import FrequentlyAskQuestion from "../../components/landscaping/FrequentlyAskQuestion";
import GetInTouch from "../../components/landscaping/GetInTouch";
import InnovativeSection from "../../components/landscaping/InnovativeSection";
import LandscapingService from "../../components/landscaping/LandscapingService";
import UnlockSection from "../../components/landscaping/UnlockSection";
import React from "react";
import "../../../app/App.css";

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
