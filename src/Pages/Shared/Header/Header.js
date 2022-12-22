import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png.webp";
import { AuthContext } from "../../../contexts/AuthProvider";
import "./Header.css"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBg = () => {
    if(window.scrollY >= 20) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBg)

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };
  const menuItems = (
    <>
      <li>
        <Link to="/" className="nav-item hover:text-white">Home</Link>
      </li>
      <li>
        <Link to="/about" className="nav-item hover:text-white">About</Link>
      </li>
      <li>
        <Link to="/services" className="nav-item hover:text-white">Services</Link>
      </li>
      <li>
        <Link to="/blog" className="nav-item hover:text-white">Blog</Link>
      </li>
    </>
  );

  return (
    <nav className={navbar ? 'navbar active myBgColor fixed top-0 z-10 h-6 w-screen px-6' : 'navbar fixed top-0 z-10 h-6 w-screen px-6'}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 
            rounded-box w-52">
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
        {user?.uid ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="profile" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content 
                bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/myreviews" className="justify-between">
                    My Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/addservice">Add Service</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to="/login" className="text-white pr-6">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
