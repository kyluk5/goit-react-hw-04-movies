import React from "react";
import "./Movies.css";

const Movies = () => {
  return (
    <div className="Searchbar">
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
      </form>
    </div>
  );
};

export default Movies;
