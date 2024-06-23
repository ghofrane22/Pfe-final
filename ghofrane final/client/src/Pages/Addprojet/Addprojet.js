import React, { useState } from "react";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
// import axiosApi from "../../config/axios";
import Swal from "sweetalert2";

const AddProject = () => {
  //   const [name, setName] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [files, setFiles] = useState([]);

  //   const handleFileChange = (e) => {
  //     // Handling multiple files
  //     setFiles([...e.target.files]);
  //   };

  //   const addProject = () => {
  //     const formData = new FormData();
  //     formData.append("name", name);
  //     formData.append("description", description);
  //     files.forEach((file) => {
  //       formData.append("files", file);
  //     });

  //     axiosApi
  //       .post("http://localhost:5000/projects", formData)
  //       .then((res) => {
  //         if (res.status === 201) {
  //           Swal.fire("Success!", "Project added successfully", "success");
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //         Swal.fire("Error!", "Failed to add project", "error");
  //       });
  //   };

  return (
    <>
      <Navbar />
      <br />
      <div className="wrapper">
        <div className="form-box">
          <div className="login-container" id="login">
            <div className="top">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">
                  Add Project
                </h6>
                <h1 className="mb-5">Add Project</h1>
              </div>
            </div>
            <form>
              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Project Name"
                  id="name"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
                <i className="fa-solid fa-tasks" />
              </div>
              <div className="input-box">
                <textarea
                  className="input-field"
                  placeholder="Description"
                  id="description"
                  rows="3"
                  // value={description}
                  // onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <i className="fa-solid fa-comment" />
              </div>
              <div className="input-box">
                <input
                  type="file"
                  className="input-field"
                  id="files"
                  // multiple
                  // onChange={handleFileChange}
                />
                <i className="fa-solid fa-file-upload" />
              </div>

              <div className="input-box">
                <button
                  type="submit"
                  className="submit"
                  // onClick={addProject}
                >
                  Add Project
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

export default AddProject;
