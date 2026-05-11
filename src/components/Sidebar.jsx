import React, { useState, useEffect } from 'react';
import { Plane, Train, Bus, MapPin, Star, Building, Coffee, Bike, ChevronLeft, ArrowRight, Route, TrainTrack, Compass, Navigation } from 'lucide-react';
import WeatherWidget from './WeatherWidget';
import RestaurantDetails from './RestaurantDetails';

const Sidebar = ({ selectedPlace, onSelectPlace, travelMode, setTravelMode, places }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    setSelectedRestaurant(null);
  }, [selectedPlace]);

  if (selectedRestaurant) {
    return (
      <div className="sidebar-container glass-panel">
        <RestaurantDetails 
          restaurant={selectedRestaurant} 
          onBack={() => setSelectedRestaurant(null)} 
        />
      </div>
    );
  }

  if (selectedPlace) {
    return (
      <div className="sidebar-container glass-panel">
        <button className="back-btn" onClick={() => onSelectPlace(null)}>
          <ChevronLeft size={20} /> Back to Destinations
        </button>

        <div className="detail-header">
          <h2>{selectedPlace.name}</h2>
          <p>{selectedPlace.description}</p>
        </div>

        {/* Weather Widget */}
        <div style={{ padding: '0 30px 20px' }}>
          <WeatherWidget coordinates={selectedPlace.coordinates} />
        </div>

        {/* Action Toggle for Routing */}
        <div className="routing-toggle-container">
          <button 
            className={`route-btn ${travelMode === 'road' ? 'active' : ''}`}
            onClick={() => setTravelMode(travelMode === 'road' ? 'none' : 'road')}
          >
            <Route size={18} /> Draw Road Map
          </button>
          <button 
            className={`route-btn ${travelMode === 'train' ? 'active' : ''}`}
            onClick={() => setTravelMode(travelMode === 'train' ? 'none' : 'train')}
          >
            <Navigation size={18} /> View Train Route
          </button>
        </div>

        <div className="image-gallery">
          {selectedPlace.images.map((img, idx) => (
            <img key={idx} src={img} alt={`${selectedPlace.name} view ${idx}`} className="gallery-img" />
          ))}
        </div>

        {/* Nearby Attractions Phase 2 */}
        {selectedPlace.nearby && selectedPlace.nearby.length > 0 && (
          <div className="section divider-top">
            <h3><Compass size={20} /> Nearby Highlights</h3>
            <div className="nearby-gallery">
              {selectedPlace.nearby.map((item, idx) => (
                <div key={idx} className="nearby-card">
                  <img src={item.image} alt={item.name} />
                  <div className="nearby-card-content">
                    <h5>{item.name}</h5>
                    <span>{item.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="section divider-top">
          <h3><Plane size={20} /> How to Reach</h3>
          <div className="card-list">
            {selectedPlace.reachability.map((method, idx) => (
              <div key={idx} className="info-card">
                <div className="card-header">
                  <span className="method-name">{method.mode}</span>
                  <span className="method-price">{method.price}</span>
                </div>
                <div className="card-body">
                  <p className="duration">{method.duration}</p>
                  <p className="details">{method.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section divider-top">
          <h3><Building size={20} /> Top Stays</h3>
          <div className="card-list">
            {selectedPlace.amenities.hotels.map((hotel, idx) => (
              <div key={idx} className="info-card">
                <div className="card-header">
                  <span className="item-name">{hotel.name}</span>
                  <div className="rating"><Star size={14} fill="currentColor"/> {hotel.rating}</div>
                </div>
                <div className="card-body type-price">
                  <span className="badge">{hotel.type}</span>
                  <span className="price">{hotel.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section divider-top">
          <h3><Coffee size={20} /> Where to Eat</h3>
          <div className="card-list">
            {selectedPlace.amenities.restaurants.map((rest, idx) => (
              <div 
                key={idx} 
                className="info-card clickable" 
                onClick={() => setSelectedRestaurant(rest)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-header">
                  <span className="item-name">{rest.name}</span>
                  <div className="rating"><Star size={14} fill="currentColor"/> {rest.rating}</div>
                </div>
                <div className="card-body type-price">
                  <span className="badge">{rest.type}</span>
                  <span className="price">{rest.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section Phase 2 */}
        {selectedPlace.reviews && (
          <div className="section divider-top">
            <h3><Star size={20} /> Traveler Reviews</h3>
            
            <div className="reviews-list">
              {selectedPlace.reviews.traveler.map((rev, idx) => (
                <div key={`t-${idx}`} className="review-card">
                   <div className="review-header">
                     <span className="reviewer-name">{rev.author}</span>
                     <div className="rating"><Star size={12} fill="currentColor"/> {rev.rating}</div>
                   </div>
                   <p className="review-comment">"{rev.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="sidebar-container glass-panel">
      <div className="hero-header">
        <h1>India Explorer</h1>
        <p>Discover {places.length}+ breathtaking destinations, custom road & rail maps, nearby highlights, and premium insights.</p>
      </div>
      
      <div className="destinations-list">
        {places.map((place) => (
          <div 
            key={place.id} 
            className="destination-card"
            onClick={() => onSelectPlace(place)}
          >
            <div className="card-image-wrapper">
              <img src={place.images[0]} alt={place.name} />
              <div className="card-overlay">
                <MapPin size={16} /> {place.name.split(',')[0]}
              </div>
            </div>
            <div className="card-content">
              <h4>{place.name}</h4>
              <p>{place.description.substring(0, 80)}...</p>
              <div className="explore-btn">
                Explore <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
