import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      category: "Environmental",
      icon: "🌍",
      items: [
        "Reduce carbon emissions by 40%",
        "Increase recycling rates by 60%",
        "Prevent overflow and littering",
        "Optimize resource utilization"
      ],
      color: "#2ecc71"
    },
    {
      category: "Economic",
      icon: "💰",
      items: [
        "Reduce operational costs by 45%",
        "Save fuel and maintenance expenses",
        "Extend bin lifespan",
        "Generate valuable data insights"
      ],
      color: "#f39c12"
    },
    {
      category: "Social",
      icon: "👥",
      items: [
        "Cleaner public spaces",
        "Improved citizen satisfaction",
        "Real-time service updates",
        "Community engagement platform"
      ],
      color: "#3498db"
    }
  ];

  return (
    <section id="benefits" className="benefits">
      <div className="container">
        <h2 className="section-title">Key Benefits</h2>
        <p className="section-subtitle">
          Creating value for the environment, economy, and society
        </p>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-header" style={{ background: benefit.color }}>
                <span className="benefit-icon">{benefit.icon}</span>
                <h3 className="benefit-category">{benefit.category}</h3>
              </div>
              <ul className="benefit-list">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="benefit-item">
                    <span className="check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="comparison-section">
          <h3 className="comparison-title">Traditional vs Smart System</h3>
          <div className="comparison-table">
            <div className="comparison-row header">
              <div>Feature</div>
              <div>Traditional</div>
              <div>Smart System</div>
            </div>
            <div className="comparison-row">
              <div>Collection Frequency</div>
              <div className="negative">Fixed schedule</div>
              <div className="positive">Need-based</div>
            </div>
            <div className="comparison-row">
              <div>Fuel Efficiency</div>
              <div className="negative">High consumption</div>
              <div className="positive">30% reduction</div>
            </div>
            <div className="comparison-row">
              <div>Bin Overflow</div>
              <div className="negative">Common issue</div>
              <div className="positive">Prevented</div>
            </div>
            <div className="comparison-row">
              <div>Data Analytics</div>
              <div className="negative">Limited</div>
              <div className="positive">Real-time insights</div>
            </div>
            <div className="comparison-row">
              <div>Cost Efficiency</div>
              <div className="negative">High operational cost</div>
              <div className="positive">45% cost savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;