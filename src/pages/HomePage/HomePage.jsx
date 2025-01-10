import React, { useEffect, useState } from "react";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../services/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className={css.wrap}>
      <h2 className={css.title}>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
