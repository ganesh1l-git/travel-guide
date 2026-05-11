import React from 'react';
import { Star, ChevronLeft, MapPin, Clock, Image as ImageIcon, Utensils, MessageSquare } from 'lucide-react';

const RestaurantDetails = ({ restaurant, onBack }) => {
  if (!restaurant) return null;

  return (
    <div className="restaurant-details-container">
      <button className="back-btn" onClick={onBack}>
        <ChevronLeft size={20} /> Back to Destinations
      </button>

      <div className="restaurant-header">
        <h2>{restaurant.name}</h2>
        <div className="restaurant-badges">
          <span className="badge">{restaurant.type}</span>
          <span className="price">{restaurant.price}</span>
          <div className="rating">
            <Star size={14} fill="currentColor" /> {restaurant.rating}
          </div>
        </div>
      </div>

      <div className="restaurant-gallery">
        {restaurant.images?.map((img, idx) => (
          <img key={idx} src={img} alt={`${restaurant.name} view ${idx}`} className="gallery-img" />
        ))}
      </div>

      <div className="section divider-top">
        <h3><Utensils size={20} /> Popular Menu Items</h3>
        <div className="menu-list">
          {restaurant.menu?.map((item, idx) => (
            <div key={idx} className="menu-item">
              <span className="item-name">{item.item}</span>
              <span className="item-price">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section divider-top">
        <h3><MessageSquare size={20} /> Google Reviews</h3>
        <div className="reviews-list">
          {restaurant.reviews?.map((rev, idx) => (
            <div key={idx} className="google-review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="avatar">{rev.author.charAt(0)}</div>
                  <div className="reviewer-meta">
                    <span className="reviewer-name">{rev.author}</span>
                    <span className="review-time">{rev.time}</span>
                  </div>
                </div>
                <div className="google-icon">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width="16" height="16" />
                </div>
              </div>
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < rev.rating ? "#facc15" : "transparent"} color={i < rev.rating ? "#facc15" : "#475569"} />
                ))}
              </div>
              <p className="review-comment">{rev.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
