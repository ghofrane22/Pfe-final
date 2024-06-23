import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_admin_client,
  update_profile,
  upload,
} from "../../redux/actions/adminAction";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

const ClientProfile = () => {
  const { clientUsers } = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();

  const token = localStorage.getItem("accessToken");
  const decodedToken = jwt_decode(token);
  const currentUserId = decodedToken._id;

  useEffect(() => {
    dispatch(get_admin_client());
  }, [dispatch]);

  const [editableClientUser, setEditableClientUser] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    avatar: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (clientUsers && currentUserId) {
      const currentUser = clientUsers.find(
        (user) => user._id === currentUserId
      );
      if (currentUser) {
        setEditableClientUser({
          fullName: currentUser.fullName,
          email: currentUser.email,
          phoneNumber: currentUser.phoneNumber,
          address: currentUser.address,
          avatar: currentUser.avatar || "",
        });
      }
    }
  }, [clientUsers, currentUserId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableClientUser((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let avatarUrl = editableClientUser.avatar;
      if (file) {
        avatarUrl = await upload(file);
      }

      await dispatch(
        update_profile({
          updateProfile: { ...editableClientUser, avatar: avatarUrl },
          id: currentUserId,
          setLoading,
        })
      );
      setLoading(false);
      Swal.fire("Success", "Profile updated successfully", "success");
      setIsEditing(false);
    } catch (error) {
      setLoading(false);
      Swal.fire("Error", "Profile update failed", "error");
      console.error("Profile update failed:", error);
    }
  };

  return (
    <div id="content">
      <div className="content-admin-main">
        <div className="aon-admin-heading">
          <h4>Profile</h4>
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
                    <div className="aon-pro-avtar-pic">
                      <img src={editableClientUser.avatar} alt="" />
                      {isEditing && (
                        <button className="admin-button has-toltip">
                          <i className="fa fa-camera" />
                          <span className="header-toltip">Upload Avatar</span>
                          <input
                            type="file"
                            name="avatar"
                            onChange={(e) => setFile(e.target.files[0])}
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Full Name</label>
                      {isEditing ? (
                        <input
                          className="editable"
                          name="fullName"
                          value={editableClientUser.fullName}
                          onChange={handleChange}
                          type="text"
                        />
                      ) : (
                        <div className="read-only">
                          {editableClientUser.fullName}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      {isEditing ? (
                        <input
                          className="editable"
                          name="email"
                          value={editableClientUser.email}
                          onChange={handleChange}
                          type="text"
                        />
                      ) : (
                        <div className="read-only">
                          {editableClientUser.email}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Mobile</label>
                      {isEditing ? (
                        <input
                          className="editable"
                          name="phoneNumber"
                          type="number"
                          value={editableClientUser.phoneNumber}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="read-only">
                          {editableClientUser.phoneNumber}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Address</label>
                      {isEditing ? (
                        <textarea
                          className="editable"
                          onChange={handleChange}
                          value={editableClientUser.address}
                          name="address"
                          rows={4}
                        />
                      ) : (
                        <div className="read-only">
                          {editableClientUser.address}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            {isEditing ? (
              <button
                className="btn btn-primary btn-lg d-flex"
                style={{ margin: "0 0 0 auto" }}
                onClick={handleUpdate}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            ) : (
              <button
                className="btn btn-primary btn-lg d-flex"
                style={{ margin: "0 0 0 auto" }}
                onClick={toggleEdit}
              >
                Update
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
