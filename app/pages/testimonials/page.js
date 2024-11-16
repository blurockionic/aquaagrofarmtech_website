import React from 'react';
import Testimonials from "../../components/testimonials/Testimonials";
import TestimonialSection from "../../components/testimonials/TestimonialSection";
import TestimonialsData from '../../components/testimonials/TestimonialsData';
import Frame from '../../components/testimonials/Frame';
import '../../App.css';

function App() {
  return (
    <div className="App">
     <Testimonials/>
     <TestimonialSection/>
     <TestimonialsData/>
     <Frame/>
    </div>
  );
}

export default App;
