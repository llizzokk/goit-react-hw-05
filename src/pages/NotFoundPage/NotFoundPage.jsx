import React from "react";
import css from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={css.wrap}>
      <p className={css.text}>Oops.. The page you requested was not found.</p>
      <Link to="/" className={css.backLink}>
        Go Back
      </Link>
    </div>
  );
};

export default NotFoundPage;
