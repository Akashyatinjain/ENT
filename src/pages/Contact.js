import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will respond within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  return (
    <div className="contact-page page-container">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">Get in touch with our team for any inquiries or support</p>

        <div className="contact-wrapper">
          {/* Contact Information */}
          <div className="contact-info-sidebar">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>123 Green Street, Tech Park</p>
              <p>Eco City, EC 12345</p>
              <p>United States</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>Sales: +1 (555) 123-4567</p>
              <p>Support: +1 (555) 987-6543</p>
              <p>Mon-Fri: 9:00 AM - 6:00 PM EST</p>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email Us</h3>
              <p>General: info@smartwaste.com</p>
              <p>Support: support@smartwaste.com</p>
              <p>Sales: sales@smartwaste.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Available 24/7 for urgent inquiries</p>
              <button className="btn btn-primary chat-btn">Start Chat</button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
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
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiryType">Inquiry Type *</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="demo">Request Demo</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
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
                  placeholder="Please provide details about your inquiry..."
                  rows="6"
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Send Message</button>
                <button type="button" className="btn btn-secondary">Schedule Call</button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h2>Our Location</h2>
          <div className="map-placeholder">
            <div className="map-overlay">
              <span className="office-marker">📍 SmartWaste HQ</span>
            </div>
            <p className="map-note">123 Green Street, Tech Park, Eco City</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How does the smart bin system work?</h3>
              <p>Our smart bins use IoT sensors to monitor fill levels in real-time, sending data to our cloud platform for optimized collection routing.</p>
            </div>
            <div className="faq-item">
              <h3>What is the implementation timeline?</h3>
              <p>Typical deployment takes 2-4 weeks, including sensor installation, system setup, and staff training.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a mobile app available?</h3>
              <p>Yes, we offer mobile apps for both citizens and collection teams on iOS and Android platforms.</p>
            </div>
            <div className="faq-item">
              <h3>What kind of support do you provide?</h3>
              <p>We offer 24/7 technical support, regular maintenance, and comprehensive training for all users.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;