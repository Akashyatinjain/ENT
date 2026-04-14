import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Smart Detection",
      description: "IoT sensors in waste bins detect fill levels in real-time using ultrasonic technology.",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Data Transmission",
      description: "Data is transmitted to our cloud platform via 4G/5G networks for processing.",
      icon: "📡"
    },
    {
      step: "03",
      title: "AI Analysis",
      description: "Our AI algorithms analyze data and optimize collection routes and schedules.",
      icon: "🤖"
    },
    {
      step: "04",
      title: "Smart Collection",
      description: "Collection teams receive optimized routes via mobile app and collect only full bins.",
      icon: "🚛"
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          A seamless process from detection to collection
        </p>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{step.step}</div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="workflow-visualization">
          <div className="workflow-diagram">
            <div className="diagram-node node-sensor">
              <span>📊 Sensors</span>
            </div>
            <div className="diagram-arrow">→</div>
            <div className="diagram-node node-cloud">
              <span>☁️ Cloud</span>
            </div>
            <div className="diagram-arrow">→</div>
            <div className="diagram-node node-ai">
              <span>🧠 AI Engine</span>
            </div>
            <div className="diagram-arrow">→</div>
            <div className="diagram-node node-collection">
              <span>🚛 Collection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;