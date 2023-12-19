const API_KEY = '0dbe1ca7342e7e9210eecd0a9bce9cbe';
const BASE_URL = 'https://api.themoviedb.org/3';

/**
 * Wykonuje zapytanie do TheMovieDB API.
 * @param {string} endpoint - The endpoint to call.
 * @param {Object} params - Additional query parameters.
 * @returns {Promise} - Promise with the response data.
 */
const fetchFromTMDB = async (endpoint, params = {}) => {
  // Dodawanie klucza API do parametrów zapytania
  params['api_key'] = API_KEY;

  // Tworzenie stringa z parametrów zapytania
  const queryParams = new URLSearchParams(params).toString();

  const url = `${BASE_URL}${endpoint}?${queryParams}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`TMDB API request failed: ${response.status}`);
  }
  return response.json();
};

/**
 * Pobiera filmy z trendów.
 * @returns {Promise} - Promise with trending movies.
 */
export const fetchTrendingMovies = () => {
  return fetchFromTMDB('/trending/movie/day');
};

/**
 * Wyszukuje filmy na podstawie zapytania.
 * @param {string} query - Query string for the movie search.
 * @returns {Promise} - Promise with the search results.
 */
export const searchMovies = query => {
  return fetchFromTMDB('/search/movie', { query: encodeURIComponent(query) });
};

/**
 * Pobiera szczegółowe informacje o filmie.
 * @param {number} movieId - The ID of the movie.
 * @returns {Promise} - Promise with movie details.
 */
export const fetchMovieDetails = movieId => {
  return fetchFromTMDB(`/movie/${movieId}`);
};

/**
 * Pobiera informacje o obsadzie filmu.
 * @param {number} movieId - The ID of the movie.
 * @returns {Promise} - Promise with movie cast info.
 */
export const fetchMovieCast = movieId => {
  return fetchFromTMDB(`/movie/${movieId}/credits`);
};

/**
 * Pobiera recenzje filmu.
 * @param {number} movieId - The ID of the movie.
 * @returns {Promise} - Promise with movie reviews.
 */
export const fetchMovieReviews = movieId => {
  return fetchFromTMDB(`/movie/${movieId}/reviews`);
};
