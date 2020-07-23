import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cast.css";

const Cast = ({ id }) => {
  const [credits, setCredits] = useState([]);

  const viewCredits = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a71ee21a323f0746cf52494ffbbd4ef9`
      )
      .then(({ data }) => {
        const info = data.cast;
        setCredits(info);
      });
  };

  useEffect(() => {
    viewCredits();
  }, []);

  return (
    <ul className="cast_list">
      {credits.map((item) => (
        <li className="cast_item" key={item.id}>
          {item.profile_path && (
            <>
              <img
                src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                alt={item.name}
                className="cast_img"
              />
              <p className="name">{item.name}</p>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Cast;
