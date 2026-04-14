import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🌍 Smart City Initiative</span>
          </div>
          <h1 className="hero-title">
            Smart Waste
            <span className="highlight"> Collection System</span>
          </h1>
          <p className="hero-description">
            Revolutionizing urban waste management with IoT-enabled smart bins, 
            real-time monitoring, and AI-powered route optimization. Join the 
            future of sustainable cities.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Start Collection</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>98%</h3>
              <p>Collection Efficiency</p>
            </div>
            <div className="stat-item">
              <h3>45%</h3>
              <p>Cost Reduction</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Real-time Monitoring</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-bins">
            <div className="bin bin-1">🗑️</div>
            <div className="bin bin-2">♻️</div>
            <div className="bin bin-3">🚮</div>
          </div>
          <svg className="hero-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" fill="url(#gradient)" opacity="0.1" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stopColor="#2ecc71" stopOpacity="1" />
<stop offset="100%" stopColor="#3498db" stopOpacity="1" />                <stop offset="100%" style={{ stopColor: '#3498db', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f5f6fa" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;