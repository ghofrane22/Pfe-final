import React, { useEffect, useState } from "react";
import "./styleSignup.css";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import axiosApi from "../../config/axios";
import Swal from "sweetalert2";
import { upload } from "../../utils/index";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { errorToast } from "../../utils";
import { get_jobs_list, register } from "../../redux/actions/Actions";

const Signup = () => {
  const { jobsList } = useSelector((state) => state.LoginReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_jobs_list());
  }, []);
  console.log(jobsList);
  const [role, setRole] = useState("client");
  const [showAdditionalField, setShowAdditionalField] = useState(false);
  const [signUpDetails, setSignUpDetails] = useState();
  const [file, setFile] = useState();
  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setShowAdditionalField(e.target.value === "handMade");
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (role === "handMade") {
      const url = await upload(file);
      if (url) {
        dispatch(
          register({
            signUpDetails: { ...signUpDetails, diplome: url, role: "handMade" },
            navigate,
          })
        );
      } else {
        errorToast("You Must Add your Diploma");
      }
    } else {
      dispatch(
        register({
          signUpDetails: { ...signUpDetails, role: "client" },
          navigate,
        })
      );
    }
  };
  return (
    <>
      <Navbar />
      <div className="wrapper-singup">
        <div className="signUp-container" id="register">
          <div className="top">
            <span>
              Have an account?
              <a href="/login">Sign In</a>
            </span>
            <header>Sign Up</header>
          </div>
          <div className="two-forms">
            <div className="input-box">
              <input
                type="text"
                name="fullName"
                className="input-field"
                placeholder="fullName"
                onChange={handleChange}
              />
              <i className="fa-solid fa-user icon-green" />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="email"
                className="input-field"
                placeholder="Email"
                onChange={handleChange}
              />
              <i className="fa-solid fa-envelope icon-green" />
            </div>
          </div>

          <div className="input-box">
            <input
              type="text"
              className="input-field"
              placeholder="Address"
              name="address"
              onChange={handleChange}
            />
            <i className="fas fa-map-marker-alt  icon-green " />
          </div>
          <div className="input-box">
            <input
              type="number"
              className="input-field"
              placeholder="PhoneNumber"
              name="phoneNumber"
              onChange={handleChange}
            />
            <i className="fas fa-phone-alt icon-green" />
          </div>

          <div className="input-box">
            <input
              type="password"
              className="input-field"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <i className="fa-solid fa-lock-alt icon-green" />
          </div>

          <div className="radio-box">
            <input
              type="radio"
              id="client"
              name="role"
              value="client"
              checked={role === "client"}
              onChange={handleRoleChange}
            />
            <label htmlFor="client" className="bt-radio">
              Client
            </label>
            <input
              type="radio"
              id="handMade"
              name="role"
              value="handMade"
              checked={role === "handMade"}
              onChange={handleRoleChange}
            />
            <label htmlFor="handMade" className="bt-radio">
              Hand Made
            </label>
          </div>
          <br />

          {showAdditionalField && (
            <>
              <div className="input-box">
                <select
                  type="text"
                  className="input-field"
                  placeholder="Job"
                  name="job"
                  onChange={handleChange}
                >
                  <option value="undefined">--Select Job--</option>
                  {jobsList?.map((job, index) => {
                    return (
                      <option value={job._id} key={index}>
                        {job.jobName}
                      </option>
                    );
                  })}
                </select>
                <i className="fas fa-city icon-green" />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  placeholder="City"
                  name="city"
                  onChange={handleChange}
                />
                <i className="fas fa-city icon-green" />
              </div>

              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Town"
                  name="town"
                  onChange={handleChange}
                />
                <i className="fas fa-building icon-green" />
              </div>

              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Carte Cin"
                  name="cin"
                  onChange={handleChange}
                />
                <i className="far fa-id-card icon-green" />
              </div>

              <div className="input-box">
                <input
                  style={{ padding: "10px 0 0 41px" }}
                  type="file"
                  className="input-field"
                  placeholder="Diplôme"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <i className="fas fa-graduation-cap icon-green" />
              </div>
            </>
          )}
          <br />
          <div className="input-box">
            <input
              type="submit"
              className="submit"
              value="Sign Up"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
