import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_hand_Made_service } from "../../redux/actions/Actions";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import AddProject from "./AddProject";
import { upload } from "../../utils";
import {
  delete_project,
  update_profile,
} from "../../redux/actions/handMadeAction";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";

const HandMadeProfile = () => {
  const { user, serviceDetails } = useSelector((state) => state.LoginReducer);
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  useEffect(() => {
    dispatch(get_hand_Made_service(user._id));
  }, [user]);
  const [updateProfile, setUpdateProfile] = useState({});
  const handleChange = (e) => {
    setUpdateProfile({ ...updateProfile, [e.target.name]: e.target.value });
  };
  const updateprofile = async (e) => {
    e.preventDefault();
    setLoading(true);

    let updatedData = { ...updateProfile };
    if (file) {
      const url = await upload(file);
      updatedData = { ...updatedData, avatar: url };
    }

    dispatch(
      update_profile({
        updateProfile: updatedData,
        id: user._id,
        setLoading,
      })
    );
  };

  const deleteProject = (id) => {
    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Vous ne pourrez pas récupérer ce projet une fois supprimé!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(delete_project({ userId: user._id, id }));
        Swal.fire("Supprimé!", "Le projet a été supprimé.", "success");
      }
    });
  };

  return (
    <div id="content">
      <div className="content-admin-main">
        <div className="aon-admin-heading">
          <h4>Edit Profile</h4>
        </div>
        <div className="card aon-card">
          <div className="card-header aon-card-header">
            <h4>
              <i className="fa fa-user" /> About me
            </h4>
          </div>
          <div className="card-body aon-card-body">
            <div className="row">
              <div className="col-xl-6">
                <div className="aon-staff-avtar">
                  <div className="aon-staff-avtar-header">
                    <div className="aon-pro-avtar-pic ">
                      <img src={user?.avatar} alt="" />
                      <button className="admin-button has-toltip">
                        <i className="fa fa-camera" />
                        <span className="header-toltip">Upload Avtar</span>
                        <input
                          type="file"
                          name="avatar"
                          onChange={(e) => setFile(e.target.files[0])}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Full Name</label>
                      <div className="aon-inputicon-box">
                        <input
                          className="form-control sf-form-control"
                          name="fullName"
                          defaultValue={
                            serviceDetails?.handMadeService?.fullName
                          }
                          onChange={handleChange}
                          type="text"
                        />
                        <i className="aon-input-icon fa fa-user" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <div className="aon-inputicon-box">
                        <input
                          className="form-control sf-form-control"
                          name="email"
                          defaultValue={serviceDetails?.handMadeService?.email}
                          onChange={handleChange}
                          type="text"
                        />
                        <i className="aon-input-icon fa fa-building-o" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Mobile</label>
                      <div className="aon-inputicon-box">
                        <input
                          className="form-control sf-form-control"
                          name="phoneNumber"
                          type="number"
                          defaultValue={
                            serviceDetails?.handMadeService?.phoneNumber
                          }
                          onChange={handleChange}
                        />
                        <i className="aon-input-icon fa fa-phone" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
                      <div className="editer-wrap">
                        <div className="editer-textarea">
                          <textarea
                            className="form-control"
                            onChange={handleChange}
                            defaultValue={
                              serviceDetails?.profileDetails?.description
                            }
                            name="description"
                            rows={4}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <button
              className="btn btn-primary btn-lg d-flex "
              style={{ margin: "0 0 0 auto" }}
              onClick={updateprofile}
            >
              {loading ? <ClipLoader color="#fff" size={20} /> : "Save"}
            </button>
          </div>
        </div>
        <div className="card aon-card" id="aon-gallery-panel">
          <div className="card-header aon-card-header d-flex justify-content-between">
            <h4>
              <i className="fa fa-image" /> Projects
            </h4>
            <button className="btn btn-info" onClick={handleShow}>
              <i className="fa fa-plus" /> Add New Project
            </button>
          </div>
          <div className="card-body aon-card-body">
            {serviceDetails?.profileDetails?.project.map((el, index) => {
              return (
                <div key={index}>
                  <div className="d-flex justify-content-between">
                    <h4>{el.name}</h4>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProject(el._id)}
                    >
                      <i className="fa-regular fa-trash-alt" />
                    </button>
                  </div>
                  <p>{el.description}</p>
                  <ImageGallery
                    items={el.Photo.map((url) => ({
                      original: url,
                      thumbnail: url,
                    }))}
                    lazyLoad={true}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <AddProject show={show} handleShow={handleShow} />
    </div>
  );
};

export default HandMadeProfile;
