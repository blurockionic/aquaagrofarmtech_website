import React from "react";
import Image from 'next/image';  
import '../../App.css';
import img1 from "../../images/aboutpics/timelineicon.png";

const Milestones = () => {
  return (
    <section className="milestones">
      <div className="milestones-content">
        <h2>Our Journey: Key Milestones in Growth</h2>
        <button className="contact-btn">Contact Us</button>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <Image 
            src={img1}
            alt="2015 Launch Icon" 
            className="milestone-icon" 
            width={50}  
            height={50} 
          />
          <div>
            <h4>2015 Launch</h4>
            <p>
              AQUA AGRO FARMTECH was founded, driven by a passion for sustainable
              agriculture and landscaping.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <Image 
            src={img1} 
            alt="First Project Icon" 
            className="milestone-icon" 
            width={50} 
            height={50} 
          />
          <div>
            <h4>First Project</h4>
            <p>
              Completed our first major project, establishing a reputation for
              quality and innovation in the field.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <Image 
            src={img1}
            alt="Community Impact Icon" 
            className="milestone-icon" 
            width={50} 
            height={50} 
          />
          <div>
            <h4>Community Impact</h4>
            <p>
              Launched community initiatives focusing on environmental
              sustainability and education in local schools.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <Image 
            src={img1}
            alt="Awards Received Icon" 
            className="milestone-icon" 
            width={50} 
            height={50} 
          />
          <div>
            <h4>Awards Received</h4>
            <p>
              Recognized with multiple awards for excellence in agriculture and
              landscape design over the years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
