import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { isAuth, user } = useSelector((state) => state.LoginReducer);
  const [userToggle, setUserToggle] = useState(false);
  const handleToggle = () => {
    setUserToggle(!userToggle);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="wrapper">
        <nav className="nav">
          <div className="nav-logo">
            <p>LOGO .</p>
          </div>
          <div className="nav-menu" id="navMenu">
            <ul>
              <li>
                <Link to="/" className="link active">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/services-list" className="link">
                  Services
                </Link>
              </li>
              {user?.role == "admin" ? (
                <>
                  <li>
                    <Link to="/admin/handmade-list" className="link">
                      HandMade List
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/client-list" className="link">
                      Client List
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/handMade-approval" className="link">
                      Approval HandMade List
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/offer-list" className="link">
                      Offer List
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/category" className="link">
                      Category
                    </Link>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
          {!isAuth ? (
            <>
              <div className="nav-button">
                <Link to="/Login">
                  <button className="btn white-btn" id="loginBtn">
                    Sign In
                  </button>
                </Link>
                <Link to="/Signup">
                  <button className="btn" id="registerBtn">
                    Sign Up
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <ul className="header-widget-wrap">
              <li className={`header-widget ${userToggle ? "active" : ""}`}>
                <div
                  className="aon-admin-messange sf-toogle-btn"
                  onClick={handleToggle}
                >
                  <span className="feather-user-pic">
                    <img src={user?.avatar} alt="" />
                  </span>
                </div>
                <div className="ws-toggle-popup popup-tabs-wrap-section user-welcome-area">
                  <ul className="user-welcome-list">
                    <li>
                      <strong>
                        Welcome ,{" "}
                        <span className="site-text-primary">
                          {user?.fullName}
                        </span>
                      </strong>
                    </li>
                    <li>
                      <Link to="/messages">
                        <i className="feather-sliders" /> Messages
                      </Link>
                    </li>
                    {user?.role === "client" ? (
                      <>
                        <li>
                          <Link to="/client/offer-list">
                            <i className="feather-sliders" /> Offer List
                          </Link>
                        </li>
                        <li>
                          <Link to="/client/profile">
                            <i className="feather-sliders" /> profile
                          </Link>
                        </li>
                      </>
                    ) : user?.role == "handMade" ? (
                      <>
                        <li>
                          <Link to="/handMade/offer-list">
                            <i className="feather-sliders" /> Offer List
                          </Link>
                        </li>

                        <li>
                          <Link to="/handMade/profile">
                            <i className="feather-sliders" /> Profile
                          </Link>
                        </li>
                      </>
                    ) : null}

                    <li
                      onClick={() => {
                        localStorage.removeItem("accessToken");
                        navigate("/login");
                        window.location.reload();
                      }}
                    >
                      <a href="#">
                        <i className="feather-log-out" /> Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          )}

          <div className="nav-menu-btn">
            <i className="bx bx-menu" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
