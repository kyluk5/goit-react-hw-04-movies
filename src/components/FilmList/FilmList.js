import React from "react";
import { NavLink } from "react-router-dom";
import "./FilmList.css";

const FilmList = ({ films, query = "" }) => {
  return (
    films.length > 0 && (
      <>
        <h1 className="list_title">Search List</h1>
        <ul className="film_list">
          {films.map((item) => (
            <li key={item.id} className="film_item">
              <NavLink
                to={{
                  pathname: `movies/${item.id}`,
                  state: {
                    from: `/movies`,
                    search: query,
                  },
                }}
                className="film_link"
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default FilmList;
