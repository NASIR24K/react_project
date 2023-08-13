import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/./HeroSection.css'; // You can style your HeroSection using CSS

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Unlocking Innovation through Code</h1>
        <p>Browse my portfolio and explore the world of software engineering.</p>
        <Link to="/portfolio" className="cta-button">View Portfolio</Link>
      </div>
    </div>
  );
}

export default HeroSection;
