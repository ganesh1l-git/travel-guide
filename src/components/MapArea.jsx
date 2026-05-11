import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline, CircleMarker, GeoJSON } from 'react-leaflet';
import { Compass } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';

// Fix for default marker icons in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Component to handle flying to selected location
function LocationFlyTo({ selectedPlace, places, mode }) {
  const map = useMap();
  useEffect(() => {
    if (selectedPlace) {
      if(mode === 'none') {
        map.flyTo(selectedPlace.coordinates, 8, { duration: 1.5 });
      } else {
        // If routing, zoom out to show path
        map.flyTo(selectedPlace.coordinates, 5, { duration: 1.5 });
      }
    } else {
      map.flyTo([22.5937, 78.9629], 5, { duration: 1.5 }); // Center of India
    }
  }, [selectedPlace, map, mode]);
  return null;
}

// Leaflet Routing Machine Wrapper
function OSRMRouting({ startCoords, endCoords }) {
  const map = useMap();

  useEffect(() => {
    if (!startCoords || !endCoords) return;
    
    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(startCoords[0], startCoords[1]),
        L.latLng(endCoords[0], endCoords[1])
      ],
      lineOptions: {
        styles: [{ color: '#3b82f6', opacity: 0.8, weight: 6 }]
      },
      show: false,
      addWaypoints: false,
      routeWhileDragging: false,
      fitSelectedRoutes: true,
      createMarker: () => null // We draw our own markers
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, startCoords, endCoords]);

  return null;
}

function TrainRouteOverlay({ startCoords, endCoords, destinationName }) {
  if (!startCoords || !endCoords) return null;

  // Generate dynamic waypoints based on actual start and end
  const route = [
    { name: "Your Location Station", coords: startCoords }
  ];
  
  for(let i=1; i<=3; i++){
    const fraction = i / 4;
    // Create a slight curve deterministically based on coordinates offset
    const lat = startCoords[0] + (endCoords[0] - startCoords[0]) * fraction + ((endCoords[1] - startCoords[1]) * 0.05);
    const lng = startCoords[1] + (endCoords[1] - startCoords[1]) * fraction - ((endCoords[0] - startCoords[0]) * 0.05);
    route.push({ name: `Major Junction ${i}`, coords: [lat, lng] });
  }
  
  route.push({ name: `${destinationName} Terminal`, coords: endCoords });

  return (
    <>
      <Polyline 
        positions={route.map(st => st.coords)} 
        pathOptions={{ color: '#facc15', weight: 4, dashArray: '10, 10' }} 
      />
      {route.map((station, idx) => (
        <CircleMarker 
          key={idx} 
          center={station.coords} 
          radius={6} 
          pathOptions={{ color: '#0f172a', fillColor: '#facc15', fillOpacity: 1 }}
        >
          <Popup className="premium-popup">{station.name}</Popup>
        </CircleMarker>
      ))}
    </>
  );
}

function LocateMeControl({ onRequestLocation }) {
  const map = useMap();
  
  return (
    <div className="leaflet-bottom leaflet-right" style={{ zIndex: 1000, pointerEvents: 'auto' }}>
      <div className="leaflet-control leaflet-bar" style={{ marginBottom: '30px', marginRight: '10px' }}>
        <button 
          title="Locate Me"
          onClick={(e) => {
            e.preventDefault();
            onRequestLocation((coords) => {
               map.flyTo(coords, 10, { duration: 1.5 });
            });
          }}
          style={{ 
            backgroundColor: 'rgba(15, 23, 42, 0.9)', 
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '8px', 
            display: 'flex', 
            cursor: 'pointer',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.9)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.9)'}
        >
          <Compass size={24} color="#3b82f6" />
        </button>
      </div>
    </div>
  );
}

const MapArea = ({ selectedPlace, onSelectPlace, travelMode, userLocation, places, onRequestLocation }) => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('/india-states.json')
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error("Error loading GeoJSON", err));
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
      <MapContainer 
        center={[22.5937, 78.9629]} 
        zoom={5} 
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {geoData && (
          <GeoJSON 
            data={geoData} 
            style={{ 
              color: '#3b82f6', 
              weight: 3.5, 
              opacity: 1,
              fillOpacity: 0.05, 
              fillColor: '#3b82f6' 
            }} 
          />
        )}
        
        <LocateMeControl onRequestLocation={onRequestLocation} />
        
        <LocationFlyTo selectedPlace={selectedPlace} places={places} mode={travelMode} />

        {/* User Location Marker */}
        {userLocation && (
          <Marker position={userLocation}>
            <Popup className="premium-popup">
              <div style={{ fontWeight: 600 }}>Your Location</div>
            </Popup>
          </Marker>
        )}

        {/* Road Routing logic using OSRM embedded in Leaflet Routing Machine */}
        {travelMode === 'road' && selectedPlace && userLocation && (
          <OSRMRouting startCoords={userLocation} endCoords={selectedPlace.coordinates} />
        )}

        {/* Train Routing logic via dynamic user location */}
        {travelMode === 'train' && selectedPlace && userLocation && (
          <TrainRouteOverlay 
            startCoords={userLocation} 
            endCoords={selectedPlace.coordinates} 
            destinationName={selectedPlace.name.split(',')[0]} 
          />
        )}

        {/* All Places Markers */}
        {places.map((place) => (
          <Marker 
            key={place.id} 
            position={place.coordinates}
            eventHandlers={{
              click: () => onSelectPlace(place),
            }}
          >
            <Popup className="premium-popup">
              <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '4px' }}>{place.name}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Click for more details</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapArea;
