import React from 'react';

export default function Footer({ navigate }) {
  return (
    <footer style={{ background: '#102851', color: '#fff', padding: '60px 20px 30px', marginTop: '60px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        <div>
          <h3 style={{ color: '#2AA7FF', fontSize: '20px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🍽️</span> Restaurant
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.6' }}>
            Book table reservations instantly across major cities in the USA. Fast, free, and reliable table bookings.
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: '15px', marginBottom: '15px', color: '#fff', fontWeight: 600 }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#94A3B8', fontSize: '14px', lineHeight: '2.2' }}>
            <li><button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>Find Restaurants</button></li>
            <li><button onClick={() => navigate('/my-bookings')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>My Bookings</button></li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: '15px', marginBottom: '15px', color: '#fff', fontWeight: 600 }}>Support & Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#94A3B8', fontSize: '14px', lineHeight: '2.2' }}>
            <li><a href="#help" style={{ color: 'inherit', textDecoration: 'none' }}>Help Center</a></li>
            <li><a href="#terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a></li>
            <li><a href="#privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', maxWidth: '1000px', margin: '0 auto', paddingTop: '25px', textAlign: 'center', color: '#94A3B8', fontSize: '13px' }}>
        © 2026 Restaurant Reservation App. All rights reserved.
      </div>
    </footer>
  );
}