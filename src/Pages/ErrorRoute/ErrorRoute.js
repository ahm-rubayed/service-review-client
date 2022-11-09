import React from "react";
import error from "../../assets/error.jpg";
import useTitle from "../../hooks/useTitle";
import Header from "../Shared/Header/Header";

const ErrorRoute = () => {
  useTitle("404");

  return (
    <div>
      <img
        src={error}
        alt=""
        className="max-w-prose md:max-w-screen-md mx-auto"
      />
    </div>
  );
};

export default ErrorRoute;
