import React from 'react';
import '../styling/about.css';
import Club from '../images/clubphoto.png'; // Ensure this path is correct

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
          <p>
            Established in 2019, our Finance Club is a vibrant hub for students passionate about finance, economics,
            and the world of investments. We are dedicated to fostering financial literacy and practical knowledge
            through engaging workshops, interactive sessions, and dynamic events.
          </p>
          <p>
            Our signature events, such as Trading Ring and Price is Right, provide a hands-on experience in trading
            strategies, market dynamics, and financial decision-making. These events are the highlight of our
            activities during Technozion, our college’s prestigious annual fest.
          </p>
          <p>
            With a focus on creating an immersive and enriching environment, we aim to equip students with the skills
            and insights needed to thrive in the ever-evolving financial world. Whether you are a beginner or an
            enthusiast, our club is the perfect platform to learn, grow, and connect with like-minded individuals.
          </p>
        </div>
    
      
    </div>
  );
};

export default About;