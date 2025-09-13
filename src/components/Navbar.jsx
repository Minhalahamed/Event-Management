
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/navbar.css"; 

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark  fixed-top custom-navbar">
      <div className="container">
        
        <div
          className="navbar-brand d-flex align-items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          
          <img 
            src="/logo.png"   
            alt="Logo" 
            className="me-2"     
            style={{ height: "40px", width: "40px", objectFit: "contain" }}
          />
          <span className="brand-text">
            Campus<span className="highlight-text">Connect</span>
          </span>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li className="nav-item">
  <Link className="nav-link" to="/calendar">Event Calendar</Link>
</li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback">Feedback</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="sitemapDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sitemap
              </span>
              <ul className="dropdown-menu" aria-labelledby="sitemapDropdown">
                <li><Link className="dropdown-item" to="/">Home</Link></li>
               
                <li><Link className="dropdown-item" to="/events">Events</Link></li>
                <li><Link className="dropdown-item" to="/calendar">Event Calendar</Link></li>
                <li><Link className="dropdown-item" to="/gallery">Gallery</Link></li>
                <li><Link className="dropdown-item" to="/feedback">Feedback</Link></li>
                 <li><Link className="dropdown-item" to="/about">About</Link></li>
                <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
                <li><Link className="dropdown-item" to="/register">Register</Link></li>
              </ul>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
