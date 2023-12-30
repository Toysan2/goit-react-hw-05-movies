import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../api/movieAPI';
import Reviews from '../Reviews/Reviews';
import Cast from '../Cast/Cast';
import styles from '../SharedLayout/SharedLayout.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [showReviews, setShowReviews] = useState(false);
  const [showCast, setShowCast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const handleGoBack = () => navigate(-1);
  const toggleReviews = () => setShowReviews(!showReviews);
  const toggleCast = () => setShowCast(!showCast);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <button onClick={handleGoBack}>Go back</button>
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
      <button onClick={toggleReviews} style={{ marginRight: '20px' }}>Reviews</button>
      {showReviews && <Reviews movieId={movieId} />}
      <button onClick={toggleCast}>Cast</button>
      {showCast && <Cast movieId={movieId} />}
    </div>
  );
};

export default MovieDetails;