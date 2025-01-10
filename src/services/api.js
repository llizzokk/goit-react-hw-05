import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2QzYjk2N2YyNWNhNWVhODhjNmIzOTU1ZDc5NTFjNSIsIm5iZiI6MTczMjUzNzI4Mi4yNTgsInN1YiI6IjY3NDQ2YmMyOWEyZjM4MmNiZDM1ZmQ5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mk7tMmyWP6xnOKPIL4mnbjaEny9SBlTIfn3CxKWqUgc`;

export const fetchTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get("/search/movie", {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
