import React from "react";

const PasswordChange = () => {
  return (
    <div className="card aon-card" id="aon-passUpdate-panel">
      <div className="card-header aon-card-header">
        <h4>
          <i className="fa fa-lock" /> Password Update
        </h4>
      </div>
      <div className="card-body aon-card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>New Password</label>
              <div className="aon-inputicon-box">
                <input
                  className="form-control sf-form-control"
                  name="company_name"
                  type="text"
                />
                <i className="aon-input-icon fa fa-lock" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Repeat Password</label>
              <div className="aon-inputicon-box">
                <input
                  className="form-control sf-form-control"
                  name="company_name"
                  type="text"
                />
                <i className="aon-input-icon fa fa-lock" />
              </div>
            </div>
          </div>
        </div>
        <p>
          Enter same password in both fields. Use an uppercase letter and a
          number for stronger password.
        </p>
      </div>
    </div>
  );
};

export default PasswordChange;
