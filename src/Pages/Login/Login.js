import React from "react";
import { Link } from "react-router-dom";
import login from "../../assets/login.jpg";
import "./Login.css";

const Login = () => {
  return (
    <div className="grid grid-cols-2 my-28 items-center max-w-screen-lg mx-auto">
      <div>
        <img src={login} alt="" className="" />
      </div>
      <div className="">
        <h2 className="text-2xl mt-6">Welcome to ProShoot</h2>
        <form>
          <div className="form-control w-full max-w-xs mt-6">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-border w-full max-w-xs focus:outline-none"/>
          </div>
          <div className="form-control w-full max-w-xs mt-6">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-border w-full max-w-xs focus:outline-none"/>
            <input
              type="submit"
              value="Login"
              className="mt-8 py-2 rounded-full myBgColor text-white "/>
          </div>
        </form>
        <p className="mt-5">
          Don't have an account? <Link to='/register' className="underline"> Regsiter</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
