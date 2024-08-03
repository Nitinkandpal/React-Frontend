import React from 'react';
import './MissionSection.css';
import photo from './random.jpeg'

const MissionSection = () => {
  return (
    <div Classname="main">
    <section className="mission-section">
      <h1>Connecting Companies </h1> <h1>With Brilliant Minds At Campuses</h1>
      <p>At XXXXX, we know that finding the right employee can be a challenge... Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus
  blandit vitae. Nostra dapibus bibendum; curae magnis commodo metus vestibulum tristique. 
        
      </p>
      
      <div className="mission-text">
        <img src={photo} alt="Sanjeev Singh" />
        <div className="mission">
          <h2>Our Mission</h2>
          <p>Welcome to XXXXX, where we redefine the process of finding top-performing college graduates...</p>
          <p> <b>-- Sanjeev Singh, CEO & Founder </b></p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default MissionSection;
