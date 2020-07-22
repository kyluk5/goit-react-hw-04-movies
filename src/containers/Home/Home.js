import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmList from "../../components/FilmList/FilmList";

const Home = ({ match }) => {
  const [films, setFilms] = useState([]);

  const popularFilms = () => {
    axios
      .get(
        `
https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_KEY}`
      )
      .then((data) => {
        const arr = data.data.results;
        setFilms(arr);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    popularFilms();
  }, []);

  return (
    <>
      <FilmList data={films} match={match} />
    </>
  );
};

export default Home;
