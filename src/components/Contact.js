import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to transform your waste management system?
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>St francis<br />Borivali West</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>+91 79 7730 3911<br />Mon-Fri, 9am-6pm EST</p>
            </div>
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email Us</h3>
              <p>veerScholar@gmail.com<br />devendra@smartwaste.com</p>
            </div>
            <div className="social-links">
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="social-link">📘</a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="social-link">🐦</a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer"className="social-link">📷</a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer"className="social-link">💼</a>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Your company or city"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="newsletter-section">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get the latest updates on smart waste management</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;