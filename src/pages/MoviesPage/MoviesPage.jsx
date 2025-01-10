import React, { useState } from "react";
import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../services/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(query).then(setMovies);
  };
  return (
    <div className={css.wrap}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={query}
          className={css.input}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" className={css.btn}>
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
