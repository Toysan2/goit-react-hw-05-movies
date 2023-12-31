import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../api/movieAPI';
import styles from '../SharedLayout/SharedLayout.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const loadTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    loadTrendingMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Trendujące Filmy</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title} ({new Date(movie.release_date).getFullYear()})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
