// BookNow.js

import React from 'react';

function BookNow() {
  const handleBookNowClick = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=919007062180";
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Poppins, sans-serif' }}>
      <h1>Book Your Stay</h1>
      <p>Click the button below to book your stay via WhatsApp.</p>
      <button 
        onClick={handleBookNowClick}
        style={{
          padding: '1rem 2rem',
          backgroundColor: '#e82574',
          color: '#fff',
          fontSize: '1rem',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
      >
        Book Now
      </button>
    </div>
  );
}

export default BookNow;
