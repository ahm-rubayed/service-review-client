import React, { useEffect, useState } from "react";
import CustomServiceRow from "./CustomServiceRow";

const CustomService = () => {
  const [addService, setAddService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addservice")
      .then((res) => res.json())
      .then((data) => setAddService(data));
  }, [addService]);

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">
        Your <span className="myColor">Services</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center my-16">
        {addService.map((service) => (
          <CustomServiceRow service={service}></CustomServiceRow>
        ))}
      </div>
    </div>
  );
};

export default CustomService;
