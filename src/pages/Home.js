import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [stats, setStats] = useState({
    bins: 0,
    cities: 0,
    waste: 0,
    efficiency: 0
  });

  useEffect(() => {
    const targets = { bins: 5234, cities: 48, waste: 1250, efficiency: 94 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        bins: Math.floor(targets.bins * progress),
        cities: Math.floor(targets.cities * progress),
        waste: Math.floor(targets.waste * progress),
        efficiency: Math.floor(targets.efficiency * progress)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targets);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
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
              real-time monitoring, and AI-powered route optimization.
            </p>
            <div className="hero-buttons">
              <Link to="/dashboard" className="btn btn-primary">View Live Dashboard</Link>
              <Link to="/bin-locator" className="btn btn-secondary">Find Bins Near You</Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <h3>{stats.efficiency}%</h3>
                <p>Collection Efficiency</p>
              </div>
              <div className="stat-item">
                <h3>{stats.bins.toLocaleString()}+</h3>
                <p>Smart Bins Deployed</p>
              </div>
              <div className="stat-item">
                <h3>{stats.cities}</h3>
                <p>Cities Connected</p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="./smart.png" alt="Smart Waste" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Smart Features</h2>
          <p className="section-subtitle">Discover how our technology transforms waste management</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📡</div>
              <h3>Real-time Monitoring</h3>
              <p>Track bin fill levels and status in real-time with IoT sensors</p>
              <Link to="/dashboard" className="feature-link">Learn More →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Smart Routing</h3>
              <p>AI-optimized collection routes for maximum efficiency</p>
              <Link to="/analytics" className="feature-link">Learn More →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics Dashboard</h3>
              <p>Comprehensive data visualization and reporting tools</p>
              <Link to="/analytics" className="feature-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <div className="container">
          <h2 className="section-title">Quick Actions</h2>
          <div className="actions-grid">
            <Link to="/bin-locator" className="action-card">
              <div className="action-icon">🗺️</div>
              <h3>Find Nearest Bin</h3>
              <p>Locate smart bins in your area</p>
            </Link>
            <Link to="/dashboard" className="action-card">
              <div className="action-icon">📊</div>
              <h3>View Dashboard</h3>
              <p>Monitor real-time statistics</p>
            </Link>
            <Link to="/reports" className="action-card">
              <div className="action-icon">📑</div>
              <h3>Generate Report</h3>
              <p>Download waste analytics reports</p>
            </Link>
            <Link to="/contact" className="action-card">
              <div className="action-icon">📞</div>
              <h3>Contact Support</h3>
              <p>Get help from our team</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;