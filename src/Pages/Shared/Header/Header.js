import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png.webp"

const Header = () => {
    const menuItems = <>
     <li><Link>Home</Link></li>
     <li><Link>About</Link></li>
     <li><Link>Services</Link></li>
     <li><Link>Blog</Link></li>
    </>

  return (
    <div className="navbar fixed top-0 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"/>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
           {menuItems}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
       <Link to="/">
        <img src={logo} alt="" />
       </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 
            rounded-box w-52">
            <li>
             <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
             <Link>Settings</Link>
            </li>
            <li>
             <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
