import React from 'react';
import HeroSection from "@/app/components/about/HeroSection";
import ServicesSection from "@/app/components/about/ServicesSection";
import AboutSection from "@/app/components/about/AboutSection";
import DirectorInsight from "@/app/components/about/DirectorInsight";
import MissionVision from "@/app/components/about/MissionVision";
import Milestones from "@/app/components/about/Milestones";
import '../../App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <MissionVision/>
      <DirectorInsight/>
      <Milestones/>
    </div>
  );
}

export default App;
