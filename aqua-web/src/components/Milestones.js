import React from "react";
import "../App.css";

const Milestones = () => {
  return (
    <section className="milestones">
      <div className="milestones-content">
        <h2>Our Journey: Key Milestones in Growth</h2>
        <button className="contact-btn">Contact Us</button>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <h4>2015 Launch</h4>
          <p>
            AQUA AGRO FARMTECH was founded, driven by a passion for sustainable
            agriculture and landscaping.
          </p>
        </div>
        <div className="timeline-item">
          <h4>First Project</h4>
          <p>
            Completed our first major project, establishing a reputation for
            quality and innovation in the field.
          </p>
        </div>
        <div className="timeline-item">
          <h4>Community Impact</h4>
          <p>
            Launched community initiatives focusing on environmental
            sustainability and education in local schools.
          </p>
        </div>
        <div className="timeline-item">
          <h4>Awards Received</h4>
          <p>
            Recognized with multiple awards for excellence in agriculture and
            landscape design over the years.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
