import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_hand_Made_Services } from "../../redux/actions/Actions";
import { Link } from "react-router-dom";

const HandMadeServices = () => {
  const { handMadeServices } = useSelector((state) => state.LoginReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_hand_Made_Services());
  }, [dispatch]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [filtredServices, setFiltredServices] = useState([]);

  useEffect(() => {
    setFiltredServices(handMadeServices);
  }, [handMadeServices]);

  useEffect(() => {
    setFiltredServices(
      handMadeServices?.filter(
        (el) =>
          el.fullName.toLowerCase().includes(search.toLowerCase()) &&
          el.job &&
          el.job.jobName.toLowerCase().includes(category.toLowerCase()) &&
          el.city.toLowerCase().includes(location.toLowerCase())
      )
    );
  }, [search, category, location, handMadeServices]);

  return (
    <div className="aon-page-jobs-wrap">
      <div className="container">
        <div className="row">
          {/* Side bar start */}
          <div className="col-lg-4 col-md-12">
            <aside className="side-bar sf-rounded-sidebar">
              {/* Find a Job */}
              <div className="sf-job-sidebar-blocks">
                <h4 className="sf-title">Find a Services</h4>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <br />
                <button className="sf-btn-large" type="submit">
                  Search
                </button>
              </div>
              {/* Location */}
              <div className="sf-job-sidebar-blocks">
                <h4 className="sf-title">Location</h4>
                <div className="form-group sf-location-ring-wrap">
                  <div className="category-select">
                    <div>
                      <select
                        className="form-control"
                        title="All Location"
                        onChange={(e) => setLocation(e.target.value)}
                      >
                        <option value={""}> Select Location </option>
                        <option value="Béja">Béja</option>
                        <option value="Tunis">Tunis</option>
                      </select>
                    </div>
                  </div>
                  <a href="#" className="sf-location-ring" />
                </div>
              </div>
              {/* Category */}
              <div className="sf-job-sidebar-blocks">
                <h4 className="sf-title">Category</h4>
                <div className="category-select">
                  <div>
                    <select
                      className="form-control"
                      title="All category"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value={""}> Select a Category </option>
                      <option value="Electrician">Electrician</option>
                      <option value="Plumber">Plumber</option>
                    </select>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          {/* Side bar END */}
          {/* Right part start */}
          <div className="col-lg-8 col-md-12">
            {/* Showing results topbar Start */}
            <div className="aon-search-result-top flex-wrap d-flex justify-content-between">
              <div className="aon-search-result-title">
                <h5>
                  <span>({filtredServices?.length})</span> Services
                </h5>
              </div>
              {/* Showing results topbar End */}
            </div>
            <ul className="job_listings job_listings-two">
              {filtredServices?.map((el, index) => {
                return (
                  <li
                    className="job_listing type-job_listing job-type-hourly"
                    key={index}
                  >
                    <Link
                      className="job-clickable-box"
                      to={`/service/details/${el._id}`}
                    />
                    <div className="job-comapny-logo">
                      <img className="company_logo" src={el.avatar} alt="" />
                    </div>
                    <div className="job-comapny-info">
                      <div className="position">
                        <h3>{el.job?.jobName}</h3>
                        <div className="company">
                          <strong>{el.fullName}</strong>
                        </div>
                      </div>
                      <ul className="meta">
                        <li
                          className={`job-type hourly ${
                            el.available ? "" : "danger"
                          }`}
                        >
                          <i className="fa fa-circle" />
                          {el.available ? "Available" : "Not Available"}
                        </li>
                        <li className="date">
                          <span>{el.createdAt.slice(0, 10)}</span>
                        </li>
                      </ul>
                      <div className="job-location">
                        <i className="fa fa-map-marker" /> {el.address}
                      </div>
                      <div className="job-amount">
                        <i className="fa fa-phone"></i>
                        <span>{el.phoneNumber}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Right part END */}
        </div>
      </div>
    </div>
  );
};

export default HandMadeServices;
