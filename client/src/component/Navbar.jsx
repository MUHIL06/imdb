import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src="https://th.bing.com/th/id/OIP.UgNFk7KGev-1q4oF2_0e9QHaEc?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="IMDb Logo" className="logo-image" />
      </Link>
      <nav className="nav-buttons">
        <Link to="/about" className="nav-button">About</Link>
        <Link to="/movies" className="nav-button">Movies</Link>
        <Link to="/watchlist" className="nav-button">WatchList</Link>
        <Link to="/signin" className="signin-button">Sign In</Link>
        <Link to="/Add" className="add-button">AddMovie</Link>
      </nav>
    </div>
  );
};

export default Navbar;
