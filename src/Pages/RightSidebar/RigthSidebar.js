import React, { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";

const RigthSidebar = () => {
  const [reviews, setReviews] = useState();

  console.log(reviews)

  useEffect(() => {
    fetch(`http://localhost:5000/reviews`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('proShoot')}`
    }
    })
    .then(res => {
        return res.json();
    })
      .then((data) => setReviews(data));
  }, [reviews]);

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">
        Happy <span className="myColor">Client</span>
      </h2>
      <div className="grid grid-cols-3 gap-6 mt-24">
        {reviews?.map((review) => (
          <ReviewItem key={review._id} review={review}></ReviewItem>
        ))}
      </div>
    </div>
  );
};

export default RigthSidebar;
