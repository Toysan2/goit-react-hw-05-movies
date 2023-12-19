import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../api/movieAPI';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
      />
      <p>
        <strong>User Score:</strong> {movie.vote_average * 10}%
      </p>
      <p>
        <strong>Overview:</strong> {movie.overview}
      </p>
      <p>
        <strong>Genres:</strong>{' '}
        {movie.genres.map(genre => genre.name).join(', ')}
      </p>
      <h2>Additional Informations</h2>
      <div>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      </div>
      <Outlet /> {/* Miejsce na renderowanie komponentów Cast i Reviews */}
    </div>
  );
};

export default MovieDetails;
