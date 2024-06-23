import React from "react";
import "./Intro.css";
import img1 from "../../Assets/img/icon/search-icon.svg";
import img2 from "../../Assets/img/icon/facebook-icon.svg";
import img3 from "../../Assets/img/icon/twitter-icon.svg";
import img4 from "../../Assets/img/icon/linkedin-icon.svg";
import img5 from "../../Assets/img/intro.png";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="container">
          <div className="intro-text">
            <h1>
              <div className="looking"> Looking for someone for work?</div>

              <br />
              <span className="green">we will help you</span>
            </h1>
            <div className="check-out">
              <p>Check out our offers</p>
              <div className="form">
                <div className="job-search">
                  <img
                    style={{ width: "20px", marginRight: "30px" }}
                    src={img1}
                    alt="erreur"
                  />
                  <input type="text" placeholders="Type in your job search" />
                </div>
                <div className="location">
                  <label htmlFor="lname">location:</label>
                  <select name="location" id="location">
                    <option value={0}>Wroclaw</option>
                    <option value={1}>Kraków</option>
                    <option value={2}>Warszawa</option>
                    <option value={3}>Gdańsk</option>
                  </select>
                  <input
                    className="search main-btn"
                    type="submit"
                    defaultValue="Search"
                  />
                </div>
              </div>
              <div className="follow">
                <span>Follow Us</span>
                <a href="https://www.facebook.com">
                  <img src={img2} alt="erreur" />
                </a>
                <a href="https://twitter.com">
                  <img src={img3} alt="erreur" />
                </a>
                <a href="https://www.linkedin.com">
                  <img src={img4} alt="erreur" />
                </a>
              </div>
            </div>
          </div>
          <div className="intro-img">
            <img src={img5} alt="erreur" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
