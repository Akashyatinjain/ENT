import React, { useState } from 'react';
import './Reports.css';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('daily');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const reports = [
    {
      id: 1,
      name: 'Daily Collection Report',
      date: '2024-01-15',
      type: 'Daily',
      size: '2.4 MB',
      status: 'Ready'
    },
    {
      id: 2,
      name: 'Weekly Efficiency Analysis',
      date: '2024-01-14',
      type: 'Weekly',
      size: '4.8 MB',
      status: 'Ready'
    },
    {
      id: 3,
      name: 'Monthly Sustainability Report',
      date: '2024-01-01',
      type: 'Monthly',
      size: '8.2 MB',
      status: 'Ready'
    },
    {
      id: 4,
      name: 'Bin Fill Level Analysis',
      date: '2024-01-15',
      type: 'Analytics',
      size: '3.1 MB',
      status: 'Processing'
    },
    {
      id: 5,
      name: 'Route Optimization Report',
      date: '2024-01-13',
      type: 'Operations',
      size: '5.7 MB',
      status: 'Ready'
    },
    {
      id: 6,
      name: 'Environmental Impact Assessment',
      date: '2024-01-10',
      type: 'Environmental',
      size: '6.3 MB',
      status: 'Ready'
    }
  ];

  const handleGenerateReport = () => {
    alert('Report generation started! You will be notified when it\'s ready.');
  };

  const handleDownload = (reportName) => {
    alert(`Downloading ${reportName}...`);
  };

  return (
    <div className="reports page-container">
      <div className="container">
        <h1 className="section-title">Reports & Analytics</h1>
        <p className="section-subtitle">Generate and download detailed waste management reports</p>

        {/* Generate New Report */}
        <div className="generate-section">
          <h2>Generate New Report</h2>
          <div className="generate-form">
            <div className="form-row">
              <div className="form-group">
                <label>Report Type</label>
                <select value={selectedReport} onChange={(e) => setSelectedReport(e.target.value)}>
                  <option value="daily">Daily Collection Report</option>
                  <option value="weekly">Weekly Summary</option>
                  <option value="monthly">Monthly Analytics</option>
                  <option value="custom">Custom Report</option>
                </select>
              </div>
              <div className="form-group">
                <label>Start Date</label>
                <input 
                  type="date" 
                  value={dateRange.start}
                  onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input 
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                />
              </div>
            </div>
            <div className="form-actions">
              <button className="btn btn-primary" onClick={handleGenerateReport}>
                Generate Report
              </button>
              <button className="btn btn-secondary">
                Schedule Report
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="quick-stats">
          <div className="stat-box">
            <span className="stat-label">Reports Generated</span>
            <span className="stat-number">1,247</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Scheduled Reports</span>
            <span className="stat-number">8</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Storage Used</span>
            <span className="stat-number">156 MB</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Last Generated</span>
            <span className="stat-number">2 hours ago</span>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="recent-reports">
          <h2>Recent Reports</h2>
          <div className="reports-table-container">
            <table className="reports-table">
              <thead>
                <tr>
                  <th>Report Name</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Size</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id}>
                    <td>
                      <div className="report-name">
                        <span className="file-icon">📄</span>
                        {report.name}
                      </div>
                    </td>
                    <td>
                      <span className={`report-type ${report.type.toLowerCase()}`}>
                        {report.type}
                      </span>
                    </td>
                    <td>{report.date}</td>
                    <td>{report.size}</td>
                    <td>
                      <span className={`status-badge ${report.status.toLowerCase()}`}>
                        {report.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="btn-icon"
                          onClick={() => handleDownload(report.name)}
                          disabled={report.status !== 'Ready'}
                        >
                          ⬇️
                        </button>
                        <button className="btn-icon">👁️</button>
                        <button className="btn-icon">📧</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Report Templates */}
        <div className="templates-section">
          <h2>Report Templates</h2>
          <div className="templates-grid">
            <div className="template-card">
              <div className="template-icon">📊</div>
              <h3>Executive Summary</h3>
              <p>High-level overview for management</p>
              <button className="btn btn-secondary">Use Template</button>
            </div>
            <div className="template-card">
              <div className="template-icon">📈</div>
              <h3>Operational Report</h3>
              <p>Detailed collection and route data</p>
              <button className="btn btn-secondary">Use Template</button>
            </div>
            <div className="template-card">
              <div className="template-icon">🌍</div>
              <h3>Environmental Impact</h3>
              <p>Carbon footprint and sustainability metrics</p>
              <button className="btn btn-secondary">Use Template</button>
            </div>
            <div className="template-card">
              <div className="template-icon">💰</div>
              <h3>Cost Analysis</h3>
              <p>Financial performance and savings</p>
              <button className="btn btn-secondary">Use Template</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;