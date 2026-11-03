import React from 'react';

export default function RestaurantCard({ restaurant, onBook }) {
  const name = restaurant['Restaurant Name'] || restaurant.name;
  const address = restaurant.Address || restaurant.address;
  const city = restaurant.City || restaurant.city;
  const state = restaurant.State || restaurant.state;
  const rating = restaurant['Overall Rating'] || restaurant.rating || 4.5;

  // Real food photo placeholder matching Figma listing preview
  const defaultImage = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80";

  return (
    <div className="restaurant-card">
      <div className="restaurant-card-left">
        <img 
          src={restaurant.image || defaultImage} 
          alt={name} 
          className="restaurant-thumb-img"
          onError={(e) => { e.target.src = defaultImage; }}
        />
        <div className="restaurant-info">
          <h3>{name}</h3>
          <p className="location-text">📍 {address}, {city}, {state}</p>
          <div className="rating-badge">
            ⭐ <span>{rating}</span> Overall Rating
          </div>
        </div>
      </div>
      <div className="restaurant-action">
        <button className="btn-book-free" onClick={() => onBook(restaurant)}>
          Book FREE Reservation
        </button>
      </div>
    </div>
  );
}