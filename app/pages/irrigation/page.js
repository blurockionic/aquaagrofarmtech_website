import React from 'react';
import IrrigationSystems from "@/app/components/irrigations/IrrigationSystems";
import IrrigationSolutions from "@/app/components/irrigations/IrrigationSolutions";
import IrrigationServices from "@/app/components/irrigations/IrrigationServices";
import IrrigationSystemmid from "@/app/components/irrigations/IrrigationSystemmid";
import FAQs from "@/app/components/irrigations/FAQs";
import ContactSection from "@/app/components/irrigations/ContactSection";

function App() {
  return (
    <div className="App">
     <IrrigationSystems/>
     <IrrigationSolutions/>
     <IrrigationServices/>
     <IrrigationSystemmid/>
     <FAQs/>
     <ContactSection/>
    </div>
  );
}

export default App;
