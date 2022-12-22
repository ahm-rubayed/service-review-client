import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceItem = ({ service }) => {
  const { _id, title, img, price, description } = service;

  return (
    <div className="card w-96 glass shadow-lg">
      <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} alt="" />
        </PhotoView>
      </PhotoProvider>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 100 ? (
            <>
              {description.slice(0, 100) + "..."}
              <Link to={`/services/${_id}`} className="underline myColor">
                Read More
              </Link>
            </>
          ) : (
            description
          )}
        </p>
        <p>Price ${price}</p>
        <div className="card-actions justify-end">
          <Link
            className="border py-2 px-8 mt-3 explore-btn text-center relative"
            to={`/services/${_id}`}>
            Program Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
