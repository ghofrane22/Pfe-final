import React from "react";
import "./search.css";
import img1 from "../../Assets/img/icon/arrow-right-icon.svg";
import img2 from "../../Assets/img/icon/business-development.svg";
import img3 from "../../Assets/img/icon/business-development-hover.svg";
import img4 from "../../Assets/img/icon/graphic.svg";
import img5 from "../../Assets/img/icon/pm.svg";
import img6 from "../../Assets/img/icon/pm-hover.svg";
import img7 from "../../Assets/img/icon/marketing.svg";
import img8 from "../../Assets/img/icon/marketing-active.svg";
import img9 from "../../Assets/img/icon/business-development.svg";
import img10 from "../../Assets/img/icon/business-development-hover.svg";
import img11 from "../../Assets/img/icon/business-development.svg";
import img12 from "../../Assets/img/icon/business-development-hover.svg";
import img13 from "../../Assets/img/icon/business-development.svg";
import img14 from "../../Assets/img/icon/business-development-hover.svg";
import img15 from "../../Assets/img/icon/business-development.svg";
import img16 from "../../Assets/img/icon/business-development-hover.svg";
import img17 from "../../Assets/img/icon/prew-arrow.svg";
import img18 from "../../Assets/img/icon/next-arrow.svg";
import img19 from "../../Assets/img/icon/arrow-right-icon.svg";
import img20 from "../../Assets/img/job-offers.png";
import img21 from "../../Assets/img/icon/go-icon.svg";
import img22 from "../../Assets/img/icon/create-paper-icon.svg";
import img23 from "../../Assets/img/icon/social-road-icon.svg";
import img24 from "../../Assets/img/icon/point-design-icon.svg";
import img25 from "../../Assets/img/icon/cv-icon.svg";
import img26 from "../../Assets/img/icon/customers.svg";
import img27 from "../../Assets/img/icon/applications.svg";
import img28 from "../../Assets/img/icon/projects.svg";

const Search = () => {
  return (
    <div className="container">
      <div className="search-by">
        <h1>
          Search by <span className="green">category</span>
        </h1>
        <a href="#">
          All category
          <img style={{ width: 20, marginLeft: 20 }} src={img1} alt="erreur" />
        </a>

        <div
          id="carouselExampleIndicators"
          className="carousel slide  "
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <div className="carousel-inner text-center ">
            <div className="carousel-item active">
              <div className="card-item">
                <div className="photo">
                  <img className="main-state" src={img2} alt="erreur" />
                  <img className="hover" src={img3} alt="erreur" />
                </div>
                <p>
                  Business
                  <br />
                  Development
                </p>
              </div>
              <div className="card-item">
                <div className="photo">
                  <img className="main-state" src={img4} alt="erreur" />
                  <img className="hover" src={img4} alt="erreur" />
                </div>
                <p>
                  Graphic
                  <br />
                  Designer
                </p>
              </div>
              <div className="card-item">
                <div className="photo">
                  <img className="main-state" src={img5} alt="erreur" />
                  <img className="hover" src={img6} alt="erreur" />
                </div>
                <p>
                  Project
                  <br />
                  Management
                </p>
              </div>
              <div className="card-item">
                <div className="photo">
                  <img className="main-state" src={img7} alt="erreur" />
                  <img className="hover" src={img8} alt="erreur" />
                </div>
                <p>
                  Marketing &amp;
                  <br />
                  Communication
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-item">
                <div className="photo">
                  <img className="main-state" src={img9} alt="erreur" />
                  <img className="hover" src={img10} alt="erreur" />
                </div>
                <p>
                  Another
                  <br />
                  Category
                </p>
              </div>
              <div className="card-item">
                <div className="photo">
                  <img className="main-state" src={img11} alt="erreur" />
                  <img className="hover" src={img12} alt="erreur" />
                </div>
                <p>
                  Another
                  <br />
                  Category
                </p>
              </div>
              <div className="card-item">
                <div className="photo">
                  <img className="main-state" src={img13} alt="erreur" />
                  <img className="hover" src={img14} alt="erreur" />
                </div>
                <p>
                  Another
                  <br />
                  Category
                </p>
              </div>
              <div className="card-item">
                <div className="photo">
                  <img className="main-state" src={img15} alt="erreur" />
                  <img className="hover" src={img16} alt="erreur" />
                </div>
                <p>
                  Another
                  <br />
                  Category
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-nav">
            <a
              href="#"
              className="nav-item"
              role="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
              tabIndex="0"
            >
              <img src={img17} alt="erreur" />
            </a>
            <a
              href="#"
              className="nav-item"
              role="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
              tabIndex="0"
            >
              <img src={img18} alt="erreur" />
            </a>
          </div>
        </div>
      </div>
      <br />
      {/*job offers*/}
      <div className="job-offers">
        <h1>
          Job <span className="green">offers</span>
        </h1>
        <a href="#">
          All offers{" "}
          <img style={{ width: 20, marginLeft: 20 }} src={img19} alt="erreur" />
        </a>
        <div className="row pt-5">
          <div className="image col-md-4">
            <img src={img20} alt="erreur" />
          </div>
          <div className="col-md-4">
            <div className="offert-wrapper">
              <div className="offert">
                <div>
                  <div className="offert-description">
                    <div className="company-logo">
                      <img src={img21} alt="erreur" />
                    </div>
                    <div className="description">
                      <p className="company-name">Go! SM</p>
                      <p className="description">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged.
                      </p>
                    </div>
                  </div>
                  <div className="offert-meta">
                    <p className="location">
                      location: <span className="city">Stuttgart</span>
                    </p>
                    <p className="offert-counter">
                      Jobs:{" "}
                      <span className="green">
                        <strong>3</strong>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" className="main-btn">
                See details
              </a>
            </div>
            <div className="offert-wrapper">
              <div className="offert">
                <div>
                  <div className="offert-description">
                    <div className="company-logo">
                      <img src={img22} alt="erreur" />
                    </div>
                    <div className="description">
                      <p className="company-name">Create Paper</p>
                      <p className="description">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged.
                      </p>
                    </div>
                  </div>
                  <div className="offert-meta">
                    <p className="location">
                      location: <span className="city">Pekin</span>
                    </p>
                    <p className="offert-counter">
                      Jobs:{" "}
                      <span className="green">
                        <strong>5</strong>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" className="main-btn">
                See details
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="offert-wrapper">
              <div className="offert">
                <div>
                  <div className="offert-description">
                    <div className="company-logo">
                      <img src={img23} alt="erreur" />
                    </div>
                    <div className="description">
                      <p className="company-name">Social Road</p>
                      <p className="description">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged.
                      </p>
                    </div>
                  </div>
                  <div className="offert-meta">
                    <p className="location">
                      location: <span className="city">San Francisco</span>
                    </p>
                    <p className="offert-counter">
                      Jobs:{" "}
                      <span className="green">
                        <strong>2</strong>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" className="main-btn">
                See details
              </a>
            </div>
            <div className="offert-wrapper">
              <div className="offert">
                <div>
                  <div className="offert-description">
                    <div className="company-logo">
                      <img src={img24} alt="erreur" />
                    </div>
                    <div className="description">
                      <p className="company-name">Point Design</p>
                      <p className="description">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged.
                      </p>
                    </div>
                  </div>
                  <div className="offert-meta">
                    <p className="location">
                      location: <span className="city">Tempe</span>
                    </p>
                    <p className="offert-counter">
                      Jobs:{" "}
                      <span className="green">
                        <strong>8</strong>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" className="main-btn">
                See details
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*Top Notch Service*/}
      <div className="service text-center">
        <h1>
          Top Notch <span className="green">Service</span>
        </h1>
        <div className="service-items">
          <div className="item">
            <img src={img25} alt="erreur" />
            <span className="counter">2 331</span>
            <span>Job offers</span>
          </div>
          <div className="item">
            <img src={img26} alt="erreur" />
            <span className="counter">1 148</span>
            <span>Satisfied customers</span>
          </div>
          <div className="item">
            <img src={img27} alt="erreur" />
            <span className="counter">5 364</span>
            <span>Applications sent</span>
          </div>
          <div className="item">
            <img src={img28} alt="erreur" />
            <span className="counter">1 764</span>
            <span>Realized projects</span>
          </div>
        </div>
      </div>
      {/* Newsletter */}
      <div className="update-news">
        <div className="row">
          <div className="col-md-5 news-text">
            <h2>Get your update news</h2>
            <p>
              If you going to use a passage of Lotem Ipsum, you need to be sure
              there isn’t anything embarrassing.
            </p>
          </div>
          <div className="col-md-7 news-form">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              id="email"
            />
            <button type="submit">Send</button>
          </div>
        </div>
      </div>
      <div className="find-jobs text-center">
        <h1>
          <span className="green">Find someone</span> To work around
          <br />
          You
        </h1>
      </div>
    </div>
  );
};

export default Search;
