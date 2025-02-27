import React from 'react';
import '../styling/pri.css'; // External CSS file

const Pri = () => {
  return (
    <div className="values-mission-goals-container">
      <div className="box">
        <h2>Our Values</h2>
        <p>
          We believe in learning, collaboration, and innovation. Our club fosters an environment where students can explore financial concepts, share knowledge, and grow together. Integrity, curiosity, and adaptability drive our approach as we encourage members to think critically and develop a strategic mindset in finance.
        </p>
      </div>
      <div className="box">
        <h2>Our Mission</h2>
        <p>
          Our mission is to educate, inspire, and empower students by making finance accessible, engaging, and practical. We strive to cultivate financial literacy, encourage smart investing, and provide opportunities for hands-on experience, helping our members confidently navigate the financial landscape and achieve their financial goals.
        </p>
      </div>
      <div className="box">
        <h2>Our Goal</h2>
        <p>
          Our goal is to create a platform where students can develop a strong financial foundation, enhance their analytical skills, and gain practical exposure to real-world finance. We aim to bridge the gap between theory and application through workshops, discussions, competitions, and hands-on learning experiences, ensuring that our members are well-equipped to make informed financial decisions and succeed in the ever-evolving financial world.
        </p>
      </div>
    </div>
  );
};

export default Pri;