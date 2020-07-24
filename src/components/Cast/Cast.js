import React, { useEffect, useState } from "react";
import { viewCredits } from "../../helpers/rejuest";
import "./Cast.css";

const Cast = ({ id }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    viewCredits(id)
      .then(({ data }) => {
        const info = data.cast;
        setCredits(info);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return credits.length > 0 ? (
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
  ) : (
    <p>Sory we dont have any Casts :(</p>
  );
};

export default Cast;
