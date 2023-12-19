import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../api/movieAPI';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <div className={styles.container}>
      {cast.map(member => (
        <div key={member.cast_id} className={styles.castMember}>
          {member.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
              alt={member.name}
            />
          ) : (
            <img
              src="/path/to/default/image.jpg" // Ścieżka do domyślnego obrazu
              alt="Default"
            />
          )}
          <p>{member.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
