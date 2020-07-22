import React from "react";
import { Link } from "react-router-dom";
import "./FilmList.css";

const FilmList = ({ data, match }) => {
  const list = [...data];

  return (
    <>
      <h1 className="list_title">Search List</h1>
      <ul className="film_list">
        {list.map((item) => (
          <li key={item.id} className="film_item">
            <Link to={`${match.url}${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilmList;
