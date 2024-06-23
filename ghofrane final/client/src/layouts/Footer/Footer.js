import React from "react";
import "./Footer.css";
import img1 from "../../Assets/img/icon/facebook-icon.svg";
import img2 from "../../Assets/img/icon/twitter-icon.svg";
import img3 from "../../Assets/img/icon/linkedin-icon.svg";
import img4 from "../../Assets/img/icon/instagram-icon.svg";
import img5 from "../../Assets/img/icon/company-logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container text-center text-md-start">
          <div className="footer-wrap">
            <div className="about">
              <img src={img5} alt="erreur" />
              <p className="text-muted py-4">
                Start working with Firmbee which can provide you with all the
                tools needed to run an effcieint business remotely.
              </p>
              <div className="social-media">
                <a href="#" className="me-2 text-reset">
                  <img src={img1} alt="erreur" />
                </a>
                <a href="#" className="me-2 text-reset">
                  <img src={img2} alt="erreur" />
                </a>
                <a href="#" className="me-2 text-reset">
                  <img src={img3} alt="erreur" />
                </a>
                <a href="#" className="me-2 text-reset">
                  <img src={img4} alt="erreur" />
                </a>
              </div>
            </div>
            <div className="company">
              <h6 className="fw-bold">Company</h6>
              <p>
                <a href="#">About us</a>
              </p>
              <p>
                <a href="#">Services</a>
              </p>
              <p>
                <a href="#">Team</a>
              </p>
              <p>
                <a href="#">Pricing</a>
              </p>
              <p>
                <a href="#">Project</a>
              </p>
              <p>
                <a href="#">Careers</a>
              </p>
              <p>
                <a href="#">Blog</a>
              </p>
              <p>
                <a href="#">Login</a>
              </p>
            </div>
            <div className="useful-links">
              <h6 className="fw-bold">Useful links</h6>
              <p>
                <a href="#">Terms of </a>
              </p>
              <p>
                <a href="#">Services</a>
              </p>
              <p>
                <a href="#">Privacy Policy</a>
              </p>
              <p>
                <a href="#">Documentation</a>
              </p>
              <p>
                <a href="#">Changelog</a>
              </p>
              <p>
                <a href="#">Components</a>
              </p>
            </div>
            <div className="newsletter">
              <h6 className="fw-bold">Newsletter</h6>
              <p className="text-muted">
                Sign up and receive the latest tips via email.
              </p>
              <form id="subscribe" action="#">
                <label htmlFor="email">Your e-mail:</label>
                <input
                  type="email"
                  placeholder="e-mail:"
                  name="email"
                  required
                />
                <button type="submit" className="main-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
