import React from "react";
import "./Profilhandmade.css";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";

const Profilhandmade = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-body pb-0">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="text-center border-end">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        className="img-fluid avatar-xxl rounded-circle"
                        alt=""
                      />
                      <h4 className="text-primary font-size-20 mt-3 mb-2">
                        Jansh Wells
                      </h4>
                      <h5 className="text-muted font-size-13 mb-0">
                        Web Designer
                      </h5>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-9">
                    <div className="ms-3">
                      <div>
                        <h4 className="card-title mb-2">Biography</h4>
                        <p className="mb-0 text-muted">
                          Hi I'm Jansh, has been the industry's standard dummy
                          text To an English person alteration text.
                        </p>
                      </div>
                      <div className="row my-4">
                        <div className="col-md-12">
                          <div>
                            <p className="text-muted mb-2 fw-medium">
                              <i className="mdi mdi-email-outline me-2" />
                              Janshwells@probic.com
                            </p>
                            <p className="text-muted fw-medium mb-0">
                              <i className="mdi mdi-phone-in-talk-outline me-2" />
                              418-955-4703
                            </p>
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}

                      {/* end ul */}
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
              </div>
              {/* end card body */}
            </div>

            {/* end card */}
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card">
            <div className="card-body">
              <div className="pb-2">
                <h4 className="card-title-mb-3">About</h4>
                <p>
                  Hi I'm Jansh, has been the industry's standard dummy text To
                  an English person, it will seem like simplified.
                </p>
                <ul className="ps-3 mb-0">
                  <li>it will seem like simplified.</li>
                  <li>
                    To achieve this, it would be necessary to have uniform
                    pronunciation
                  </li>
                </ul>
                {/* end ul */}
              </div>
              <hr />
              <div className="pt-2">
                <h4 className="card-title mb-4">My Skill</h4>
                <div className="d-flex gap-2 flex-wrap">
                  <span className="badge badge-soft-secondary p-2">HTML</span>
                  <span className="badge badge-soft-secondary p-2">
                    Bootstrap
                  </span>
                  <span className="badge badge-soft-secondary p-2">Scss</span>
                  <span className="badge badge-soft-secondary p-2">
                    Javascript
                  </span>
                  <span className="badge badge-soft-secondary p-2">React</span>
                  <span className="badge badge-soft-secondary p-2">
                    Angular
                  </span>
                </div>
              </div>
            </div>
            {/* end cardbody */}
          </div>
          {/* end card */}
          <div className="card">
            <div className="card-body">
              <div>
                <h4 className="card-title mb-4">Personal Details</h4>
                <div className="table-responsive">
                  <table className="table table-bordered mb-0">
                    <tbody>
                      <tr>
                        <th scope="row">Name</th>
                        <td>Jansh Wells</td>
                      </tr>
                      {/* end tr */}
                      <tr>
                        <th scope="row">Location</th>
                        <td>California, United States</td>
                      </tr>
                      {/* end tr */}
                      <tr>
                        <th scope="row">Language</th>
                        <td>English</td>
                      </tr>
                      {/* end tr */}
                      <tr>
                        <th scope="row">Website</th>
                        <td>abc12@probic.com</td>
                      </tr>
                      {/* end tr */}
                    </tbody>
                    {/* end tbody */}
                  </table>
                  {/* end table */}
                </div>
              </div>
            </div>
            {/* end card body */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profilhandmade;
