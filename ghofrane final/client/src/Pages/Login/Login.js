import React, { useEffect, useState } from "react";
import { login } from "../../redux/actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate, Link } from "react-router-dom";
import "./styleLogin.css";
import "react-toastify/dist/ReactToastify.css";
import { errorToast } from "../../utils";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
const Login = () => {
  const navigate = useNavigate();
  const { loading, isAuth, role, error } = useSelector(
    (state) => state.LoginReducer
  );

  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({});
  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loginDetails.email.includes("@")) {
      errorToast("Email Not Valid");
    }
    dispatch(login({ loginDetails, navigate }));
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="form-box">
          <div className="login-container" id="login">
            <div className="top">
              <header>Sign In</header>
            </div>
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="Email"
                onChange={handleChange}
                name="email"
              />
              <i className="fa-solid fa-user" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="input-field"
                placeholder="Password"
              />
              <i className="fa-solid fa-lock-alt" />
            </div>
            <div className="input-box">
              <input
                type="submit"
                className="submit"
                value={loading ? "Signing In..." : "Sign In"}
                disabled={loading} // Disable the button while loading
                onClick={handleSubmit}
              />
            </div>
            <div className="top">
              <span>
                Don't have an account?
                <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Login;
