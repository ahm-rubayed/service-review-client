import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewRow from "../../ReviewRow";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myreview, setMyreview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyreview(data));
  }, [logOut]);

  const handleDelete = (id) => {
    console.log(id)
    const procced = window.confirm(
      "Are you sure, you want to delete your review?"
    );
    if (procced) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {
                myreview.map(review => <ReviewRow
                    key={review._id}
                    reviews={review}
                    handleDelete={handleDelete}
                ></ReviewRow>)
            }
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
