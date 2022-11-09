import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceItem from "../ServiceItem/ServiceItem";

const Services = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-32 max-w-screen-lg mx-auto my-28">
      <h2 className="text-4xl font-semibold text-center">Our services</h2>
      <div className="grid grid-cols-3 justify-items-center gap-12 mt-16 mb-6">
        {services?.map((service) => (
          <ServiceItem key={service._id} service={service}></ServiceItem>
        ))}
      </div>
      <div className="flex">
        <Link
          className="mx-auto border py-2 px-8 mb-6 explore-btn text-center relative" to="/services">
          See All
        </Link>
      </div>
    </div>
  );
};

export default Services;
