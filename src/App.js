import React, { useState } from 'react';
import Header from './components/Header';
import HeroSearch from './components/HeroSearch';
import SearchResultsPage from './pages/SearchResultsPage';
import MyBookingsPage from './pages/MyBookingsPage';
import './App.css';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [searchParams, setSearchParams] = useState({ state: '', city: '' });

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const handleSearchSubmit = (state, city) => {
    setSearchParams({ state, city });
    navigate('/search');
  };

  return (
    <div className="app-container">
      <Header currentPath={currentPath} navigate={navigate} />

      {currentPath === '/' && (
        <div className="home-page">
          <HeroSearch onSearch={handleSearchSubmit} />
        </div>
      )}

      {currentPath === '/search' && (
        <SearchResultsPage 
          state={searchParams.state} 
          city={searchParams.city} 
          onSearchSubmit={handleSearchSubmit}
          navigate={navigate}
        />
      )}

      {currentPath === '/my-bookings' && (
        <MyBookingsPage />
      )}
    </div>
  );
}