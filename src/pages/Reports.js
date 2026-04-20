import React, { useState } from 'react';
import './Reports.css';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('daily');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [reports, setReports] = useState([
    { id: 1, name: 'Daily Collection Report', date: '2024-01-15', type: 'Daily', size: '2.4 MB', status: 'Ready' },
    { id: 2, name: 'Weekly Efficiency Analysis', date: '2024-01-14', type: 'Weekly', size: '4.8 MB', status: 'Ready' },
    { id: 3, name: 'Monthly Sustainability Report', date: '2024-01-01', type: 'Monthly', size: '8.2 MB', status: 'Ready' },
    { id: 4, name: 'Bin Fill Level Analysis', date: '2024-01-15', type: 'Analytics', size: '3.1 MB', status: 'Processing' },
    { id: 5, name: 'Route Optimization Report', date: '2024-01-13', type: 'Operations', size: '5.7 MB', status: 'Ready' },
    { id: 6, name: 'Environmental Impact Assessment', date: '2024-01-10', type: 'Environmental', size: '6.3 MB', status: 'Ready' },
  ]);
  const [totalCount, setTotalCount] = useState(1247);
  const [storageUsed, setStorageUsed] = useState(156);
  const [lastGen, setLastGen] = useState('2 hours ago');

  const reportNames = {
    daily: 'Daily Collection Report',
    weekly: 'Weekly Summary',
    monthly: 'Monthly Analytics',
    custom: 'Custom Report',
  };

  const reportTypes = {
    daily: 'Daily',
    weekly: 'Weekly',
    monthly: 'Monthly',
    custom: 'Custom',
  };

  const randomSize = () => {
    const sizes = [2.4, 3.1, 4.8, 5.7, 6.3, 8.2];
    return sizes[Math.floor(Math.random() * sizes.length)].toFixed(1) + ' MB';
  };

  const handleGenerateReport = () => {
    const today = new Date().toISOString().split('T')[0];
    const size = randomSize();
    const newReport = {
      id: Date.now(),
      name: reportNames[selectedReport] || 'Custom Report',
      date: dateRange.end || dateRange.start || today,
      type: reportTypes[selectedReport] || 'Custom',
      size,
      status: 'Processing',
      isNew: true,
    };

    // Add to top of list immediately
    setReports(prev => [newReport, ...prev]);
    setTotalCount(prev => prev + 1);
    setStorageUsed(prev => prev + parseFloat(size));
    setLastGen('Just now');

    // Simulate processing → Ready after 2.5s
    setTimeout(() => {
      setReports(prev =>
        prev.map(r =>
          r.id === newReport.id ? { ...r, status: 'Ready', isNew: false } : r
        )
      );
    }, 2500);
  };

  const handleDownload = (reportName) => {
    alert(`Downloading ${reportName}...`);
  };

  return (
    <div className="reports page-container">
      <div className="container">
        <h1 className="section-title">Reports & Analytics</h1>
        <p className="section-subtitle">Generate and download detailed waste management reports</p>

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
                <input type="date" value={dateRange.start}
                  onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })} />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input type="date" value={dateRange.end}
                  onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })} />
              </div>
            </div>
            <div className="form-actions">
              <button className="btn btn-primary" onClick={handleGenerateReport}>
                Generate Report
              </button>
              <button className="btn btn-secondary">Schedule Report</button>
            </div>
          </div>
        </div>

        <div className="quick-stats">
          <div className="stat-box">
            <span className="stat-label">Reports Generated</span>
            <span className="stat-number">{totalCount.toLocaleString()}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Scheduled Reports</span>
            <span className="stat-number">8</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Storage Used</span>
            <span className="stat-number">{Math.round(storageUsed)} MB</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Last Generated</span>
            <span className="stat-number">{lastGen}</span>
          </div>
        </div>

        <div className="recent-reports">
          <h2>Recent Reports</h2>
          <div className="reports-table-container">
            <table className="reports-table">
              <thead>
                <tr>
                  <th>Report Name</th><th>Type</th><th>Date</th>
                  <th>Size</th><th>Status</th><th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id} className={report.isNew ? 'row-highlight' : ''}>
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
                        <button className="btn-icon" onClick={() => handleDownload(report.name)}
                          disabled={report.status !== 'Ready'}>⬇️</button>
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

        {/* ... templates section unchanged ... */}
      </div>
    </div>
  );
};

export default Reports;