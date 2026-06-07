import React from 'react';
import { Star, ChevronLeft, BedDouble, Wifi, Car, Coffee, Dumbbell } from 'lucide-react';

const HotelDetails = ({ hotel, onBack }) => {
  if (!hotel) return null;

  const amenityIcons = [
    { icon: Wifi, label: 'Free WiFi' },
    { icon: Car, label: 'Parking' },
    { icon: Coffee, label: 'Breakfast' },
    { icon: Dumbbell, label: 'Gym' },
  ];

  return (
    <div className="hotel-details-container">
      <button className="back-btn" onClick={onBack}>
        <ChevronLeft size={20} /> Back to Destination
      </button>

      <div className="hotel-header">
        <h2>{hotel.name}</h2>
        <div className="hotel-badges">
          <span className="badge">{hotel.type}</span>
          <div className="rating">
            <Star size={14} fill="currentColor" /> {hotel.rating}
          </div>
        </div>
        <p className="hotel-price-range">{hotel.priceRange}</p>
      </div>

      {hotel.image && (
        <div className="hotel-hero-image">
          <img src={hotel.image} alt={hotel.name} />
        </div>
      )}

      {/* Amenities */}
      <div className="section divider-top">
        <h3><Wifi size={20} /> Amenities</h3>
        <div className="amenities-grid">
          {amenityIcons.map((a, idx) => {
            const Icon = a.icon;
            return (
              <div key={idx} className="amenity-chip">
                <Icon size={16} />
                <span>{a.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Room Types */}
      <div className="section divider-top">
        <h3><BedDouble size={20} /> Room Types & Pricing</h3>
        <div className="rooms-list">
          {hotel.rooms && hotel.rooms.map((room, idx) => (
            <div key={idx} className="room-card">
              <div className="room-info">
                <span className="room-type">{room.type}</span>
                <div className="room-features">
                  {idx === 0 && <span className="room-tag best-value">Best Value</span>}
                  {idx === (hotel.rooms.length - 1) && hotel.rooms.length > 1 && <span className="room-tag premium">Premium</span>}
                </div>
              </div>
              <div className="room-price">{room.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
