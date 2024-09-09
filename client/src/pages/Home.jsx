import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import Navbar from '../component/Navbar';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3040/movies')
      .then((response) => {
        const fetchedMovies = response.data;
        setMovies(fetchedMovies);
        if (fetchedMovies.length > 0) {
          const randomIndex = Math.floor(Math.random() * fetchedMovies.length);
          setFeaturedMovie(fetchedMovies[randomIndex]);
        }
      })
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  const handlePlayClick = () => {
    navigate('/movies');
  };

  return (
    <div className="homepage">
      <Navbar /> {/* Include the Navbar */}

      {featuredMovie && (
        <header className="featured-movie">
          <div className="featured-movie-content">
            <div className="featured-movie-left">
              <div className="featured-movie-poster-container">
                <img src={featuredMovie.Poster} alt={featuredMovie.Title} className="featured-movie-poster" />
              </div>
            </div>
            <div className="featured-movie-right">
              <h1>{featuredMovie.Title}</h1>
              <p>{featuredMovie.Plot}</p>
              <button onClick={handlePlayClick}>Move List</button> {/* Updated button */}
              <button onClick={() => navigate('/watchlist')}>My List</button> {/* Updated button */}
              {featuredMovie.Images && featuredMovie.Images.length > 0 && (
                <div className="featured-movie-images">
                  {featuredMovie.Images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} className="featured-movie-image" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>
      )}

      <div className="movie-grid">
        <h2>Trending Now</h2>
        <div className="movie-grid-posters">
          {movies.map((movie) => (
            <div key={movie._id} className="movie-poster">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
