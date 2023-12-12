import React, { useEffect, useState } from 'react';
import { getMovieCast } from '../services/movieService';
import styles from './Cast.module.css';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2>Obsada</h2>
      <ul>
        {cast.map(member => (
          <li key={member.cast_id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
