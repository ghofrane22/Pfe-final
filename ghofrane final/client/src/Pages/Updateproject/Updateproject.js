import React, { useState, useEffect } from "react";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
// import axiosApi from "../../config/axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const Updateproject = () => {
  const { id } = useParams();
  const [oneproject, setoneproject] = useState({});
  const [file, setfile] = useState(null);

  //   const getprojectById = () => {
  //     axiosApi
  //       .get("http://localhost:5000/handMadeDetails/" + id)
  //       .then((res) => {
  //         setoneproject(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   };

  //   useEffect(() => {
  //     getprojectById();
  //   }, []);

  //   const navigate = useNavigate();

  //   const updateproject = () => {
  //     const data = new FormData();
  //     data.append("name", oneproject?.name);
  //     data.append("description", oneproject?.description);
  //     data.append("file", file);

  //     axiosApi
  //       .patch("http://localhost:5000/handMadeDetails/" + id, data) // Correction ici
  //       .then((res) => {
  //         setoneproject(res.data);
  //         if (res.status === 201) {
  //           Swal.fire("Good job!", "Project Updated Successfully", "success");
  //         }
  //         navigate("/Listproject");
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
                  Update Project
                </h6>
                <h1 className="mb-5">Update Project</h1>
              </div>
            </div>
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="Project Name"
                id="nameJob"
                // value={oneproject?.name}
                // onChange={(e) =>
                //   setoneproject({ ...oneproject, name: e.target.value })
                // }
              />
              <br />
              <br />
              <input
                type="text"
                className="input-field"
                placeholder="Project Description"
                id="description"
                // value={oneproject?.description}
                // onChange={(e) =>
                //   setoneproject({ ...oneproject, description: e.target.value })
                // }
              />
              <br />
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="file"
                  className="form-control"
                  id="File"
                  placeholder="File"
                  // value={oneproject?.file}
                  // onChange={(e) =>
                  //   setoneproject({ ...oneproject, file: e.target.value })
                  // }
                />
                <label htmlFor="File">File</label>
              </div>
            </div>
            <br />

            <div className="input-box">
              <input
                type="submit"
                defaultValue="Update Project"
                className="submit"
                // onClick={updateproject}
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

export default Updateproject;
