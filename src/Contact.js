// Contact.js

import React from 'react';
import './Contact.css';

import l1 from './images/l1.png';
import l2 from './images/l2.png';
import l3 from './images/l3.png';
import s1 from './images/s1.png';
import s2 from './images/s2.png';
import s3 from './images/s3.png';
import s4 from './images/s4.png';

import ab1 from './images/ab1.png';
import ab2 from './images/ab2.png';
import ab3 from './images/ab3.png';
import ab4 from './images/ab4.png';

function Contact({ handleMenuClick }) {
  const redirectToHome = (e) => {
    e.preventDefault();
    handleMenuClick('home');
  };

  return (
    <div className="contact-container">
      {/* Contact Info Section */}
      <div className="contact-info-box">
        <h2>Contact Info</h2>
        <hr />
        <div className="contact-info">
          <div className="info-item">
          <a href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=tts"><img src={l1} alt="Location Icon" className="icon" /></a>   
            <span className="con_in">Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</span>
          </div>
          <div className="info-item">
          <a href="mailto: kkghosh0099@gmail.com"><img src={l2} alt="Email Icon" className="icon" /></a>
            <span className="con_in">kkghosh0099@gmail.com</span>
          </div>
          <div className="info-item">
            <a href="tel:+919007062180"><img src={l3} alt="Phone Icon" className="icon" /></a>
            <span className="con_in">+91 9007062180</span>
          </div>
        </div>
        <div className="social-icons">
          <a href="/" onClick={redirectToHome}>
            <img src={s1} alt="Facebook Icon" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer">
            <img src={s2} alt="Instagram Icon" className="social-icon" />
          </a>
          <a href="/" onClick={redirectToHome}>
            <img src={s3} alt="Twitter Icon" className="social-icon" />
          </a>
          <a href="/" onClick={redirectToHome}>
            <img src={s4} alt="LinkedIn Icon" className="social-icon" />
          </a>
        </div>
      </div>

      {/* Send a Message Section */}
      <div className="send-message-box">
        <h2 className="send-title">Send a Message</h2>
        <div className="input-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="input-row">
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Mobile Number" />
        </div>
        <textarea placeholder="Write your message here..." rows="4" />
        <button className="send-button">Send</button>
      </div>

      {/* Full Screen Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198229.0882619573!2d85.6578129!3d23.5855531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1693888582155"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-column">
          <div className="footer-logo">
            <div className="footer_head">KingKhush<br/>Guest<br/>House</div>
          </div>
          <p className="footer-description">
            Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
          </p>
          <button className="footer-button" onClick={() => window.open("https://wa.me/919007062180", "_blank")}>Book Now</button>
        </div>
        
        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="/" onClick={redirectToHome}>Browse Destinations</a></li>
            <li><a href="/" onClick={redirectToHome}>Special Offers & Packages</a></li>
            <li><a href="/" onClick={redirectToHome}>Room Types & Amenities</a></li>
            <li><a href="/" onClick={redirectToHome}>Customer Reviews & Ratings</a></li>
            <li><a href="/" onClick={redirectToHome}>Travel Tips & Guides</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>OUR SERVICES</h4>
          <ul>
            <li><a href="/" onClick={redirectToHome}>Concierge Assistance</a></li>
            <li><a href="/" onClick={redirectToHome}>Flexible Booking Options</a></li>
            <li><a href="/" onClick={redirectToHome}>Airport Transfers</a></li>
            <li><a href="/" onClick={redirectToHome}>Wellness & Recreation</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>CONTACT US</h4>
          <ul>
            <li><a href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=tts">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></li>
            <li><a href="mailto: kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></li>
            <li><a href="tel:+919007062180">+91 9007062180</a></li>
          </ul>
          <div className="footer-social-icons">
            <a href="/" onClick={redirectToHome}><img src={ab1} alt="Social Media Icon 1" className="footer-social-icon" /></a>
            <a href="https://www.instagram.com/kingsukhguesthouse/"><img src={ab2} alt="Social Media Icon 2" className="footer-social-icon" /></a>
            <a href="/" onClick={redirectToHome}><img src={ab3} alt="Social Media Icon 3" className="footer-social-icon" /></a>
            <a href="/" onClick={redirectToHome}><img src={ab4} alt="Social Media Icon 4" className="footer-social-icon" /></a>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <h5>Copyright © 2024 Kingsukh Guest House. All rights reserved.</h5>
      </div>
    </div>
  );
}

export default Contact;
