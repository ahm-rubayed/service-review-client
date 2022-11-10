import React from "react";
import { Link } from "react-router-dom";
import man from "../../../assets/man.webp"
import useTitle from "../../../hooks/useTitle";
import "./About.css"

const About = () => {
  useTitle("about")
  return (
    <div className="px-11 lg:max-w-screen-lg mx-auto my-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-5xl">Hassle-Free Drone <br /> Photography</h2>
          <p className="text-lg my-6 w-4/5">Inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur.</p>
          <p className="text-lg w-4/5">Aute irure dolor inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur. Excepteur sintxsdfas occaecat.</p>
          <button className="about-btn transition duration-300 ease-in-out mt-8 border-2 py-2 px-5 text-white bg-black"><Link>Explore Services</Link></button>
        </div>
        <div className="mt-6">
            <img src={man} alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;
