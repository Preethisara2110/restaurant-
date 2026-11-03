import React, { useState, useEffect } from 'react';
import { fetchStates, fetchCitiesByState } from '../services/api';

export default function HeroSearch({ onSearch, initialState = '', initialCity = '' }) {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState(initialState);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [loadingStates, setLoadingStates] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);

  useEffect(() => {
    fetchStates().then(data => {
      setStates(data);
      setLoadingStates(false);
    });
  }, []);

  useEffect(() => {
    if (selectedState) {
      setLoadingCities(true);
      fetchCitiesByState(selectedState).then(data => {
        setCities(data);
        setLoadingCities(false);
      });
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      onSearch(selectedState, selectedCity);
    }
  };

  return (
    <div className="hero-search-section">
      <div className="hero-top-wrapper">
        <div className="hero-content">
          <h2>Skip the Wait! Reserve Online</h2>
          <h1>Table <span>Reservation</span></h1>
          <p>Find your favorite restaurant and reserve a table easily in seconds.</p>
        </div>

        {/* Hero Chef Illustration Matching Figma Preview */}
        <div className="hero-chef-image-container">
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80" 
            alt="Chef Illustration" 
            className="hero-chef-img" 
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="search-box-card">
        <div className="search-field">
          <label>State</label>
          <div id="state" className="dropdown-wrapper">
            <select 
              value={selectedState} 
              onChange={(e) => { setSelectedState(e.target.value); setSelectedCity(''); }}
              disabled={loadingStates}
            >
              <option value="">Select State</option>
              {states.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <div className="search-field">
          <label>City</label>
          <div id="city" className="dropdown-wrapper">
            <select 
              value={selectedCity} 
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!selectedState || loadingCities}
            >
              <option value="">Select City</option>
              {cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <button type="submit" id="searchBtn" className="btn-search">
          Search
        </button>
      </form>
    </div>
  );
}