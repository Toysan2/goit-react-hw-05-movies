import React, { useEffect, useState } from 'react';
import { getMovieReviews } from '../services/movieService';
import styles from './Reviews.module.css';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2>Recenzje</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <strong>{review.author}</strong>: {review.content}
            </li>
          ))}
        </ul>
      ) : (
        <p>Brak recenzji dla tego filmu.</p>
      )}
    </div>
  );
};

export default Reviews;
