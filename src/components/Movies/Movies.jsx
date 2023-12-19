import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../api/movieAPI';
import styles from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async event => {
    event.preventDefault();
    if (!query) return;

    setIsLoading(true);
    try {
      const data = await searchMovies(query);
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Wyszukaj film..."
        />
        <button type="submit">Szukaj</button>
      </form>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title} ({new Date(movie.release_date).getFullYear()})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
