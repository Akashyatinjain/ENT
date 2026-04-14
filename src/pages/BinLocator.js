import React, { useState, useEffect, useCallback } from 'react';
import './BinLocator.css';

const BinLocator = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyBins, setNearbyBins] = useState([]);
  const [selectedBin, setSelectedBin] = useState(null);
  const [searchRadius, setSearchRadius] = useState(5);
  const [loading, setLoading] = useState(true);

// ✅ FIRST define function
const generateNearbyBins = useCallback((lat, lng) => {
  const binTypes = ['General Waste', 'Recycling', 'Organic', 'E-Waste', 'Hazardous'];
  const locations = [];

  for (let i = 0; i < 15; i++) {
    const distance = Math.random() * searchRadius;

    locations.push({
      id: i + 1,
      type: binTypes[Math.floor(Math.random() * binTypes.length)],
      distance: distance.toFixed(2),
      fillLevel: Math.floor(Math.random() * 100),
      address: `${Math.floor(Math.random() * 999)} Main Street`,
      status: Math.random() > 0.3 ? 'Operational' : 'Full',
      lastEmptied: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      lat: lat + (Math.random() - 0.5) * 0.05,
      lng: lng + (Math.random() - 0.5) * 0.05
    });
  }

  setNearbyBins(locations.sort((a, b) => a.distance - b.distance));
}, [searchRadius]);


// ✅ THEN useEffect
useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setUserLocation({ lat, lng });
        generateNearbyBins(lat, lng);
        setLoading(false);
      },
      () => {
        const lat = 40.7128;
        const lng = -74.0060;

        setUserLocation({ lat, lng });
        generateNearbyBins(lat, lng);
        setLoading(false);
      }
    );
  }
}, [generateNearbyBins]);


const handleRadiusChange = (e) => {
  const newRadius = parseInt(e.target.value);
  setSearchRadius(newRadius);

  if (userLocation) {
    generateNearbyBins(userLocation.lat, userLocation.lng);
  }
};

  const getFillColor = (level) => {
    if (level < 60) return '#2ecc71';
    if (level < 80) return '#f39c12';
    return '#e74c3c';
  };

  return (
    <div className="bin-locator page-container">
      <div className="container">
        <h1 className="section-title">Smart Bin Locator</h1>
        <p className="section-subtitle">Find the nearest smart waste bins in your area</p>

        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Locating nearby bins...</p>
          </div>
        ) : (
          <>
            {/* Map Section */}
            <div className="map-wrapper">
              <div className="map-controls">
                <div className="radius-control">
                  <label>Search Radius: {searchRadius} km</label>
                  <input 
                    type="range" 
                    min="1" 
                    max="20" 
                    value={searchRadius}
                    onChange={handleRadiusChange}
                  />
                </div>
                <button 
                  className="btn btn-primary"
                  onClick={() => userLocation && generateNearbyBins(userLocation.lat, userLocation.lng)}
                >
                  🔄 Refresh
                </button>
              </div>
              
              <div className="map-display">
                <div className="interactive-map">
                  <div className="map-center-marker">
                    <span className="you-are-here">📍 You are here</span>
                  </div>
                  {nearbyBins.map((bin) => (
                    <div 
                      key={bin.id}
                      className={`bin-marker ${bin.status.toLowerCase()}`}
                      style={{
                        left: `${(bin.lng - userLocation.lng) * 1000 + 50}%`,
                        top: `${(bin.lat - userLocation.lat) * -1000 + 50}%`,
                        backgroundColor: getFillColor(bin.fillLevel)
                      }}
                      onClick={() => setSelectedBin(bin)}
                    >
                      <span className="marker-icon">🗑️</span>
                      <span className="marker-distance">{bin.distance}km</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bin List */}
            <div className="bins-list-section">
              <h2>Nearby Bins ({nearbyBins.length})</h2>
              <div className="bins-grid">
                {nearbyBins.map((bin) => (
                  <div 
                    key={bin.id} 
                    className={`bin-card ${selectedBin?.id === bin.id ? 'selected' : ''}`}
                    onClick={() => setSelectedBin(bin)}
                  >
                    <div className="bin-card-header">
                      <span className="bin-type-icon">
                        {bin.type === 'Recycling' ? '♻️' : 
                         bin.type === 'Organic' ? '🌱' : 
                         bin.type === 'E-Waste' ? '💻' : '🗑️'}
                      </span>
                      <span className={`bin-status ${bin.status.toLowerCase()}`}>
                        {bin.status}
                      </span>
                    </div>
                    <h3>{bin.type}</h3>
                    <p className="bin-address">📍 {bin.address}</p>
                    <p className="bin-distance">🚶 {bin.distance} km away</p>
                    <div className="bin-fill-level">
                      <span>Fill Level:</span>
                      <div className="fill-bar">
                        <div 
                          className="fill-progress"
                          style={{
                            width: `${bin.fillLevel}%`,
                            backgroundColor: getFillColor(bin.fillLevel)
                          }}
                        ></div>
                      </div>
                      <span className="fill-percentage">{bin.fillLevel}%</span>
                    </div>
                    <p className="bin-last-emptied">🕐 Last emptied: {bin.lastEmptied}</p>
                    <button className="btn btn-secondary btn-navigate">
                      🧭 Navigate
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Bin Details */}
            {selectedBin && (
              <div className="bin-details-modal">
                <div className="modal-content">
                  <button className="modal-close" onClick={() => setSelectedBin(null)}>✕</button>
                  <h2>Bin Details - #{selectedBin.id}</h2>
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Type:</span>
                      <span className="detail-value">{selectedBin.type}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Status:</span>
                      <span className={`detail-value ${selectedBin.status.toLowerCase()}`}>
                        {selectedBin.status}
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Fill Level:</span>
                      <span className="detail-value">{selectedBin.fillLevel}%</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Distance:</span>
                      <span className="detail-value">{selectedBin.distance} km</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Address:</span>
                      <span className="detail-value">{selectedBin.address}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Last Emptied:</span>
                      <span className="detail-value">{selectedBin.lastEmptied}</span>
                    </div>
                  </div>
                  <div className="modal-actions">
                    <button className="btn btn-primary">Get Directions</button>
                    <button className="btn btn-secondary">Report Issue</button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BinLocator;