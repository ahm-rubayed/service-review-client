import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewRow from "../../ReviewRow";
import toast from "react-hot-toast";
import swal from "sweetalert";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myreview, setMyreview] = useState([]);

  useEffect(() => {
    fetch(`https://proshoot-server.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("proShoot")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => setMyreview(data));
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://proshoot-server.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("deleted successfully");
              const remaining = myreview.filter((odr) => odr._id !== id);
              setMyreview(remaining);
            }
});
      } else {
        swal("Review hasn't deleted");
      }
    });
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://proshoot-server.vercel.app/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("proShoot")}`,
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          const remaining = myreview.filter((review) => review._id !== id);
          const approving = myreview.find((review) => review._id === id);
          approving.status = "Approved";

          const newReview = [approving, ...remaining];
          setMyreview(newReview);
        }
      });
  };

  return (
    <div className="overflow-x-auto my-32 max-w-screen-md mx-auto px-14 md:px-0">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Here is your all reviews</th>
          </tr>
        </thead>
        <tbody>
          {myreview?.map((review) => (
            <ReviewRow
              key={review._id}
              reviews={review}
              user={user}
              handleDelete={handleDelete}
              handleStatusUpdate={handleStatusUpdate}
            ></ReviewRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
