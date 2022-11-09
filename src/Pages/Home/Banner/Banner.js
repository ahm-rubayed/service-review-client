import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="overlay">
        <div className="text-white text-center absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
          <h1 className="text-6xl font-semibold leading-tight ">
            Drone Photography and Videography
          </h1>
          <p className="text-slate-300 mt-4">
            Authentic, vibrant, honest—this is how photographer Rocco describes
            his wedding photography. The Swiss photographer has photographed
            ‘the happiest day’ in many couple’s lives for ten years now. It’s
            particularly important to him to capture the intense emotions which
            make this day so unique and personal.
          </p>
          <button className="mt-6 border py-2 px-5 explore-btn relative"><Link to="/services">Explore Services</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
