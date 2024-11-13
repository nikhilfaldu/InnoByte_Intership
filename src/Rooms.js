// Rooms.js

import React from 'react';
import './Rooms.css';
import smallImage from './images/small.jpg';
import largeImage from './images/large.jpg';
import buttonImage1 from './images/i1.png';
import buttonImage2 from './images/i2.png';
import buttonImage3 from './images/i3.png';

function Rooms() {
  return (
    <div className="rooms-page">
      {/* Row container for titles */}
      <div className="rooms-header">
        <h4 className="small-title">OUR LIVING ROOM</h4>
        <h1 className="big-title">The Most Memorable Rest Time Starts Here</h1>
      </div>

      {/* Row container for cards */}
      <div className="rooms-cards">
        {/* Card 1 */}
        <div className="room-card">
          <div className="image-section">
            <img src={smallImage} alt="Cozy Haven Room" className="room-image" />
            <div className="button-overlay">
              <img src={buttonImage1} alt="Button 1" className="overlay-button" />
              <img src={buttonImage2} alt="Button 2" className="overlay-button" />
              <img src={buttonImage3} alt="Button 3" className="overlay-button" />
            </div>
          </div>
          <div className="info-section">
            <h2 className="room-title">Cozy Haven Room</h2>
            <p className="room-description">
              Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.
            </p>
            <p className="room-price">Starting from <span>Rs. 1000/night</span></p>
            <button className="book-now-button" onClick={() => window.open("https://wa.me/919007062180", "_blank")}>Book Now</button>
            
          </div>
        </div>

        {/* Card 2 */}
        <div className="room-card">
          <div className="image-section">
            <img src={largeImage} alt="Spacious Serenity Suite" className="room-image" />
            <div className="button-overlay">
              <img src={buttonImage1} alt="Button 1" className="overlay-button" />
              <img src={buttonImage2} alt="Button 2" className="overlay-button" />
              <img src={buttonImage3} alt="Button 3" className="overlay-button" />
            </div>
          </div>
          <div className="info-section">
            <h2 className="room-title">Spacious Serenity Suite</h2>
            <p className="room-description">
              Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.
            </p>
            <p className="room-price">Starting from <span>Rs. 1500/night</span></p>
            <button className="book-now-button" onClick={() => window.open("https://wa.me/919007062180", "_blank")}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
