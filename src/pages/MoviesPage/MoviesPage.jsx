import React, { useState } from "react";
import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../services/api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") ?? "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    searchMovies(query).then(setMovies);
    handleChangeQuery(query);
    setQuery("");
  };

  const handleChangeQuery = (newQuery) => {
    setSearchParams({ query: newQuery.trim() });
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
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
