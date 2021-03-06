import React, { useEffect, useState } from "react";
import { getReview } from "../../helpers/rejuest";

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReview(id)
      .then(({ data }) => {
        const reviews = data.results;
        setReviews(reviews);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return reviews.length > 0 ? (
    reviews.map((item) => (
      <div key={item.author}>
        <h5> {`Author: ${item.author}`}</h5>
        <p>{item.content}</p>
      </div>
    ))
  ) : (
    <p>Sory we dont have any reviews </p>
  );
};

export default Reviews;
