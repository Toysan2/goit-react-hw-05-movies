import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../api/movieAPI';
import styles from '../SharedLayout/SharedLayout.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Odczytywanie wyników wyszukiwania z sessionStorage przy inicjalizacji
    const savedResults = sessionStorage.getItem('searchResults');
    if (savedResults) {
      setMovies(JSON.parse(savedResults));
    }
  }, []);

  const handleSearch = async event => {
    event.preventDefault();
    if (!query) return;

    setIsLoading(true);
    try {
      const data = await searchMovies(query);
      setMovies(data.results);
      // Zapisywanie wyników wyszukiwania do sessionStorage
      sessionStorage.setItem('searchResults', JSON.stringify(data.results));
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
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
