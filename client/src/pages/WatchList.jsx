import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import '../pages/WatchList.css';

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(storedWatchlist);
  }, []);

  const handleRemove = (id) => {
    const updatedWatchlist = watchlist.filter(item => item._id !== id);
    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  };

  return (
    <div className="watchlist-page">
      <Navbar /> {/* Include the Navbar */}
      <h1>My WatchList</h1>
      <div className="watchlist-container">
        {watchlist.length > 0 ? (
          watchlist.map((item) => (
            <div key={item._id} className="movie-card">
              <div className="movie-card-inner">
                <div className="movie-card-front">
                  <img src={item.Poster} alt={`${item.Title} Poster`} className="movie-poster" />
                  <div className="movie-info">
                    <h2>{item.Title}</h2>
                    <p><strong>Year:</strong> {item.Year}</p>
                    <p><strong>IMDB Rating:</strong> {item.imdbRating}</p>
                    <button 
                      className="remove-button"
                      onClick={() => handleRemove(item._id)}
                    >
                      Remove from Watchlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your watchlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WatchList;
