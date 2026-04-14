import React, { useState, useEffect } from 'react';
import './Statistics.css';

const Statistics = () => {
  const [counts, setCounts] = useState({
    bins: 0,
    cities: 0,
    waste: 0,
    efficiency: 0
  });

  const targets = {
    bins: 50000,
    cities: 150,
    waste: 250000,
    efficiency: 98
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts({
        bins: Math.floor(targets.bins * progress),
        cities: Math.floor(targets.cities * progress),
        waste: Math.floor(targets.waste * progress),
        efficiency: Math.floor(targets.efficiency * progress)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      label: "Smart Bins Deployed",
      value: counts.bins.toLocaleString(),
      icon: "🗑️",
      suffix: "+"
    },
    {
      label: "Cities Connected",
      value: counts.cities,
      icon: "🌆",
      suffix: "+"
    },
    {
      label: "Waste Collected (tons)",
      value: counts.waste.toLocaleString(),
      icon: "♻️",
      suffix: "K+"
    },
    {
      label: "Collection Efficiency",
      value: counts.efficiency,
      icon: "📈",
      suffix: "%"
    }
  ];

  return (
    <section id="statistics" className="statistics">
      <div className="container">
        <h2 className="section-title">Our Impact in Numbers</h2>
        <p className="section-subtitle">
          Real-time statistics from our global network
        </p>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">
                {stat.value}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="live-indicator">
          <span className="pulse"></span>
          <span>Live Data Streaming</span>
        </div>

        <div className="map-preview">
          <div className="map-container">
            <svg viewBox="0 0 800 400" className="world-map">
              <circle cx="200" cy="150" r="8" fill="#2ecc71" className="map-dot" />
              <circle cx="350" cy="200" r="12" fill="#2ecc71" className="map-dot" />
              <circle cx="500" cy="100" r="6" fill="#2ecc71" className="map-dot" />
              <circle cx="600" cy="250" r="10" fill="#2ecc71" className="map-dot" />
              <circle cx="150" cy="300" r="7" fill="#2ecc71" className="map-dot" />
              <circle cx="450" cy="300" r="9" fill="#2ecc71" className="map-dot" />
              <circle cx="700" cy="180" r="11" fill="#2ecc71" className="map-dot" />
              <circle cx="300" cy="100" r="5" fill="#2ecc71" className="map-dot" />
            </svg>
          </div>
          <p className="map-caption">Active Smart Bins Across the Globe</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;