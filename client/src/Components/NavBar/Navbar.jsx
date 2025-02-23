import React from 'react';
import './Navbar.css';

function NavBar() {
    return (
        <div className="container">
         <header className="header-container">
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/write">Write</a>
        <a href="/logout">Logout</a>
      </nav>
      <div className="user-picture">
      <img src="https://p0.pikist.com/photos/935/215/portrait-girl-studio-female-woman-profile-nose-chin.jpg" alt="User" />
      <div className="search">
      <i className="fas fa-search"></i>
      </div>
      </div>
      
    </header>   
        </div>
    );
}

export default NavBar;