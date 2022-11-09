import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Review = () => {
  const { user } = useContext(AuthContext);
  const { displayName, photoURL } = user || "unresigster";

  const handleSubmit = (event) => {
    event.preventDefault();
    const reviewField = event.target.review.value;

    const reviewData = {
      reviewField,
      userName: displayName,
      userImage: photoURL,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Review placed successfully");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">
        Leave a <span className="myColor">Review</span>
      </h2>
      {user?.uid ? (
        <>
          <form onSubmit={handleSubmit}>
            <textarea
              name="review"
              className="mt-6 textarea textarea-bordered w-full"
              cols="200"
              rows="10"
              placeholder="Write your review here!"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="btn myBgColor text-end border-0 flex justify-end"
            />
          </form>
        </>
      ) : (
        <h2 className="text-xl font-semibold text-center my-32 myColor">
          Please login to add a review. <Link to="/login" className="underline">Login here</Link>
        </h2>
      )}
    </div>
  );
};

export default Review;
