import React from 'react';
import AchievementsAndCertifications from "@/app/components/awards/AchievementsAndCertifications";
import AchievementsComponent from "@/app/components/awards/AchievementsComponent";
import ImageHeader from '@/app/components/awards/ImageHeader';

function App() {
  return (
    <div className="App">
      <ImageHeader/>
      <AchievementsAndCertifications />
      <AchievementsComponent/>

    </div>
  );
}

export default App;
