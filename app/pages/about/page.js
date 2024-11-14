import React from 'react';

import '../../App.css';
import HeroSection from '../../components/about/HeroSection';
import ServicesSection from '../../components/about/ServicesSection';
import AboutSection from '../../components/about/AboutSection';
import MissionVision from '../../components/about/MissionVision';
import DirectorInsight from '../../components/about/DirectorInsight';
import Milestones from '../../components/about/Milestones';

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
