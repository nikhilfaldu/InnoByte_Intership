// Services.js

import React from 'react';
import './Services.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import leftImage from './images/palash1.jpg';
import rightImage from './images/palash2.jpg';

function Services() {
  return (
    <div className="services-container">
      <div className="services-left-image" style={{ backgroundImage: `url(${leftImage})` }}></div>
      
      <div className="services-content">
        <h4 className="services-title">Services</h4>
        <h1 className="services-heading">Strive Only For The Best.</h1>
        <div className="services-list">
          <div className="service-item">
            <img src={icon1} alt="High Class Security" />
            <p>High Class Security</p>
          </div>
          <div className="service-item">
            <img src={icon2} alt="24 Hours Room Service" />
            <p>24 Hours Room Service</p>
          </div>
          <div className="service-item">
            <img src={icon3} alt="Restaurant" />
            <p>Restaurant</p>
          </div>
          <div className="service-item">
            <img src={icon4} alt="Tourist Guide Support" />
            <p>Tourist Guide Support</p>
          </div>
        </div>
      </div>
      
      <div className="services-right-image" style={{ backgroundImage: `url(${rightImage})` }}></div>
    </div>
  );
}

export default Services;
