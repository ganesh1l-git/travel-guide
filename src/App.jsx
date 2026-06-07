import { useState, useEffect } from 'react';
import MapArea from './components/MapArea';
import Sidebar from './components/Sidebar';
import { places } from './data/places';
import './index.css';

function App() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [travelMode, setTravelMode] = useState('none'); // 'none', 'road', 'train'
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [manualLocationInput, setManualLocationInput] = useState('');
  const [modalError, setModalError] = useState('');

  const fetchLocation = (onSuccess, showError = true) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Success
          setUserLocation([position.coords.latitude, position.coords.longitude]);
          setLocationError(false);
          if (onSuccess) onSuccess([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.warn("Geolocation denied or unavailable.");
          setUserLocation(null); 
          if (showError) {
            setLocationError(true);
            setShowLocationModal(true); // Open modal on failure/denial
          }
        }
      );
    } else {
      setUserLocation(null); 
      if (showError) {
        setLocationError(true);
        setShowLocationModal(true); // Open modal on failure/denial
      }
    }
  };

  useEffect(() => {
    fetchLocation(null, false);
  }, []);

  const handleManualLocationSubmit = async (e) => {
    e.preventDefault();
    setModalError('');
    const query = manualLocationInput.trim();
    if (!query) {
      setModalError('Please enter a location.');
      return;
    }

    // 1. Try parsing coordinates directly e.g. "28.61, 77.20"
    const coordsMatch = query.match(/^([-+]?\d+\.?\d*)\s*,\s*([-+]?\d+\.?\d*)$/);
    if (coordsMatch) {
      const lat = parseFloat(coordsMatch[1]);
      const lon = parseFloat(coordsMatch[2]);
      if (lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180) {
        setUserLocation([lat, lon]);
        setShowLocationModal(false);
        setLocationError(false);
        setManualLocationInput('');
        return;
      } else {
        setModalError('Invalid coordinates. Latitude must be -90 to 90 and Longitude -180 to 180.');
        return;
      }
    }

    // 2. Offline match against the 50 cities in places.js
    const lowerQuery = query.toLowerCase();
    const matchedPlace = places.find(p => p.name.toLowerCase().includes(lowerQuery) || p.id === lowerQuery);
    if (matchedPlace) {
      setUserLocation(matchedPlace.coordinates);
      setShowLocationModal(false);
      setLocationError(false);
      setManualLocationInput('');
      return;
    }

    // 3. Online lookup via OpenStreetMap Nominatim
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`);
      const data = await res.json();
      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        setUserLocation([lat, lon]);
        setShowLocationModal(false);
        setLocationError(false);
        setManualLocationInput('');
      } else {
        setModalError('Location not found. Try entering a larger city nearby or coordinates.');
      }
    } catch (err) {
      console.error("Geocoding failed:", err);
      setModalError('Search failed. Please check your internet connection or enter coordinates.');
    }
  };

  const handleSetTravelMode = (mode) => {
    if (mode !== 'none' && !userLocation) {
      setLocationError(true);
      setShowLocationModal(true); // Prompt modal if attempting travel mode without location
      setTravelMode('none');
    } else {
      setTravelMode(mode);
      if (mode === 'none') {
        setLocationError(false);
      }
    }
  };

  // When changing place, reset travel mode
  const handleSelectPlace = (place) => {
    setSelectedPlace(place);
    setTravelMode('none');
  };

  return (
    <div className="app-container">
      {locationError && (
        <div className="location-warning">
          Location access disabled.
          <button 
            style={{ 
              marginLeft: '12px', 
              textDecoration: 'underline', 
              fontWeight: 600, 
              border: 'none', 
              background: 'transparent', 
              color: '#3b82f6', 
              cursor: 'pointer',
              fontFamily: 'inherit'
            }} 
            onClick={() => { setShowLocationModal(true); setLocationError(false); }}
          >
            Enter Location Manually
          </button>
          <button onClick={() => setLocationError(false)} style={{ marginLeft: '12px' }}>✕</button>
        </div>
      )}

      {showLocationModal && (
        <div className="modal-overlay" onClick={() => setShowLocationModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowLocationModal(false)}>✕</button>
            <h3>Set Your Location</h3>
            <p>Enter your present city name or coordinates (latitude, longitude) to see flights, trains, and routes from your location.</p>
            <form onSubmit={handleManualLocationSubmit}>
              <div className="location-input-container">
                <input 
                  type="text" 
                  className="modal-input" 
                  placeholder="e.g. Delhi, Mumbai, or 28.61, 77.20" 
                  value={manualLocationInput}
                  onChange={(e) => setManualLocationInput(e.target.value)}
                  autoFocus
                />
              </div>
              {modalError && <div className="modal-error">⚠️ {modalError}</div>}
              <div className="modal-actions">
                <button type="button" className="modal-btn modal-btn-secondary" onClick={() => setShowLocationModal(false)}>Cancel</button>
                <button type="submit" className="modal-btn modal-btn-primary">Set Location</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Sidebar 
        selectedPlace={selectedPlace} 
        onSelectPlace={handleSelectPlace}
        travelMode={travelMode}
        setTravelMode={handleSetTravelMode}
        places={places}
        userLocation={userLocation}
      />
      <MapArea 
        selectedPlace={selectedPlace} 
        onSelectPlace={handleSelectPlace}
        travelMode={travelMode}
        userLocation={userLocation}
        places={places}
        onRequestLocation={fetchLocation}
      />
    </div>
  );
}

export default App;

