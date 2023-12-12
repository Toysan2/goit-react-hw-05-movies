import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/movieService';
import styles from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Popularne Filmy</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
