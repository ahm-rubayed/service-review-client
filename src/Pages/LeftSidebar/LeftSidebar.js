import React from "react";
import { useLoaderData } from "react-router-dom";


const LeftSidebar = () => {
    const details = useLoaderData();
    const { title, img, description, price } = details;
    return (
        <div className="my-28">
        <div className="card w-3/4 glass my-3 mx-auto">
          <figure>
            <img src={img} alt="" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{title}</h2>
            <p className="text-gray-500">{description}</p>
            <p>Price - <span className="myColor">${price}</span></p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      </div>
    );
};

export default LeftSidebar;