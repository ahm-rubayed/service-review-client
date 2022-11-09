import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/login.jpg";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import "./Login.css";

const Login = () => {
  useTitle("login");
  const { logIn, googleLogIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleLogIn = () => {
    googleLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="grid grid-cols-2 my-28 items-center max-w-screen-lg mx-auto">
      <div>
        <img src={login} alt="" />
      </div>
      <div className="">
        <h2 className="text-2xl mt-6">Welcome to ProShoot</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs mt-6">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-border w-full max-w-xs focus:outline-none"
            />
          </div>
          <div className="form-control w-full max-w-xs mt-6">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-border w-full max-w-xs focus:outline-none"
            />
            <span className="myColor mt-5">{error}</span>
            <input
              type="submit"
              value="Login"
              className="mt-8 py-2 rounded-full myBgColor text-white cursor-pointer"
            />
          </div>
        </form>
        <button
          onClick={handleGoogleLogIn}
          className="border-2 mt-6 py-2 rounded-full w-full max-w-xs"
        >
          Google
        </button>
        <p className="mt-5">
          Don't have an account?{" "}
          <Link to="/register" className="underline">
            {" "}
            Regsiter
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
