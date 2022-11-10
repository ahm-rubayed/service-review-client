import React from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";


const LeftSidebar = () => {
    const details = useLoaderData();
    const { title, img, description, price } = details;
    return (
        <div className="my-28">
        <div className="card w-3/4 glass my-3 mx-auto">
        <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} alt="" />
        </PhotoView>
      </PhotoProvider>
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