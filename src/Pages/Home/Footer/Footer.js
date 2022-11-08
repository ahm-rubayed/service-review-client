import React from "react";
import logo2 from "../../../assets/logo2.webp";
import { FaTwitter, FaFacebook, FaYoutube  } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="px-40 pt-16 pb-7 bg-black text-white">
        <div className="grid grid-cols-4 gap-6">
        <div className="justify-self-end">
        <img src={logo2} alt="" />
        <p className="my-6">
          Duis aute irure dolor inasfa reprehenderit in voluptate velit esse
          cillum reeut cupidatatfug.
        </p>
        <span className="block myColor text-4xl">012 345 678</span>
        <small className="mt-4 block myColor">contactproshoot@gmail.com</small>
      </div>
      <div className="justify-self-end">
        <span className="text-2xl myColor">Navigation</span>
        <ul>
            <li className="my-3">Home</li>
            <li className="my-3">About</li>
            <li className="my-3">Services</li>
            <li className="my-3">Blogs</li>
        </ul>
      </div>
      <div className="justify-self-end">
        <span className="text-2xl myColor">Services</span>
        <ul>
            <li className="my-3">Drone Mapping</li>
            <li className="my-3">Real State</li>
            <li className="my-3">Commercial</li>
            <li className="my-3">Weeding</li>
        </ul>
      </div>
      <div className="justify-self-end">
        <ul className="flex gap-4">
        <li className="text-xl myColor cursor-pointer p-2 rounded-full social-icon"><FaTwitter/></li>
        <li className="text-xl myColor cursor-pointer p-2 rounded-full social-icon"><FaFacebook/></li>
        <li className="text-xl myColor cursor-pointer p-2 rounded-full social-icon"><FaYoutube/></li>
        </ul>
      </div>
        </div>
      <p className="text-center mt-12">Copyright ©2022 All rights reserved | This template is made with by Rubayed Ahmed</p>
    </div>
  );
};

export default Footer;
