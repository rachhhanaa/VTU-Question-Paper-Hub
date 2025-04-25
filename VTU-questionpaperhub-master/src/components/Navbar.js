import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>PaperHub  College</h2>
      <ul className="nav-links">
        <li  className='ml-5 '><a href="#about">About</a></li>
        <li className='ml-5 '><a href="#papers">Papers</a></li>
        <li  className='ml-5 '><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
