import React, { useState } from 'react';
import styles from './Search.module.css';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Szukaj filmów..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className={styles.searchButton}>Szukaj</button>
    </form>
  );
};

export default Search;
