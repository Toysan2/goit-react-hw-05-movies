// src/components/Movies/Movies.jsx
import React, { useState } from 'react';
import { searchMovies } from '../services/movieService';
import Search from '../Search/Search';
import styles from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    try {
      const data = await searchMovies(query);
      setMovies(data.results);
    } catch (error) {
      console.error('Error during movie search:', error);
      // Możesz tu dodać obsługę błędów.
    }
  };

  return (
    <div className={styles.container}>
      <Search onSearch={handleSearch} />
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
