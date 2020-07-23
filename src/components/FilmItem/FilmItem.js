import React, { useEffect, useState } from "react";
import { showAllInfo } from "../../helpers/rejuest";
import { NavLink, Switch, Route, useHistory } from "react-router-dom";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import arrow from "./Back_Arrow.png";
import "./FilmItem.css";

const FilmItem = ({ match }) => {
  const id = match.params.movieId;
  const [film, setFilm] = useState([]);
  const history = useHistory();

  useEffect(() => {
    showAllInfo(id).then(({ data }) => setFilm(data));
  }, [id]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <img src={arrow} alt="arrow_back" className="back" onClick={goBack} />
      <div className="full_info">
        <img
          src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
          alt={film.original_title}
          className="film_img"
        />
        <div className="item_info">
          <h2 className="title">{film.original_title}</h2>
          <p>{`Popularitu ${film.popularity}`}</p>
          <h3>Overview</h3>
          <p className="overview">{film.overview}</p>
          <h4>Genres</h4>
          <ul>
            {film.genres &&
              film.genres.map((item) => <li key={item.id}>{item.name}</li>)}
          </ul>
          <p></p>
        </div>
      </div>
      <div className="aditional_information">
        <p className="aditional_title"> Aditional Information</p>
        <ul>
          <li>
            <NavLink to={`${id}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${id}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route
          path="/movies/:movieId/cast"
          render={(props) => <Cast {...props} id={id} />}
        />
        <Route
          path="/movies/:movieId/reviews"
          render={(props) => <Reviews {...props} id={id} />}
        />
      </Switch>
    </>
  );
};

export default FilmItem;
