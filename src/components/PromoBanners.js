import React from 'react';

export default function PromoBanners() {
  return (
    <div className="app-download-banner">
      <div className="app-download-content">
        <div className="app-download-phone">
          <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80" 
            alt="Mobile App Preview" 
            className="phone-mockup-img"
          />
        </div>
        <div className="app-download-text">
          <h2>Download the Restaurant Booking App</h2>
          <p>Book table reservations on the go, view history, and get special discounts directly from your mobile device.</p>
          <div className="store-buttons">
            <button className="btn-store"> App Store</button>
            <button className="btn-store">▶ Google Play</button>
          </div>
        </div>
      </div>
    </div>
  );
}