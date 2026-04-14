import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: "📡",
      title: "IoT Smart Sensors",
      description: "Advanced ultrasonic sensors monitor waste levels in real-time, sending data to our cloud platform for instant analysis.",
      color: "#2ecc71"
    },
    {
      icon: "🗺️",
      title: "AI Route Optimization",
      description: "Machine learning algorithms create the most efficient collection routes, reducing fuel consumption by up to 30%.",
      color: "#3498db"
    },
    {
      icon: "📱",
      title: "Mobile App Integration",
      description: "Citizens can report full bins, track collection schedules, and receive notifications about waste collection in their area.",
      color: "#9b59b6"
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting tools help municipalities make data-driven decisions for waste management.",
      color: "#e67e22"
    },
    {
      icon: "🔋",
      title: "Solar-Powered Bins",
      description: "Eco-friendly bins equipped with solar panels for self-sustaining operation and automatic compaction.",
      color: "#f39c12"
    },
    {
      icon: "🔄",
      title: "Recycling Integration",
      description: "Smart sorting technology helps increase recycling rates by automatically separating different types of waste.",
      color: "#1abc9c"
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Smart Features</h2>
        <p className="section-subtitle">
          Discover how our technology is transforming waste management
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ '--card-color': feature.color }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;