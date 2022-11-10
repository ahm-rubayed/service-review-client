import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewRow from "../../ReviewRow";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myreview, setMyreview] = useState([]);

  console.log(myreview)

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyreview(data));
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const procced = window.confirm(
      "Are you sure, you want to delete your review?"
    );
    if (procced) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount > 0) {
                alert('deleted successfully');
                const remaining = myreview.filter(odr => odr._id !== id);
                setMyreview(remaining);
            }
        });
    }
  };

  return (
    <div className="overflow-x-auto my-32 max-w-screen-md mx-auto ">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Here is your all reviews</th>
          </tr>
        </thead>
        <tbody>
            {
                myreview.map(review => <ReviewRow
                    key={review._id}
                    reviews={review}
                    user={user}
                    handleDelete={handleDelete}
                ></ReviewRow>)
            }
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
