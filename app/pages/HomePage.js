import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutSectionMain from "../components/home/AboutSectionMain";
import OurServiceMain from "../components/home/OurServiceMain";
import OurProjectSection from "../components/home/OurProjectSection";
import OurAccessariesSection from "../components/home/OurAccessariesSection";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
      {/* herosection  */}
      <HeroSection />

      {/* about section  */}
      <AboutSectionMain />

      {/* our service sections  */}
      <OurServiceMain />

      {/* our ptoject section  */}
      <OurProjectSection />

      {/* our accessories  */}
      <OurAccessariesSection />

      {/* testimonials  */}
      <Testimonials/>

    </>
  );
};

export default Home;
