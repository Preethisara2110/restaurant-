import React, { useState, useEffect } from 'react';
import HeroSearch from '../components/HeroSearch';
import RestaurantCard from '../components/RestaurantCard';
import BookingModal from '../components/BookingModal';
import { fetchRestaurants } from '../services/api';

export default function SearchResultsPage({ state, city, onSearchSubmit, navigate }) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    if (state && city) {
      setLoading(true);
      fetchRestaurants(state, city).then(data => {
        setRestaurants(data);
        setLoading(false);
      });
    }
  }, [state, city]);

  return (
    <div className="search-results-page">
      <HeroSearch onSearch={onSearchSubmit} initialState={state} initialCity={city} />

      <main className="results-container">
        <h1 className="results-heading">
          {restaurants.length} restaurants available in {city}
        </h1>

        {loading ? (
          <div className="loading-spinner">Loading restaurants...</div>
        ) : (
          <div className="restaurants-list">
            {restaurants.map((res, index) => (
              <RestaurantCard 
                key={res.id || index} 
                restaurant={res} 
                onBook={(item) => setSelectedRestaurant(item)} 
              />
            ))}
          </div>
        )}
      </main>

      {selectedRestaurant && (
        <BookingModal 
          restaurant={selectedRestaurant} 
          onClose={() => setSelectedRestaurant(null)} 
          onBookingSuccess={() => {
            setSelectedRestaurant(null);
            navigate('/my-bookings');
          }}
        />
      )}
    </div>
  );
}