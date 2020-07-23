import React, { useEffect, useState } from "react";
import { getReview } from "../../helpers/rejuest";

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    getReview(id)
      .then(({ data }) => {
        const reviews = data.results;
        setReviews(reviews);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return reviews.map((item) => (
    <div key={item.author}>
      <h5> {`Author: ${item.author}`}</h5>
      <p>{item.content}</p>
    </div>
  ));
};

export default Reviews;
