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
          if (showError) setLocationError(true);
        }
      );
    } else {
      setUserLocation(null); 
      if (showError) setLocationError(true);
    }
  };

  useEffect(() => {
    fetchLocation(null, false);
  }, []);

  const handleSetTravelMode = (mode) => {
    if (mode !== 'none' && !userLocation) {
      setLocationError(true);
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
          Please enable location access in your browser to display your exact location on the map and enable routing features.
          <button onClick={() => setLocationError(false)}>✕</button>
        </div>
      )}
      <Sidebar 
        selectedPlace={selectedPlace} 
        onSelectPlace={handleSelectPlace}
        travelMode={travelMode}
        setTravelMode={handleSetTravelMode}
        places={places}
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
