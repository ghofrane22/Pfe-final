import React, { useState, useEffect } from "react";
import "./About.css";
import img1 from "../../Assets/img/teamwork.png";
import img2 from "../../Assets/img/team-1.jpg";
import img3 from "../../Assets/img/team-2.jpg";
import img4 from "../../Assets/img/team-3.jpg";
import img5 from "../../Assets/img/team-4.jpg";
import img6 from "../../Assets/img/icon/cv-icon.svg";
import img7 from "../../Assets/img/icon/customers.svg";
import img8 from "../../Assets/img/icon/applications.svg";
import img9 from "../../Assets/img/icon/projects.svg";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      <div className={`container fade-in ${isVisible ? "show" : ""}`}>
        <div className={`row fade-in ${isVisible ? "show" : ""}`}>
          <div className={`aboutus fade-in ${isVisible ? "show" : ""}`}>
            <div className={`about fade-in ${isVisible ? "show" : ""}`}>
              <div className={`company fade-in ${isVisible ? "show" : ""}`}>
                <h1>
                  <div className={`welcom fade-in ${isVisible ? "show" : ""}`}>
                    Welcome to <span className="green welcom">Company</span>
                  </div>
                </h1>
                <div className={`img ${isVisible ? "fade-in show" : ""}`}>
                  <img src={img1} alt="true" />
                </div>
              </div>
              <div className={`comp fade-in ${isVisible ? "show" : ""}`}>
                <h3>
                  <span className="green">20 Years</span> of Better Hiring in
                  Europe
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  illo corrupti debitis recusandae hic, ipsa sit quas? Autem
                  fuga nihil voluptate dolorum similique dignissimos quaerat
                  quidem consectetur nobis aliquid quae voluptatibus ex
                  assumenda, amet adipisci eveniet porro soluta accusamus
                  voluptatem doloremque, nulla impedit, culpa hic. Ad nihil
                  vero, debitis fuga at nostrum modi! Expedita ab ex, dolores,
                  fugit quis optio laborum sint, officiis molestiae temporibus
                  ratione totam odio explicabo beatae voluptatem neque deleniti
                  iusto eaque? Ad nihil vero, debitis fuga at nostrum modi
                </p>
              </div>
            </div>
            <br />
            <figure
              className={`quote text-start fade-in ${isVisible ? "show" : ""}`}
            >
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
            <div
              className={`team text-center mt-5 fade-in ${
                isVisible ? "show" : ""
              }`}
            >
              <h3>
                A{" "}
                <span className={`green fade-in ${isVisible ? "show" : ""}`}>
                  team
                </span>
                that's growing every day
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                ab est repudiandae quasi hic sapiente earum velit fuga odio
                neque numquam eligendi qui tenetur ipsam, animi atque expedita
                eaque nesciunt in.Atque ut blanditiis quos excepturi perferendis
                a, quidem modi.
              </p>
              <div
                className={`team-person py-3 fade-in ${
                  isVisible ? "show" : ""
                }`}
              >
                <div className={`person fade-in ${isVisible ? "show" : ""}`}>
                  <div className={`photo fade-in ${isVisible ? "show" : ""}`}>
                    <img src={img2} alt="true" />
                  </div>
                  <span className={`name fade-in ${isVisible ? "show" : ""}`}>
                    John Fox
                  </span>
                  <span className={`${isVisible ? "show" : ""} fade-in`}>
                    Marketing Manager
                  </span>
                </div>
                <div className={`person fade-in ${isVisible ? "show" : ""}`}>
                  <div className={`photo fade-in ${isVisible ? "show" : ""}`}>
                    <img src={img3} alt="true" />
                  </div>
                  <span className={`name fade-in ${isVisible ? "show" : ""}`}>
                    Kate Rose
                  </span>
                  <span className={`${isVisible ? "show" : ""} fade-in`}>
                    SEO
                  </span>
                </div>
                <div className={`person fade-in ${isVisible ? "show" : ""}`}>
                  <div className={`photo fade-in ${isVisible ? "show" : ""}`}>
                    <img src={img4} alt="true" />
                  </div>
                  <span className={`name fade-in ${isVisible ? "show" : ""}`}>
                    Anna Brown
                  </span>
                  <span className={`${isVisible ? "show" : ""} fade-in`}>
                    UI Expert
                  </span>
                </div>
                <div className={`person fade-in ${isVisible ? "show" : ""}`}>
                  <div className={`photo fade-in ${isVisible ? "show" : ""}`}>
                    <img src={img5} alt="true" />
                  </div>
                  <span className={`name fade-in ${isVisible ? "show" : ""}`}>
                    Mike Doe
                  </span>
                  <span className={`${isVisible ? "show" : ""} fade-in`}>
                    Web Developer
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`service text-center fade-in ${
                isVisible ? "show" : ""
              }`}
            >
              <h2>
                Why choose <span className="green">Us</span>?
              </h2>
              <div className="service-items">
                <div className={`item fade-in ${isVisible ? "show" : ""}`}>
                  <img src={img6} alt="true" />
                  <span
                    className={`counter ${isVisible ? "show" : ""} fade-in`}
                  >
                    2 331
                  </span>
                  <span className={`${isVisible ? "show" : ""} fade-in`}>
                    Job offers
                  </span>
                </div>
                <div className={`item fade-in ${isVisible ? "show" : ""}`}>
                  <img src={img7} alt="true" />
                  <span
                    className={`counter ${isVisible ? "show" : ""} fade-in`}
                  >
                    1 148
                  </span>
                  <span className={`${isVisible ? "show" : ""} fade-in`}>
                    Satisfied customers
                  </span>
                </div>
                <div className={`item fade-in ${isVisible ? "show" : ""}`}>
                  <img src={img8} alt="true" />
                  <span
                    className={`counter ${isVisible ? "show" : ""} fade-in`}
                  >
                    5 364
                  </span>
                  <span className={`${isVisible ? "show" : ""} fade-in`}>
                    Applications sent
                  </span>
                </div>
                <div className={`item fade-in ${isVisible ? "show" : ""}`}>
                  <img src={img9} alt="true" />
                  <span
                    className={`counter ${isVisible ? "show" : ""} fade-in`}
                  >
                    1 764
                  </span>
                  <span className={`${isVisible ? "show" : ""} fade-in`}>
                    Realized projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
