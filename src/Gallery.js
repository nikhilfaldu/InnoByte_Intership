// Gallery.js

import React from 'react';
import './Gallery.css';
import ayodhya from './images/ayodhya.webp';
import baranti from './images/baranti.webp';
import flower from './images/flower.jpg';
import mithonDam from './images/mithonDam.webp';
import palash from './images/palash.webp';
import recep from './images/recep.jpg';
import room1 from './images/room1.jpg';

import small from './images/small.jpg';
import large from './images/large.jpg';
import out from './images/out.jpg';

function Gallery() {
  return (
    <div className="gallery-page">
      {/* Title row */}
      <div className="gallery-title">
        <h4>GALLERY</h4>
      </div>
      
      {/* Image grid */}
      <div className="gallery-images">
        <img src={ayodhya} alt="Ayodhya" className="image-item ayodhya" />
        <img src={baranti} alt="Baranti" className="image-item baranti" />
        <img src={flower} alt="Flower" className="image-item flower" />
        <img src={out} alt="Out" className="image-item out" />
        <img src={palash} alt="Palash" className="image-item palash" />
        <img src={recep} alt="Reception" className="image-item recep" />
        <img src={mithonDam} alt="Mithon Dam" className="image-item mithonDam" />
        <img src={small} alt="Small Room" className="image-item small" />
        <img src={large} alt="Large Room" className="image-item large" />
        <img src={room1} alt="Room 1" className="image-item room1" />
        
      </div>
    </div>
  );
}

export default Gallery;
