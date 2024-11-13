// App.js
import React, { useState } from 'react';
import './Sidebar.css';
import './Home.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Rooms from './Rooms';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
  const [activeItem, setActiveItem] = useState('home');

  const handleMenuClick = (item) => {
    setActiveItem(item);
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'rooms':
        return <Rooms />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact handleMenuClick={handleMenuClick} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <div className="sidebar">
        <div className="logo">
          <a href="#home" onClick={() => handleMenuClick('home')}>
            <span>Kingkhush</span>
            <span>Guest House</span>
          </a>
        </div>
        <span className="whiteline"></span>

        <ul className="menu">
          <li className={activeItem === 'home' ? 'active' : ''}>
            <a href="#home" onClick={() => handleMenuClick('home')}>Home</a>
          </li>
          <li className={activeItem === 'about' ? 'active' : ''}>
            <a href="#about" onClick={() => handleMenuClick('about')}>About</a>
          </li>
          <li className={activeItem === 'services' ? 'active' : ''}>
            <a href="#services" onClick={() => handleMenuClick('services')}>Services</a>
          </li>
          <li className={activeItem === 'rooms' ? 'active' : ''}>
            <a href="#rooms" onClick={() => handleMenuClick('rooms')}>Rooms</a>
          </li>
          <li className={activeItem === 'gallery' ? 'active' : ''}>
            <a href="#gallery" onClick={() => handleMenuClick('gallery')}>Gallery</a>
          </li>
          <li className={activeItem === 'contact' ? 'active' : ''}>
            <a href="#contact" onClick={() => handleMenuClick('contact')}>Contact</a>
          </li>
          <li className="book-now">
            <a 
              href="https://api.whatsapp.com/send?phone=919007062180" 
              target="_blank" 
              rel="noopener noreferrer">
              Book Now
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
