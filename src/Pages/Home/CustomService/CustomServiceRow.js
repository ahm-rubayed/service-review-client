import React from "react";

const CustomServiceRow = ({service}) => {
    const {title, desc} = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomServiceRow;
