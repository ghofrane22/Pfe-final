import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { upload } from "../../utils";
import { add_new_project } from "../../redux/actions/handMadeAction";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
const AddProject = ({ show, handleShow }) => {
  const { user } = useSelector((state) => state.LoginReducer);
  const dispatch = useDispatch();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [loading, setLoading] = useState(false);
  const uploadedFiles = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const [addProject, setAddProject] = useState({});
  const handleChange = (e) => {
    setAddProject({ ...addProject, [e.target.name]: e.target.value });
  };
  const addNewProject = async () => {
    setLoading(true);
    const images = await Promise.all(
      [...acceptedFiles].map(async (file) => {
        const url = await upload(file);
        return url;
      })
    );
    dispatch(
      add_new_project({
        addProject: { ...addProject, Photo: images },
        handleShow,
        id: user._id,
        setLoading,
      })
    );
  };
  return (
    <div>
      <div
        className={`modal fade ${show ? "show d-block" : ""}`}
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add New Project
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  onChange={handleChange}
                  placeholder="type project name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Description
                </label>
                <textarea
                  class="form-control"
                  name="description"
                  onChange={handleChange}
                  id="exampleFormControlInput1"
                  placeholder="description"
                />
              </div>
              <div className="card aon-card" id="aon-gallery-panel">
                <div className="card-header aon-card-header">
                  <h4>
                    <i className="fa fa-image" /> Gallery Images
                  </h4>
                </div>
                <div className="card-body aon-card-body">
                  <section className="container">
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <span style={{ cursor: "pointer" }}>
                        <i className="sl sl-icon-plus" /> Click here or drop
                        files to upload
                      </span>
                      <aside>
                        <h4>Files</h4>
                        <ul>{uploadedFiles}</ul>
                      </aside>
                    </div>
                  </section>
                </div>
              </div>
              {/* <div className="card aon-card" id="aon-video-panel">
                <div className="card-header aon-card-header">
                  <h4>
                    <i className="fa fa-video-camera" /> Videos Upload
                  </h4>
                </div>
                <div className="card-body aon-card-body">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Insert YouTube or Vimeo or Facebook Vedio Url"
                      aria-label="Recipient's username"
                    />
                    <div className="input-group-append">
                      <button className="btn admin-button" type="button">
                        Priview
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleShow}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={addNewProject}
                disabled={loading}
              >
                {loading ? (
                  <ClipLoader color="#fff" size={20} />
                ) : (
                  "Add Project"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
