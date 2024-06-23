import React, { useState } from "react";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
// import axiosApi from "../../config/axios";
import Swal from "sweetalert2";

const Addjobname = () => {
  const [jobname, setJobname] = useState("");

  // const addjobname = () => {
  //   let data = {
  //     jobname: jobname,
  //   };

  //   axiosApi
  //     .post("http://localhost:5000/job", data)
  //     .then((res) => {
  //       if (res.status === 201) {
  //         Swal.fire("Good job!", "Job name created successfully", "success");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="form-box">
          <div className="login-container" id="login">
            <div className="top">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">
                  Add Job Name
                </h6>
                <h1 className="mb-5">Add Job Name</h1>
              </div>
            </div>
            <form>
              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Job Name"
                  id="nameJob"
                  //   value={jobname}
                  //   onChange={(e) => setJobname(e.target.value)}
                />
                <i className="fa-solid fa-briefcase" />
              </div>
              <div className="input-box">
                <button
                  type="submit"
                  className="submit"
                  // onClick={addjobname}
                >
                  Add Job Name
                </button>
              </div>
            </form>
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

export default Addjobname;
