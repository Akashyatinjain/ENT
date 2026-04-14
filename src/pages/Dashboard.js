
import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [binData, setBinData] = useState([]);
  const [stats, setStats] = useState({
    totalBins: 48,
    fullBins: 12,
    collecting: 8,
    avgFill: 67
  });

  useEffect(() => {
    // Simulate real-time data updates
    const generateBinData = () => {
      const locations = ['Downtown', 'Northside', 'Eastside', 'Westside', 'Southside', 'Industrial', 'Park Area', 'Market'];
      return locations.map((location, index) => ({
        id: index + 1,
        location,
        fillLevel: Math.floor(Math.random() * 30) + 50, // 50-80%
        status: Math.random() > 0.3 ? 'active' : 'full',
        lastUpdated: new Date().toLocaleTimeString(),
        temperature: Math.floor(Math.random() * 10) + 20,
        battery: Math.floor(Math.random() * 30) + 70
      }));
    };

    setBinData(generateBinData());

    const interval = setInterval(() => {
      setBinData(generateBinData());
      setStats(prev => ({
        ...prev,
        fullBins: Math.floor(Math.random() * 8) + 8,
        avgFill: Math.floor(Math.random() * 20) + 60
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (fillLevel) => {
    if (fillLevel < 60) return '#2ecc71';
    if (fillLevel < 80) return '#f39c12';
    return '#e74c3c';
  };

  return (
    <div className="dashboard page-container">
      <div className="container">
        <div className="dashboard-header">
          <h1 className="section-title">Live Monitoring Dashboard</h1>
          <div className="live-indicator">
            <span className="pulse"></span>
            <span>Live Data Streaming</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🗑️</div>
            <div className="stat-content">
              <h3>Total Bins</h3>
              <p className="stat-value">{stats.totalBins}</p>
              <span className="stat-trend positive">Active</span>
            </div>
          </div>
          <div className="stat-card warning">
            <div className="stat-icon">⚠️</div>
            <div className="stat-content">
              <h3>Bins = 80% Full</h3>
              <p className="stat-value">{stats.fullBins}</p>
              <span className="stat-trend warning">Needs Collection</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🚛</div>
            <div className="stat-content">
              <h3>In Collection</h3>
              <p className="stat-value">{stats.collecting}</p>
              <span className="stat-trend">In Progress</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>Average Fill Level</h3>
              <p className="stat-value">{stats.avgFill}%</p>
              <span className="stat-trend">System Normal</span>
            </div>
          </div>
        </div>

        {/* Live Bin Status Table */}
        <div className="bin-table-container">
          <h2>Live Bin Status</h2>
          <div className="table-responsive">
            <table className="bin-table">
              <thead>
                <tr>
                  <th>Bin ID</th>
                  <th>Location</th>
                  <th>Fill Level</th>
                  <th>Status</th>
                  <th>Battery</th>
                  <th>Last Updated</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {binData.map((bin) => (
                  <tr key={bin.id}>
                    <td><strong>#{bin.id.toString().padStart(3, '0')}</strong></td>
                    <td>{bin.location}</td>
                    <td>
                      <div className="fill-level-bar">
                        <div 
                          className="fill-level-progress"
                          style={{
                            width: `${bin.fillLevel}%`,
                            backgroundColor: getStatusColor(bin.fillLevel)
                          }}
                        ></div>
                        <span className="fill-level-text">{bin.fillLevel}%</span>
                      </div>
                    </td>
                    <td>
                      <span className={`status-badge ${bin.status}`}>
                        {bin.status === 'active' ? '🟢 Active' : '🔴 Full'}
                      </span>
                    </td>
                    <td>
                      <div className="battery-indicator">
                        <span>{bin.battery}%</span>
                        <div className="battery-bar">
                          <div 
                            className="battery-level"
                            style={{ width: `${bin.battery}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td>{bin.lastUpdated}</td>
                    <td>
                      <button className="btn-view-details">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Map Preview */}
        <div className="map-section">
          <h2>Bin Location Map</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-grid">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`map-marker ${Math.random() > 0.7 ? 'full' : 'active'}`}
                    style={{
                      left: `${Math.random() * 90}%`,
                      top: `${Math.random() * 90}%`
                    }}
                  >
                    <span className="marker-icon">📍</span>
                  </div>
                ))}
              </div>
              <p className="map-note">Interactive map showing all smart bin locations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;