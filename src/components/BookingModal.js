import React, { useState } from 'react';

export default function BookingModal({ restaurant, onClose, onBookingSuccess }) {
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      fullDate: d.toISOString().split('T')[0],
      displayDay: i === 0 ? 'Today' : d.toLocaleDateString('en-US', { weekday: 'short' }),
      displayDate: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
  });

  const [selectedDate, setSelectedDate] = useState(dates[0].fullDate);
  const [selectedTime, setSelectedTime] = useState('');

  const slots = {
    Morning: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
    Afternoon: ['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM'],
    Evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM']
  };

  const handleConfirm = () => {
    if (!selectedTime) {
      alert('Please select a time slot.');
      return;
    }

    const name = restaurant['Restaurant Name'] || restaurant.name;
    const address = restaurant.Address || restaurant.address;
    const city = restaurant.City || restaurant.city;
    const state = restaurant.State || restaurant.state;

    const newBooking = {
      id: Date.now(),
      restaurantName: name,
      address,
      city,
      state,
      date: selectedDate,
      time: selectedTime,
      createdAt: new Date().toISOString()
    };

    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const updatedBookings = [newBooking, ...existingBookings];
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    onBookingSuccess();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Book Table - {restaurant['Restaurant Name'] || restaurant.name}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="date-tabs">
          {dates.map((d) => (
            <button
              key={d.fullDate}
              className={`date-tab ${selectedDate === d.fullDate ? 'active' : ''}`}
              onClick={() => setSelectedDate(d.fullDate)}
            >
              <p className="day-label">{d.displayDay}</p>
              <span className="date-label">{d.displayDate}</span>
            </button>
          ))}
        </div>

        <div className="slots-section">
          <div className="slot-group">
            <p>Morning</p>
            <div className="slot-buttons">
              {slots.Morning.map(t => (
                <button
                  key={t}
                  className={`time-btn ${selectedTime === t ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="slot-group">
            <p>Afternoon</p>
            <div className="slot-buttons">
              {slots.Afternoon.map(t => (
                <button
                  key={t}
                  className={`time-btn ${selectedTime === t ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="slot-group">
            <p>Evening</p>
            <div className="slot-buttons">
              {slots.Evening.map(t => (
                <button
                  key={t}
                  className={`time-btn ${selectedTime === t ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-confirm" onClick={handleConfirm}>
            Confirm Reservation
          </button>
        </div>
      </div>
    </div>
  );
}