import React from 'react';
import Testimonials from "@/app/components/testimonials/Testimonials";
import TestimonialSection from "@/app/components/testimonials/TestimonialSection";
import TestimonialsData from '@/app/components/testimonials/TestimonialsData';
import Frame from '@/app/components/testimonials/Frame';
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
