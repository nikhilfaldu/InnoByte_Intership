// Home.js

import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-background" />
      <div className="home-content">
        <div className="text-container glass-text">Simple - Unique - Friendly</div>
        <div className="text-container">
          <h1 className="main-title">Make Yourself At Home</h1>
          <h2 className="sub-title">
            In Our<span className="highlight"> Guest House.</span>
          </h2>
        </div>
      </div>
      <div className="button-container">
        <div className="button-background">
          <button className="book-now-button" onClick={() => window.open("https://wa.me/919007062180", "_blank")}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
