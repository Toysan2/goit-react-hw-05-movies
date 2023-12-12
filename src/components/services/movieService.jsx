// movieService.js
const API_KEY = '0dbe1ca7342e7e9210eecd0a9bce9cbe';
const BASE_URL = 'https://api.themoviedb.org/3';

// Funkcja do pobierania trendujących filmów
export const getTrendingMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

// Funkcja do wyszukiwania filmów
export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

// Funkcja do pobierania szczegółów filmu
export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// Funkcja do pobierania obsady filmu
export const getMovieCast = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error;
  }
};

// Funkcja do pobierania recenzji filmu
export const getMovieReviews = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};
