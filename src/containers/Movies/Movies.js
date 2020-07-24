import React, { useState } from "react";
import { searchFilm } from "../../helpers/rejuest";
import FilmList from "../../components/FilmList/FilmList";
import "./Movies.css";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const searchValue = ({ target }) => {
    setSearch(target.value);
  };

  const subForm = (e) => {
    e.preventDefault();
    searchFilm(search).then(({ data }) => {
      const arr = data.results;
      setResult(arr);
    });
    setSearch("");
  };

  return (
    <>
      <div className="Searchbar">
        <form className="SearchForm" onSubmit={subForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            value={search}
            onChange={searchValue}
          />
        </form>
      </div>
      <FilmList films={result} />
    </>
  );
};

export default Movies;
