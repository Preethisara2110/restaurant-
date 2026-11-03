import React from 'react';

export default function Header({ currentPath, navigate }) {
  return (
    <header className="site-header">
      <div className="top-banner">
        The health and safety of our community is our top priority.
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <span>🍽️</span>
            <span>Restaurant</span>
          </div>
          <div className="nav-links">
            <button className={currentPath === '/' ? 'active' : ''} onClick={() => navigate('/')}>
              Find Restaurants
            </button>
            <button onClick={() => navigate('/')}>Locations</button>
            <button 
              id="my-bookings-link"
              className={currentPath === '/my-bookings' ? 'active' : ''} 
              onClick={() => navigate('/my-bookings')}
            >
              My Bookings
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}