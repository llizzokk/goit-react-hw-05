import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  const previousPage = location.state ?? "/movies";

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  return (
    <div className={css.wrap}>
      <Link to={previousPage} className={css.backBtn}>
        Go back
      </Link>
      <div className={css.infoWrap}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className={css.img}
        />
        <div className={css.textWrap}>
          <h3 className={css.title}>{movie.title}</h3>
          <p className={css.text}>{movie.overview}</p>
        </div>
      </div>
      <nav className={css.navList}>
        <NavLink to="cast" className={css.navItem}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={css.navItem}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
