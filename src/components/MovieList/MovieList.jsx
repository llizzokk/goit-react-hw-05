import React from "react";
import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

  return (
    <ul className={css.movieList}>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <li key={id} className={css.movieItem}>
            <Link to={`/movies/${id}`} state={location}>
              {poster_path ? (
                <img
                  src={`${IMAGE_BASE_URL}${poster_path}`}
                  alt={title}
                  className={css.moviePoster}
                />
              ) : (
                <div className={css.movieNoImage}>No Image</div>
              )}
              <p className={css.movieTitle}>{title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
