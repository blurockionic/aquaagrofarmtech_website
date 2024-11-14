import React from 'react';
import IrrigationSystems from "../../components/irrigations/IrrigationSystems";
import IrrigationSolutions from "../../components/irrigations/IrrigationSolutions";
import IrrigationServices from "../../components/irrigations/IrrigationServices";
import IrrigationSystemmid from "../../components/irrigations/IrrigationSystemmid";
import FAQs from "../../components/irrigations/FAQs";
import ContactSection from "../../components/irrigations/ContactSection";

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
