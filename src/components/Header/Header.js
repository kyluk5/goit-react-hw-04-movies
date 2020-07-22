import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="nav_list">
        <li className="nav_item">
          <Link to="/" className="nav_btn">
            HOME
          </Link>
        </li>
        <li className="nav_item">
          <Link to="/movies" className="nav_btn">
            MOVIES
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
