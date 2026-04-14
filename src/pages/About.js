import React from 'react';
import './About.css';

const About = () => {
  const team = [
    { name: 'Dr. Sarah Johnson', role: 'CEO & Founder', image: '👩‍💼' },
    { name: 'Michael Chen', role: 'CTO', image: '👨‍💻' },
    { name: 'Dr. Emily Rodriguez', role: 'Head of Sustainability', image: '👩‍🔬' },
    { name: 'David Kim', role: 'Operations Director', image: '👨‍💼' }
  ];

  const values = [
    { icon: '🌍', title: 'Sustainability', description: 'Committed to creating a cleaner, greener planet for future generations.' },
    { icon: '💡', title: 'Innovation', description: 'Constantly pushing boundaries with cutting-edge IoT and AI technology.' },
    { icon: '🤝', title: 'Community', description: 'Working together with cities and citizens for better waste management.' },
    { icon: '📊', title: 'Transparency', description: 'Open data and clear communication about our impact and operations.' }
  ];

  return (
    <div className="about page-container">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="section-title">About SmartWaste</h1>
          <p className="hero-description">
            Revolutionizing urban waste management through innovative technology and sustainable practices.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p className="mission-text">
              To create smarter, cleaner cities by transforming traditional waste management 
              into an efficient, data-driven ecosystem that benefits both communities and the environment.
            </p>
            <div className="mission-stats">
              <div className="mission-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Cities Served</span>
              </div>
              <div className="mission-stat">
                <span className="stat-number">5K+</span>
                <span className="stat-label">Smart Bins</span>
              </div>
              <div className="mission-stat">
                <span className="stat-number">40%</span>
                <span className="stat-label">Efficiency Increase</span>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <h2>Our Story</h2>
          <div className="story-content">
            <p>
              Founded in 2020, SmartWaste emerged from a simple observation: traditional waste 
              management systems were inefficient, costly, and harmful to the environment. 
              Our founders, with backgrounds in IoT technology and environmental science, 
              saw an opportunity to make a real difference.
            </p>
            <p>
              What started as a pilot project with 50 smart bins in a single neighborhood 
              has grown into a comprehensive waste management solution deployed across 
              multiple cities. Our technology has helped reduce carbon emissions, increase 
              recycling rates, and save municipalities millions in operational costs.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Section */}
        <section className="technology-section">
          <h2>Our Technology</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h3>IoT Sensors</h3>
              <p>Advanced ultrasonic sensors monitor waste levels in real-time, sending data to our cloud platform every 15 minutes.</p>
            </div>
            <div className="tech-card">
              <h3>AI & Machine Learning</h3>
              <p>Our algorithms analyze patterns to predict fill rates and optimize collection routes, reducing fuel consumption by up to 30%.</p>
            </div>
            <div className="tech-card">
              <h3>Cloud Platform</h3>
              <p>Secure, scalable cloud infrastructure processes millions of data points daily, providing real-time insights and analytics.</p>
            </div>
            <div className="tech-card">
              <h3>Mobile Integration</h3>
              <p>User-friendly mobile apps for both citizens and collection teams, enabling seamless communication and reporting.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Leadership Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">{member.image}</div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners-section">
          <h2>Our Partners</h2>
          <div className="partners-grid">
            <div className="partner-logo">🌍 GreenCity Initiative</div>
            <div className="partner-logo">🔧 TechWaste Solutions</div>
            <div className="partner-logo">🌱 EcoFuture Foundation</div>
            <div className="partner-logo">🏛️ Municipal Alliance</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;