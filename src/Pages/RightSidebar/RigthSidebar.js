import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewItem from "./ReviewItem";

const RigthSidebar = () => {
  const [reviews, setReviews] = useState([]);
  const {logOut} = useContext(AuthContext)

  useEffect(() => {
    fetch(`https://proshoot-server.vercel.app/reviews`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("proShoot")}`,
      },
    })
      .then((res) => {
        if(res.status === 403) {
          return []
        }
      return res.json();
      })
      .then((data) => setReviews(data));
  }, [reviews, logOut]);

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">
        Happy <span className="myColor">Client</span>
      </h2>
      <div className="grid grid-cols-3 gap-6 mt-24">
        {Array.from(reviews).map((review) => (
          <ReviewItem key={review._id} review={review}></ReviewItem>
        ))}
      </div>
    </div>
  );
};

export default RigthSidebar;
