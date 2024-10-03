// // Navbar.jsx
// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">SPORTS</div>
//       <ul className="navbar-links">
//         <li className="nav-item"><a href="#products">Products</a></li>
//         <li className="nav-item"><a href="#track-order">Track Order</a></li>
//         <li className="nav-item"><a href="#contact">Contact</a></li>
//         <li className="nav-item"><a href="#about-us">About Us</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">SPORTS</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li className="nav-item"><a href="#products">Products</a></li>
        <li className="nav-item"><a href="#track-order">Track Order</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
        <li className="nav-item"><a href="#about-us">About Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
