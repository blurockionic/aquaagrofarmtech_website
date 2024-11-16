import React from 'react';
import AchievementsAndCertifications from "../../components/awards/AchievementsAndCertifications";
import AchievementsComponent from "../../components/awards/AchievementsComponent";
import ImageHeader from '../../components/awards/ImageHeader';

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
