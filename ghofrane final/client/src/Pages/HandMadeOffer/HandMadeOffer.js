// Importez useState et useEffect depuis React
import React, { useEffect, useState } from "react";
// Importez useDispatch et useSelector depuis react-redux
import { useDispatch, useSelector } from "react-redux";
// Importez les actions nécessaires depuis votre fichier d'actions
import {
  get_handMade_offers,
  udpate_handMade_offer,
} from "../../redux/actions/handMadeAction";

const HandMadeOffer = () => {
  // Initialisez le state pour le statut et la méthode de mise à jour du statut
  const [status, setStatus] = useState("Accepted");

  // Utilisez useDispatch pour accéder à la méthode dispatch
  const dispatch = useDispatch();

  // Utilisez useSelector pour extraire handMadeOffer de l'état global
  const { handMadeOffer } = useSelector((state) => state.handMadeReducer);

  // Utilisez useEffect pour charger les offres au montage du composant
  useEffect(() => {
    dispatch(get_handMade_offers());
  }, []);

  // Définissez la méthode handleChange pour mettre à jour le statut
  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  // Définissez la méthode saveOffer pour sauvegarder l'offre mise à jour
  const saveOffer = (id) => {
    dispatch(udpate_handMade_offer({ id, status }));
  };

  return (
    <div className="page-wraper">
      <div id="content">
        <div className="content-admin-main">
          <div className="aon-admin-heading">
            <h4>My Offer</h4>
          </div>
          <div className="card aon-card">
            <div className="card-body aon-card-body">
              <div className="sf-availability-times-tab m-b50">
                <div className="sf-custom-tabs sf-custom-new">
                  <div className="tab-content">
                    <div id="Upcoming" className="tab-pane active">
                      <div className="sf-tabs-content">
                        <div className="sf-bs-data-table">
                          <div className="table">
                            <div
                              id="DataTables_Table_0_wrapper"
                              className="dataTables_wrapper dt-bootstrap4 no-footer"
                            >
                              <div className="row"></div>
                              <div className="row">
                                <div className="col-sm-12">
                                  <table
                                    className="table table-striped table-bordered example-dt-table aon-booking-table dataTable no-footer"
                                    style={{ width: "100%" }}
                                    id="DataTables_Table_0"
                                    aria-describedby="DataTables_Table_0_info"
                                  >
                                    <thead>
                                      <tr>
                                        <th
                                          className="sorting"
                                          tabIndex={0}
                                          aria-controls="DataTables_Table_0"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-label="Booking Info: activate to sort column ascending"
                                          style={{
                                            width: "515.2px",
                                            padding: "20px",
                                          }}
                                        >
                                          Offer Info
                                        </th>
                                        <th
                                          className="sorting"
                                          tabIndex={0}
                                          aria-controls="DataTables_Table_0"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-label="Payment Info: activate to sort column ascending"
                                          style={{
                                            width: "235.2px",
                                            padding: "20px",
                                          }}
                                        >
                                          Description
                                        </th>
                                        <th
                                          className="sorting"
                                          tabIndex={0}
                                          aria-controls="DataTables_Table_0"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-label="Action: activate to sort column ascending"
                                          style={{
                                            width: "172.2px",
                                            padding: "20px",
                                          }}
                                        >
                                          Action
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {handMadeOffer?.map((el, index) => {
                                        return (
                                          <tr
                                            className={`${
                                              index / 2 === 0 ? "even" : "odd"
                                            }`}
                                          >
                                            <td style={{ padding: "20px" }}>
                                              <div className="sf-booking-info-col">
                                                <div className="sf-booking-customer">
                                                  <ul className="customer-info">
                                                    <li>
                                                      <strong>
                                                        <i className="fa fa-user" />{" "}
                                                        Client Name
                                                      </strong>{" "}
                                                      {el.client.fullName}
                                                    </li>
                                                    <li>
                                                      <strong>
                                                        <i className="fa fa-phone" />{" "}
                                                        Phone
                                                      </strong>{" "}
                                                      {el.client.phoneNumber}
                                                    </li>
                                                    <li>
                                                      <strong>
                                                        <i className="fa fa-calendar" />{" "}
                                                        Date
                                                      </strong>{" "}
                                                      {`${new Date(
                                                        el.time
                                                      ).toLocaleDateString()} AT ${new Date(
                                                        el.time
                                                      ).toLocaleTimeString([], {
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                      })}`}
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </td>
                                            <td style={{ padding: "20px" }}>
                                              <div className="inner">
                                                <span
                                                  className="sf-booking-payment-info"
                                                  data-toggle="popover"
                                                  data-container="body"
                                                  data-placement="top"
                                                  data-html="true"
                                                  id={`payinfo-${el.id}`}
                                                  data-trigger="hover"
                                                  data-original-title=""
                                                  title=""
                                                >
                                                  {el.description}
                                                </span>
                                              </div>
                                            </td>
                                            <td style={{ padding: "20px" }}>
                                              {el.status === "Pending" ? (
                                                <div className="row">
                                                  <div className="col-6">
                                                    <select
                                                      className="form-control"
                                                      onChange={handleChange}
                                                    >
                                                      <option
                                                        value={"Accepted"}
                                                      >
                                                        Accepted
                                                      </option>
                                                      <option value={"Refused"}>
                                                        Refused
                                                      </option>
                                                    </select>
                                                  </div>
                                                  <div className="col-6">
                                                    {" "}
                                                    <button
                                                      className="btn btn-primary"
                                                      onClick={() =>
                                                        saveOffer(el._id)
                                                      }
                                                    >
                                                      Save
                                                    </button>
                                                  </div>
                                                </div>
                                              ) : (
                                                el.status
                                              )}
                                            </td>
                                          </tr>
                                        );
                                      })}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Past*/}
                    <div id="Past" className="tab-pane">
                      <div className="sf-tabs-content">
                        <div className="sf-bs-data-table">
                          <div className="table-responsive">
                            <div
                              id="DataTables_Table_1_wrapper"
                              className="dataTables_wrapper dt-bootstrap4 no-footer"
                            >
                              <div className="row">
                                <div className="col-sm-12 col-md-6">
                                  <div
                                    className="dataTables_length"
                                    id="DataTables_Table_1_length"
                                  >
                                    <label>
                                      Show{" "}
                                      <select
                                        name="DataTables_Table_1_length"
                                        aria-controls="DataTables_Table_1"
                                        className="custom-select custom-select-sm form-control form-control-sm"
                                      >
                                        <option value={10}>10</option>
                                        <option value={25}>25</option>
                                        <option value={50}>50</option>
                                        <option value={100}>100</option>
                                      </select>{" "}
                                      entries
                                    </label>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                  <div
                                    id="DataTables_Table_1_filter"
                                    className="dataTables_filter"
                                  >
                                    <label>
                                      Search:
                                      <input
                                        type="search"
                                        className="form-control form-control-sm"
                                        placeholder=""
                                        aria-controls="DataTables_Table_1"
                                      />
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-12">
                                  <table
                                    className="table table-striped table-bordered example-dt-table aon-booking-table dataTable no-footer"
                                    style={{ width: "100%" }}
                                    id="DataTables_Table_1"
                                    aria-describedby="DataTables_Table_1_info"
                                  >
                                    <thead>
                                      <tr>
                                        <th
                                          className="sorting sorting_asc"
                                          tabIndex={0}
                                          aria-controls="DataTables_Table_1"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-sort="ascending"
                                          aria-label=" : activate to sort column descending"
                                          style={{ width: 0 }}
                                        >
                                          <div className="checkbox sf-radio-checkbox">
                                            <input
                                              id="2th1"
                                              name="abc"
                                              defaultValue="five"
                                              type="radio"
                                            />
                                            <label htmlFor="2th1">
                                              <span
                                                className="btn btn-danger btn-xs"
                                                title="Delete"
                                              >
                                                <i className="fa fa-trash-o" />
                                              </span>
                                            </label>
                                          </div>
                                        </th>
                                        <th
                                          className="sorting"
                                          tabIndex={0}
                                          aria-controls="DataTables_Table_1"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-label="Booking Info: activate to sort column ascending"
                                          style={{ width: 0 }}
                                        >
                                          Booking Info
                                        </th>
                                        <th
                                          className="sorting"
                                          tabIndex={0}
                                          aria-controls="DataTables_Table_1"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-label="Payment Info: activate to sort column ascending"
                                          style={{ width: 0 }}
                                        >
                                          Payment Info
                                        </th>
                                        <th
                                          className="sorting"
                                          tabIndex={0}
                                          aria-controls="DataTables_Table_1"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-label="Action: activate to sort column ascending"
                                          style={{ width: 0 }}
                                        >
                                          Action
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="odd">
                                        <td className="sorting_1">
                                          <div className="checkbox sf-radio-checkbox">
                                            <input
                                              id="2td1"
                                              name="abc"
                                              defaultValue="five"
                                              type="radio"
                                            />
                                            <label htmlFor="2td1" />
                                          </div>
                                        </td>
                                        <td>
                                          <div className="sf-booking-info-col">
                                            <span className="sf-booking-refid">
                                              #1114
                                            </span>
                                            <span className="booking-status sf-booking-incomplete">
                                              Incomplete
                                            </span>
                                            <div className="sf-booking-upcoming">
                                              Job
                                            </div>
                                            <div className="sf-booking-customer">
                                              <ul className="customer-info">
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-user" />{" "}
                                                    Agent Name
                                                  </strong>{" "}
                                                  Heima Agency
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-user" />{" "}
                                                    Customer Name
                                                  </strong>{" "}
                                                  LAURA BARRERA
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-phone" />{" "}
                                                    Customer Phone
                                                  </strong>{" "}
                                                  +52 81 1911 2887
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-calendar-o" />{" "}
                                                    Date
                                                  </strong>{" "}
                                                  2021-12-26
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-clock-o" />{" "}
                                                    Time
                                                  </strong>{" "}
                                                  13:25:00
                                                </li>
                                              </ul>
                                            </div>
                                            <button
                                              type="button"
                                              className="admin-button assignButton margin-r-10"
                                            >
                                              <i className="fa fa-user" />
                                              Assign Now
                                            </button>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="inner">
                                            <h3>
                                              <span
                                                className="sf-booking-payment-info"
                                                data-toggle="popover"
                                                data-container="body"
                                                data-placement="top"
                                                data-html="true"
                                                id="payinfo-1118"
                                                data-trigger="hover"
                                                data-original-title=""
                                                title=""
                                              >
                                                85.00€{" "}
                                              </span>
                                              <span className="sf-payment-status">
                                                Paid
                                              </span>
                                            </h3>
                                            <div
                                              id="popover-content-payinfo-1118"
                                              className="hide sf-pop-hide"
                                            >
                                              <ul className="list-unstyled margin-0 booking-payment-data">
                                                <li>
                                                  <strong>Total Amount:</strong>{" "}
                                                  85.00€
                                                </li>
                                                <li>
                                                  <strong>
                                                    Providers Fee:
                                                  </strong>{" "}
                                                  57.00€
                                                </li>
                                                <li>
                                                  <strong>Admin Fee:</strong>{" "}
                                                  28.00€
                                                </li>
                                                <li>
                                                  <strong>
                                                    Payment Method:
                                                  </strong>{" "}
                                                </li>
                                                <li>
                                                  <strong>
                                                    Admin pay to providers:
                                                  </strong>{" "}
                                                  Pending
                                                </li>
                                                <li>
                                                  <strong>
                                                    Transaction ID:
                                                  </strong>{" "}
                                                  NA
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            className="admin-button btn-sm viewBookings"
                                            title="View Booking"
                                          >
                                            <i className="fa fa-eye" />
                                          </button>
                                          <button
                                            type="button"
                                            className="admin-button btn-sm "
                                            title="Change Status"
                                          >
                                            <i className="fa fa-battery-half" />
                                          </button>
                                          <button
                                            type="button"
                                            className="admin-button btn-sm addInvoice margin-r-5"
                                            title="Add Invoice"
                                          >
                                            <i className="fa fa-plus" />
                                          </button>
                                        </td>
                                      </tr>
                                      <tr className="even">
                                        <td className="sorting_1">
                                          <div className="checkbox sf-radio-checkbox">
                                            <input
                                              id="2td2"
                                              name="abc"
                                              defaultValue="five"
                                              type="radio"
                                            />
                                            <label htmlFor="2td2" />
                                          </div>
                                        </td>
                                        <td>
                                          <div className="sf-booking-info-col">
                                            <span className="sf-booking-refid">
                                              #1114
                                            </span>
                                            <span className="booking-status sf-booking-incomplete">
                                              Incomplete
                                            </span>
                                            <div className="sf-booking-upcoming">
                                              Job
                                            </div>
                                            <div className="sf-booking-customer">
                                              <ul className="customer-info">
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-user" />{" "}
                                                    Agent Name
                                                  </strong>{" "}
                                                  Heima Agency
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-user" />{" "}
                                                    Customer Name
                                                  </strong>{" "}
                                                  LAURA BARRERA
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-phone" />{" "}
                                                    Customer Phone
                                                  </strong>{" "}
                                                  +52 81 1911 2887
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-calendar-o" />{" "}
                                                    Date
                                                  </strong>{" "}
                                                  2021-12-26
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-clock-o" />{" "}
                                                    Time
                                                  </strong>{" "}
                                                  13:25:00
                                                </li>
                                              </ul>
                                            </div>
                                            <button
                                              type="button"
                                              className="admin-button assignButton margin-r-10"
                                            >
                                              <i className="fa fa-user" />
                                              Assign Now
                                            </button>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="inner">
                                            <h3>
                                              <span
                                                className="sf-booking-payment-info"
                                                data-toggle="popover"
                                                data-container="body"
                                                data-placement="top"
                                                data-html="true"
                                                id="payinfo-1111"
                                                data-trigger="hover"
                                                data-original-title=""
                                                title=""
                                              >
                                                85.00€{" "}
                                              </span>
                                              <span className="sf-payment-status">
                                                Paid
                                              </span>
                                            </h3>
                                            <div
                                              id="popover-content-payinfo-1111"
                                              className="hide sf-pop-hide"
                                            >
                                              <ul className="list-unstyled margin-0 booking-payment-data">
                                                <li>
                                                  <strong>Total Amount:</strong>{" "}
                                                  85.00€
                                                </li>
                                                <li>
                                                  <strong>
                                                    Providers Fee:
                                                  </strong>{" "}
                                                  57.00€
                                                </li>
                                                <li>
                                                  <strong>Admin Fee:</strong>{" "}
                                                  28.00€
                                                </li>
                                                <li>
                                                  <strong>
                                                    Payment Method:
                                                  </strong>{" "}
                                                </li>
                                                <li>
                                                  <strong>
                                                    Admin pay to providers:
                                                  </strong>{" "}
                                                  Pending
                                                </li>
                                                <li>
                                                  <strong>
                                                    Transaction ID:
                                                  </strong>{" "}
                                                  NA
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            className="admin-button btn-sm viewBookings"
                                            title="View Booking"
                                          >
                                            <i className="fa fa-eye" />
                                          </button>
                                          <button
                                            type="button"
                                            className="admin-button btn-sm "
                                            title="Change Status"
                                          >
                                            <i className="fa fa-battery-half" />
                                          </button>
                                          <button
                                            type="button"
                                            className="admin-button btn-sm addInvoice margin-r-5"
                                            title="Add Invoice"
                                          >
                                            <i className="fa fa-plus" />
                                          </button>
                                        </td>
                                      </tr>
                                      <tr className="odd">
                                        <td className="sorting_1">
                                          <div className="checkbox sf-radio-checkbox">
                                            <input
                                              id="2td3"
                                              name="abc"
                                              defaultValue="five"
                                              type="radio"
                                            />
                                            <label htmlFor="2td3" />
                                          </div>
                                        </td>
                                        <td>
                                          <div className="sf-booking-info-col">
                                            <span className="sf-booking-refid">
                                              #1114
                                            </span>
                                            <span className="booking-status sf-booking-incomplete">
                                              Incomplete
                                            </span>
                                            <div className="sf-booking-upcoming">
                                              Job
                                            </div>
                                            <div className="sf-booking-customer">
                                              <ul className="customer-info">
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-user" />{" "}
                                                    Agent Name
                                                  </strong>{" "}
                                                  Heima Agency
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-user" />{" "}
                                                    Customer Name
                                                  </strong>{" "}
                                                  LAURA BARRERA
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-phone" />{" "}
                                                    Customer Phone
                                                  </strong>{" "}
                                                  +52 81 1911 2887
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-calendar-o" />{" "}
                                                    Date
                                                  </strong>{" "}
                                                  2021-12-26
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-clock-o" />{" "}
                                                    Time
                                                  </strong>{" "}
                                                  13:25:00
                                                </li>
                                              </ul>
                                            </div>
                                            <button
                                              type="button"
                                              className="admin-button assignButton margin-r-10"
                                            >
                                              <i className="fa fa-user" />
                                              Assign Now
                                            </button>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="inner">
                                            <h3>
                                              <span
                                                className="sf-booking-payment-info"
                                                data-toggle="popover"
                                                data-container="body"
                                                data-placement="top"
                                                data-html="true"
                                                id="payinfo-11153"
                                                data-trigger="hover"
                                                data-original-title=""
                                                title=""
                                              >
                                                85.00€{" "}
                                              </span>
                                              <span className="sf-payment-status">
                                                Paid
                                              </span>
                                            </h3>
                                            <div
                                              id="popover-content-payinfo-11153"
                                              className="hide sf-pop-hide"
                                            >
                                              <ul className="list-unstyled margin-0 booking-payment-data">
                                                <li>
                                                  <strong>Total Amount:</strong>{" "}
                                                  85.00€
                                                </li>
                                                <li>
                                                  <strong>
                                                    Providers Fee:
                                                  </strong>{" "}
                                                  57.00€
                                                </li>
                                                <li>
                                                  <strong>Admin Fee:</strong>{" "}
                                                  28.00€
                                                </li>
                                                <li>
                                                  <strong>
                                                    Payment Method:
                                                  </strong>{" "}
                                                </li>
                                                <li>
                                                  <strong>
                                                    Admin pay to providers:
                                                  </strong>{" "}
                                                  Pending
                                                </li>
                                                <li>
                                                  <strong>
                                                    Transaction ID:
                                                  </strong>{" "}
                                                  NA
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            className="admin-button btn-sm viewBookings"
                                            title="View Booking"
                                          >
                                            <i className="fa fa-eye" />
                                          </button>
                                          <button
                                            type="button"
                                            className="admin-button btn-sm "
                                            title="Change Status"
                                          >
                                            <i className="fa fa-battery-half" />
                                          </button>
                                          <button
                                            type="button"
                                            className="admin-button btn-sm addInvoice margin-r-5"
                                            title="Add Invoice"
                                          >
                                            <i className="fa fa-plus" />
                                          </button>
                                        </td>
                                      </tr>
                                      <tr className="even">
                                        <td className="sorting_1">
                                          <div className="checkbox sf-radio-checkbox">
                                            <input
                                              id="2td4"
                                              name="abc"
                                              defaultValue="five"
                                              type="radio"
                                            />
                                            <label htmlFor="2td4" />
                                          </div>
                                        </td>
                                        <td>
                                          <div className="sf-booking-info-col">
                                            <span className="sf-booking-refid">
                                              #1114
                                            </span>
                                            <span className="booking-status sf-booking-incomplete">
                                              Incomplete
                                            </span>
                                            <div className="sf-booking-upcoming">
                                              Job
                                            </div>
                                            <div className="sf-booking-customer">
                                              <ul className="customer-info">
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-user" />{" "}
                                                    Agent Name
                                                  </strong>{" "}
                                                  Heima Agency
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-user" />{" "}
                                                    Customer Name
                                                  </strong>{" "}
                                                  LAURA BARRERA
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-phone" />{" "}
                                                    Customer Phone
                                                  </strong>{" "}
                                                  +52 81 1911 2887
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-calendar-o" />{" "}
                                                    Date
                                                  </strong>{" "}
                                                  2021-12-26
                                                </li>
                                                <li>
                                                  <strong>
                                                    <i className="fa fa-clock-o" />{" "}
                                                    Time
                                                  </strong>{" "}
                                                  13:25:00
                                                </li>
                                              </ul>
                                            </div>
                                            <button
                                              type="button"
                                              className="admin-button assignButton margin-r-10"
                                            >
                                              <i className="fa fa-user" />
                                              Assign Now
                                            </button>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="inner">
                                            <h3>
                                              <span
                                                className="sf-booking-payment-info"
                                                data-toggle="popover"
                                                data-container="body"
                                                data-placement="top"
                                                data-html="true"
                                                id="payinfo-1119"
                                                data-trigger="hover"
                                                data-original-title=""
                                                title=""
                                              >
                                                85.00€{" "}
                                              </span>
                                              <span className="sf-payment-status">
                                                Paid
                                              </span>
                                            </h3>
                                            <div
                                              id="popover-content-payinfo-1119"
                                              className="hide sf-pop-hide"
                                            >
                                              <ul className="list-unstyled margin-0 booking-payment-data">
                                                <li>
                                                  <strong>Total Amount:</strong>{" "}
                                                  85.00€
                                                </li>
                                                <li>
                                                  <strong>
                                                    Providers Fee:
                                                  </strong>{" "}
                                                  57.00€
                                                </li>
                                                <li>
                                                  <strong>Admin Fee:</strong>{" "}
                                                  28.00€
                                                </li>
                                                <li>
                                                  <strong>
                                                    Payment Method:
                                                  </strong>{" "}
                                                </li>
                                                <li>
                                                  <strong>
                                                    Admin pay to providers:
                                                  </strong>{" "}
                                                  Pending
                                                </li>
                                                <li>
                                                  <strong>
                                                    Transaction ID:
                                                  </strong>{" "}
                                                  NA
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            className="admin-button btn-sm viewBookings"
                                            title="View Booking"
                                          >
                                            <i className="fa fa-eye" />
                                          </button>
                                          <button
                                            type="button"
                                            className="admin-button btn-sm "
                                            title="Change Status"
                                          >
                                            <i className="fa fa-battery-half" />
                                          </button>
                                          <button
                                            type="button"
                                            className="admin-button btn-sm addInvoice margin-r-5"
                                            title="Add Invoice"
                                          >
                                            <i className="fa fa-plus" />
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandMadeOffer;
