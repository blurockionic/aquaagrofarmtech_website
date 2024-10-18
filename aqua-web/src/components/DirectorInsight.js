import React from 'react';
import '../App.css';

const DirectorInsight = () => {
  return (
    <section className="director-insight">
      <div className="director-insight-content">
        <h2>Director's Insight</h2>
        <p className="tagline">Driving Innovation in Sustainable Agriculture Solutions</p>
        <p>
          With over 8 years of hands-on experience in farming and landscaping, our founder has led Aqua Agro to become a leader in agro-tech solutions across India.
        </p>
        <p>
          For me, agriculture is about growing not only crops but sustainable futures for communities across India.
        </p>
        <p>
          At Aqua Agro Farmtech, we strive to revolutionize sustainable farming with innovative polyhouse solutions, efficient irrigation systems, and high-quality landscaping services.
        </p>
      </div>
      <div className="director-profile">
        <img src="./images/director.png" alt="Ashish Goswami" />
        <h3>Ashish Goswami</h3>
        <p>Director</p>
        <p>Passionate about sustainable agriculture and committed to innovation.</p>
      </div>
    </section>
  );
};

export default DirectorInsight;
