import React, { useEffect, useState } from "react";
import axios from "axios";

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  const getReview = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=a71ee21a323f0746cf52494ffbbd4ef9&language=en-US&page=1`
      )
      .then(({ data }) => {
        const reviews = data.results;
        setReviews(reviews);
      });
  };

  useEffect(() => {
    getReview();
  }, []);

  return reviews.map((item) => (
    <div key={item.author}>
      <h5> {`Author: ${item.author}`}</h5>
      <p>{item.content}</p>
    </div>
  ));
};

export default Reviews;
