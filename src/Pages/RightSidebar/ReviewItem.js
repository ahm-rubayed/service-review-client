import React from "react";

const ReviewItem = ({ review }) => {
  const { userName, userImage, reviewField } = review;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={userImage} alt="user" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{userName}</h2>
        <p>{reviewField}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ReviewItem;
