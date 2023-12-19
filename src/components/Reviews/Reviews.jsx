import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../api/movieAPI';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  if (reviews.length === 0) {
    return (
      <div className={styles.container}>
        We don't have any reviews for this movie.
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {reviews.map(review => (
        <div key={review.id} className={styles.review}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
