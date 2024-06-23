import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { update_admin_category } from "../../redux/actions/adminAction";

const UpdateCategory = ({ show, handleShow, id }) => {
  const [jobName, setJobName] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleUpdate = () => {
    setLoading(true);
    dispatch(update_admin_category({ jobName, id, handleShow, setLoading }));
  };
  return (
    <div
      className={`modal fade ${show ? "show d-block" : ""}`}
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Category Job Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="jobName"
                onChange={(e) => setJobName(e.target.value)}
                placeholder="type project name"
              />
            </div>
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
              onClick={handleUpdate}
              disabled={loading}
            >
              {loading ? (
                <ClipLoader color="#fff" size={20} />
              ) : (
                "Update Category"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;
