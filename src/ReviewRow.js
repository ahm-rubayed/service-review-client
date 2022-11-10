import React from "react";

const ReviewRow = ({ reviews, handleDelete, user }) => {
  const { _id, reviewField } = reviews;

  return (
    <div>
      <tr>
        <th>
          <label>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-ghost btn-xs"
            >
              X
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {reviewField}
          <br />
        </td>
      </tr>
    </div>
  );
};

export default ReviewRow;
