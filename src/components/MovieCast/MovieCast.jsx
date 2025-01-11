import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div className={css.wrap}>
      <h3 className={css.title}>Cast</h3>
      <ul className={css.castList}>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id} className={css.castItem}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
              className={css.img}
            />
            <div className={css.textWrap}>
              <h4 className={css.name}>{name}</h4>
              <p className={css.role}>{character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
