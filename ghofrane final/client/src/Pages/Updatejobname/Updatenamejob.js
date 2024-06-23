import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
// import axiosApi from "../../config/axios";

import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const Updatenamejob = () => {
  const { id } = useParams();
  const [onenameJob, setonenameJob] = useState({});

  // console.log(id, "id ***********");
  //   const getnameJobById = () => {
  //     axiosApi
  //       .get("http://localhost:5000/nameJob/" + id)
  //       .then((res) => {
  //         setoneJobName(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   };

  //   useEffect(() => {
  //     getJobNameById();
  //   }, []);
  //   //////////////////
  //   const navigate = useNavigate();

  //   const updateJobName = () => {
  //     const data = new FormData();
  //     data.append("nameJob", onenameJob?.nameJob);

  //     axiosApi
  //       .patch("http://localhost:5000/nameJob/" + id, data)
  //       .then((res) => {
  //         setonenameJob(res.data.data);
  //         if (res.status === 201) {
  //           Swal.fire("Good job!", "name Job Updated Succesfully", "success");
  //         }
  //         navigate("/listjobname");
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   };

  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="form-box">
          <div className="login-container" id="login">
            <div className="top">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">
                  Update Job Name
                </h6>
                <h1 className="mb-5">Update Job Name</h1>
              </div>
            </div>
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="Username or Email"
                id="nameJob"
                placeholder="name Job"
                value={onenameJob?.nameJob}
                // onChange={(e) =>
                //   setonenameJob({ ...onenameJob, name: e.target.value })
                // }
              />
              <i className="fa-solid fa-briefcase" />
            </div>

            <div className="input-box">
              <input
                type="submit"
                defaultValue="Sign In"
                className="submit"
                // onClick={updateJobName}
              />
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
export default Updatenamejob;
