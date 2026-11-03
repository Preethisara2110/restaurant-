import React, { useState, useEffect } from 'react';

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(data);
  }, []);

  const handleCancel = (id) => {
    const updated = bookings.filter(b => b.id !== id);
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
  };

  return (
    <div className="my-bookings-page">
      <div className="bookings-header-banner">
        <h1>My Bookings</h1>
      </div>

      <main className="bookings-container">
        {bookings.length === 0 ? (
          <div className="empty-bookings">
            <p>No reservations found yet.</p>
          </div>
        ) : (
          <div className="bookings-list">
            {bookings.map((b) => (
              <div key={b.id} className="booking-card">
                <div className="booking-info">
                  <h3>{b.restaurantName}</h3>
                  <p className="location">📍 {b.address}, {b.city}, {b.state}</p>
                  <div className="booking-meta">
                    <span className="tag-date">📅 {b.date}</span>
                    <span className="tag-time">⏰ {b.time}</span>
                  </div>
                </div>
                <div className="booking-action">
                  <button className="btn-cancel" onClick={() => handleCancel(b.id)}>
                    Cancel Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}