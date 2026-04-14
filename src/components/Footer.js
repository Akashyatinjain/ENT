import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">♻️</span>
              <span className="logo-text">SmartWaste</span>
            </Link>
            <p className="footer-description">
              Revolutionizing waste management through IoT and AI technology. 
              Building cleaner, smarter cities for a sustainable future.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/bin-locator">Bin Locator</Link></li>
              <li><Link to="/analytics">Analytics</Link></li>
              <li><Link to="/reports">Reports</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press Kit</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📍</span>
                123 Green Street, Eco City
              </li>
              <li>
                <span className="contact-icon">📞</span>
                +1 (555) 123-4567
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                info@smartwaste.com
              </li>
              <li>
                <span className="contact-icon">🕐</span>
                Mon-Fri: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 SmartWaste Collection System. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Terms of Service</a>
            <span className="separator">|</span>
            <a href="#">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;