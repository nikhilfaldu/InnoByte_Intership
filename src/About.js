// About.js

import React from 'react';
import './About.css';
import outImage from './images/out.jpg';


function About() {
  return (
    <div className="about-container">
      <div className="about-image">
      <img src={outImage} alt="Scenic view" />

      </div>
      <div className="about-content">
        <h4 className="about-title">About Us</h4>
        <h1 className="about-heading">The Best Holidays Start Here!</h1>
        <p className="about-description">
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill,
          Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat
          Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal
          retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems
          of Purulia, creating memories that linger long after your stay.
        </p>
        <p className="about-address">
          <strong>Address:</strong> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
          <br />
          <strong>Contact us:</strong> +91 9007062180
        </p>
        <button className="book-now-btn" onClick={() => window.open("https://wa.me/919007062180", "_blank")}>Book Now</button>
      </div>
    </div>
  );
}

export default About;
