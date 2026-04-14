import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Analytics.css';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('week');
  
  const weeklyData = [
    { day: 'Mon', waste: 1250, recycling: 480, organic: 320 },
    { day: 'Tue', waste: 1180, recycling: 520, organic: 290 },
    { day: 'Wed', waste: 1320, recycling: 450, organic: 340 },
    { day: 'Thu', waste: 1400, recycling: 550, organic: 310 },
    { day: 'Fri', waste: 1550, recycling: 600, organic: 380 },
    { day: 'Sat', waste: 1680, recycling: 650, organic: 420 },
    { day: 'Sun', waste: 1450, recycling: 580, organic: 360 }
  ];

  const wasteComposition = [
    { name: 'General Waste', value: 45, color: '#e74c3c' },
    { name: 'Recycling', value: 30, color: '#2ecc71' },
    { name: 'Organic', value: 15, color: '#f39c12' },
    { name: 'E-Waste', value: 7, color: '#3498db' },
    { name: 'Hazardous', value: 3, color: '#9b59b6' }
  ];

  const efficiencyData = [
    { month: 'Jan', efficiency: 82, cost: 12500 },
    { month: 'Feb', efficiency: 85, cost: 11800 },
    { month: 'Mar', efficiency: 88, cost: 11200 },
    { month: 'Apr', efficiency: 87, cost: 11500 },
    { month: 'May', efficiency: 90, cost: 10800 },
    { month: 'Jun', efficiency: 92, cost: 10200 }
  ];

  const topLocations = [
    { location: 'Downtown', collections: 342, avgFill: 78 },
    { location: 'Northside', collections: 298, avgFill: 72 },
    { location: 'Eastside', collections: 276, avgFill: 68 },
    { location: 'Westside', collections: 254, avgFill: 65 },
    { location: 'Southside', collections: 231, avgFill: 70 }
  ];

  return (
    <div className="analytics page-container">
      <div className="container">
        <div className="analytics-header">
          <h1 className="section-title">Waste Analytics Dashboard</h1>
          <div className="time-range-selector">
            <button 
              className={timeRange === 'day' ? 'active' : ''}
              onClick={() => setTimeRange('day')}
            >
              Day
            </button>
            <button 
              className={timeRange === 'week' ? 'active' : ''}
              onClick={() => setTimeRange('week')}
            >
              Week
            </button>
            <button 
              className={timeRange === 'month' ? 'active' : ''}
              onClick={() => setTimeRange('month')}
            >
              Month
            </button>
            <button 
              className={timeRange === 'year' ? 'active' : ''}
              onClick={() => setTimeRange('year')}
            >
              Year
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-icon">📊</div>
            <div className="metric-content">
              <h3>Total Waste Collected</h3>
              <p className="metric-value">9,830 kg</p>
              <span className="metric-trend positive">↑ 12.5%</span>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">♻️</div>
            <div className="metric-content">
              <h3>Recycling Rate</h3>
              <p className="metric-value">34.5%</p>
              <span className="metric-trend positive">↑ 5.2%</span>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">💰</div>
            <div className="metric-content">
              <h3>Cost Savings</h3>
              <p className="metric-value">$4,250</p>
              <span className="metric-trend positive">↑ 18.3%</span>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">🎯</div>
            <div className="metric-content">
              <h3>Collection Efficiency</h3>
              <p className="metric-value">92%</p>
              <span className="metric-trend positive">↑ 4%</span>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="charts-grid">
          {/* Waste Collection Trends */}
          <div className="chart-card">
            <h2>Waste Collection Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="waste" stroke="#e74c3c" name="General Waste" />
                <Line type="monotone" dataKey="recycling" stroke="#2ecc71" name="Recycling" />
                <Line type="monotone" dataKey="organic" stroke="#f39c12" name="Organic" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Waste Composition */}
          <div className="chart-card">
            <h2>Waste Composition</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={wasteComposition}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {wasteComposition.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Efficiency vs Cost */}
          <div className="chart-card">
            <h2>Collection Efficiency vs Cost</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="efficiency" fill="#2ecc71" name="Efficiency %" />
                <Bar yAxisId="right" dataKey="cost" fill="#3498db" name="Cost ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Top Locations */}
          <div className="chart-card">
            <h2>Top Performing Locations</h2>
            <div className="locations-list">
              {topLocations.map((loc, index) => (
                <div key={index} className="location-item">
                  <div className="location-info">
                    <span className="location-rank">#{index + 1}</span>
                    <span className="location-name">{loc.location}</span>
                  </div>
                  <div className="location-stats">
                    <span className="collections">{loc.collections} collections</span>
                    <div className="fill-indicator">
                      <div 
                        className="fill-bar"
                        style={{ width: `${loc.avgFill}%` }}
                      ></div>
                      <span>{loc.avgFill}% avg fill</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Predictive Analytics */}
        <div className="predictive-section">
          <h2>AI-Powered Predictions</h2>
          <div className="predictions-grid">
            <div className="prediction-card">
              <div className="prediction-icon">🔮</div>
              <h3>Next Week Forecast</h3>
              <p className="prediction-value">10,450 kg</p>
              <span className="prediction-note">Expected waste generation</span>
            </div>
            <div className="prediction-card">
              <div className="prediction-icon">⚡</div>
              <h3>Peak Collection Time</h3>
              <p className="prediction-value">2:00 PM - 4:00 PM</p>
              <span className="prediction-note">Tomorrow</span>
            </div>
            <div className="prediction-card">
              <div className="prediction-icon">🎯</div>
              <h3>Optimization Potential</h3>
              <p className="prediction-value">15%</p>
              <span className="prediction-note">Additional cost savings</span>
            </div>
            <div className="prediction-card">
              <div className="prediction-icon">📈</div>
              <h3>Recycling Rate Target</h3>
              <p className="prediction-value">40%</p>
              <span className="prediction-note">Achievable by next month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;