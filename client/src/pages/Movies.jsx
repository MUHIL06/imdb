import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../pages/Movies.css';
import Navbar from '../component/Navbar';
import { FaSearch, FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Movies() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [flippedCard, setFlippedCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [imageLoading, setImageLoading] = useState({});
  const [autoSlide, setAutoSlide] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3040/movies")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      data.forEach((item) => {
        if (item.Images && item.Images.length > 0 && autoSlide[item._id]) {
          setCurrentImageIndex((prevState) => ({
            ...prevState,
            [item._id]: (prevState[item._id] + 1) % item.Images.length
          }));
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [data, autoSlide]);

  const filteredData = data.filter((movie) => {
    if (movie.Title && typeof movie.Title === 'string') {
      return movie.Title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  const handleNextImage = (id, images) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [id]: (prevState[id] + 1) % images.length
    }));
  };

  const handlePreviousImage = (id, images) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [id]: (prevState[id] - 1 + images.length) % images.length
    }));
  };

  const toggleCardFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  const handleMouseEnter = (id) => {
    setAutoSlide((prevState) => ({
      ...prevState,
      [id]: true
    }));
  };

  const handleMouseLeave = (id) => {
    setAutoSlide((prevState) => ({
      ...prevState,
      [id]: false
    }));
  };

  const handleAddToWatchlist = (movie) => {
    const existingWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    if (!existingWatchlist.find(item => item._id === movie._id)) {
      localStorage.setItem('watchlist', JSON.stringify([...existingWatchlist, movie]));
      alert('Movie added to watchlist!');
    }
  };

  return (
    <div className="movies-page">
      <Navbar />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by movie title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>
      <div className="movies-container">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item._id}
              className={`movie-card ${flippedCard === item._id ? 'flipped' : ''}`}
              onMouseEnter={() => handleMouseEnter(item._id)}
              onMouseLeave={() => handleMouseLeave(item._id)}
            >
              <div className="movie-card-inner">
                <div className="movie-card-front">
                  <div className="movie-poster-container">
                    <img src={item.Poster} alt="Movie Poster" className="movie-poster" />
                    {item.Images && item.Images.length > 0 && (
                      <div className="slideshow-container">
                        <img
                          src={item.Images[currentImageIndex[item._id] || 0]}
                          alt="Slideshow"
                          className="slideshow-image"
                          onLoad={() => setImageLoading((prevState) => ({ ...prevState, [item._id]: true }))}
                        />
                      </div>
                    )}
                  </div>
                  <div className="movie-info">
                    <h2>{item.Title}</h2>
                    <p><strong>Year:</strong> {item.Year}</p>
                    <p><strong>Language:</strong> {item.Language}</p>
                    <p><strong>IMDB Rating:</strong> {item.imdbRating}</p>
                    <button className="watchlist-btn" onClick={() => handleAddToWatchlist(item)}>
                      <FaPlus className="watchlist-icon" /> Add to Watchlist
                    </button>
                    <Link to="/watchlist" className="more-info-btn">
                      View Watchlist
                    </Link>
                    <button className="more-info-btn" onClick={() => toggleCardFlip(item._id)}>
                      {flippedCard === item._id ? 'Show Less' : 'More Info'}
                    </button>
                  </div>
                </div>
                <div className="movie-card-back">
                  <div className="additional-info">
                    <p><strong>Rated:</strong> {item.Rated}</p>
                    <p><strong>Released:</strong> {new Date(item.Released).toDateString()}</p>
                    <p><strong>Runtime:</strong> {item.Runtime} minutes</p>
                    <p><strong>Genre:</strong> {item.Genre}</p>
                    <p><strong>Director:</strong> {item.Director}</p>
                    <p><strong>Writer:</strong> {item.Writer}</p>
                    <p><strong>Actors:</strong> {item.Actors}</p>
                    <p><strong>Plot:</strong> {item.Plot}</p>
                    <p><strong>Country:</strong> {item.Country}</p>
                    <p><strong>Awards:</strong> {item.Awards}</p>
                    <p><strong>Metascore:</strong> {item.Metascore}</p>
                    <p><strong>IMDB Votes:</strong> {item.imdbVotes}</p>
                    <p><strong>IMDB ID:</strong> {item.imdbID}</p>
                    <p><strong>Type:</strong> {item.Type}</p>
                    <p><strong>Response:</strong> {item.Response ? 'Yes' : 'No'}</p>
                  </div>
                  <button className="more-info-btn" onClick={() => toggleCardFlip(item._id)}>
                    Show Less
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No movies found</div>
        )}
      </div>
    </div>
  );
}

export default Movies;
