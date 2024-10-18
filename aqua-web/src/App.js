import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection.js';
import AboutSection from './components/AboutSection';
import DirectorInsight from './components/DirectorInsight';
import MissionVision from './components/MissionVision';
import Milestones from "./components/Milestones";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <MissionVision/>
      <DirectorInsight/>
      <Milestones/>
      <Footer/>
    </div>
  );
}

export default App;
