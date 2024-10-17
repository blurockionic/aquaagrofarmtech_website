import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSectionMain from "./components/AboutSectionMain";
import OurServiceMain from "./components/OurServiceMain";

export default function Home() {
  return (
    <div>
      {/* header  */}
      <Header />

      {/* herosection  */}
      <HeroSection />

      {/* about section  */}
      <AboutSectionMain/>

      {/* our service sections  */}
      <OurServiceMain/>

      {/* footer  */}
      <Footer />
    </div>
  );
}
