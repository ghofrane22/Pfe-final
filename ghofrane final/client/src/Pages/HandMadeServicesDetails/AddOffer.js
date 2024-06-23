import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { send_offer_to_handMade } from "../../redux/actions/clientAction";

const AddOffer = ({ show, handleShow, handMadeId }) => {
  const [offerDetails, setOfferDetails] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setOfferDetails({ ...offerDetails, [e.target.name]: e.target.value });
  };
  const handleSendOffer = async () => {
    dispatch(send_offer_to_handMade({ offerDetails, handMadeId }));
    handleShow();
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
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Send Offer
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
                Date Time
              </label>
              <input
                type="datetime-local"
                class="form-control"
                id="exampleFormControlInput1"
                name="time"
                onChange={handleChange}
                placeholder="type your date"
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
              onClick={handleSendOffer}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOffer;
