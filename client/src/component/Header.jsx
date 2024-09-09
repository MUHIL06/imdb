import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Header className="header">
      <Link to="/" className="logo">IMDB</Link>
      <nav className="nav-buttons">
        <Link to="/about" className="nav-button">About</Link>
        <Link to="/movies" className="nav-button">Movies</Link>
        <Link to="/watchlist" className="nav-button">WatchList</Link>
        <Link to="/signin" className="signin-button">Sign In</Link>
        <Link to="/Add" className="add-button">Add</Link>
      </nav>
    </Header>
  );
};

export default Header;