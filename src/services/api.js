const BASE_URL = 'https://restaurantdata.onrender.com';

export const fetchStates = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);
    const res = await fetch(`${BASE_URL}/states`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error('Failed to fetch states');
    return await res.json();
  } catch (err) {
    console.warn('API slow/down, returning fallback states:', err);
    return ['Texas', 'California', 'New York', 'Florida', 'Illinois'];
  }
};

export const fetchCitiesByState = async (state) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);
    const res = await fetch(`${BASE_URL}/cities/${encodeURIComponent(state)}`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error('Failed to fetch cities');
    return await res.json();
  } catch (err) {
    console.warn('API slow/down, returning fallback cities:', err);
    const fallbackMap = {
      Texas: ['Austin', 'Houston', 'Dallas', 'San Antonio'],
      California: ['Los Angeles', 'San Francisco', 'San Diego'],
      'New York': ['New York City', 'Buffalo', 'Rochester'],
      Florida: ['Miami', 'Orlando', 'Tampa'],
      Illinois: ['Chicago', 'Springfield']
    };
    return fallbackMap[state] || ['Austin', 'Dallas'];
  }
};

export const fetchRestaurants = async (state, city) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    const res = await fetch(`${BASE_URL}/restaurants?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error('Failed to fetch restaurants');
    return await res.json();
  } catch (err) {
    console.warn('API slow/down, returning fallback restaurants:', err);
    return [
      {
        id: 'r1',
        'Restaurant Name': 'The Golden Spoon Bistro',
        Address: '104 Main Street, Downtown',
        City: city || 'Austin',
        State: state || 'Texas',
        'Overall Rating': 4.8
      },
      {
        id: 'r2',
        'Restaurant Name': 'Savory Grill & Bar',
        Address: '782 Lakeview Blvd',
        City: city || 'Austin',
        State: state || 'Texas',
        'Overall Rating': 4.5
      }
    ];
  }
};