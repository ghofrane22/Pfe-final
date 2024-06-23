import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_client_offers } from "../../../redux/actions/clientAction";

const ClientOffer = () => {
  const dispatch = useDispatch();
  const { clientOffer } = useSelector((state) => state.clientReducer);
  useEffect(() => {
    dispatch(get_client_offers());
  }, []);
  return (
    <div className="page-wraper">
      <div id="content">
        <div className="content-admin-main">
          <div className="aon-admin-heading">
            <h4>My Offer</h4>
          </div>
          <div className="card aon-card">
            <div className="card-body aon-card-body">
              {/* Week Tabs*/}
              <div className="sf-availability-times-tab m-b50">
                <div className="sf-custom-tabs sf-custom-new">
                  {/*Tabs*/}

                  {/*Tabs Content*/}
                  <div className="tab-content">
                    {/*Upcoming*/}
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
                                          Status
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {clientOffer?.map((el, index) => {
                                        // Parse the content into a Date object
                                        let currentDate = new Date(el.time);

                                        // Add one hour to the current date
                                        currentDate.setHours(
                                          currentDate.getHours() + 1
                                        );

                                        // Convert the date back to string format
                                        let updatedContent =
                                          currentDate.toISOString();
                                        return (
                                          <tr
                                            className={`${
                                              index / 2 === 0 ? "even" : "odd"
                                            }`}
                                          >
                                            <td
                                              style={{
                                                padding: "20px",
                                              }}
                                            >
                                              <div className="sf-booking-info-col">
                                                <div className="sf-booking-customer">
                                                  <ul className="customer-info">
                                                    <li>
                                                      <strong>
                                                        <i className="fa fa-user" />{" "}
                                                        HandMade Name
                                                      </strong>{" "}
                                                      {el.handMade.fullName}
                                                    </li>

                                                    <li>
                                                      <strong>
                                                        <i className="fa fa-phone" />{" "}
                                                        Phone
                                                      </strong>{" "}
                                                      {el.handMade.phoneNumber}
                                                    </li>
                                                    <li>
                                                      <strong>
                                                        <i className="fa fa-calendar" />{" "}
                                                        Date
                                                      </strong>{" "}
                                                      {updatedContent.slice(
                                                        8,
                                                        10
                                                      )}
                                                      -
                                                      {updatedContent.slice(
                                                        5,
                                                        7
                                                      )}
                                                      -
                                                      {updatedContent.slice(
                                                        0,
                                                        4
                                                      )}{" "}
                                                      AT{" "}
                                                      {updatedContent.slice(
                                                        11,
                                                        16
                                                      )}
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </td>
                                            <td
                                              style={{
                                                padding: "20px",
                                              }}
                                            >
                                              <div className="inner">
                                                <span
                                                  className="sf-booking-payment-info"
                                                  data-toggle="popover"
                                                  data-container="body"
                                                  data-placement="top"
                                                  data-html="true"
                                                  id="payinfo-1115"
                                                  data-trigger="hover"
                                                  data-original-title=""
                                                  title=""
                                                >
                                                  {el.description}
                                                </span>
                                              </div>
                                            </td>
                                            <td
                                              style={{
                                                padding: "20px",
                                              }}
                                            >
                                              {el.status}
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

export default ClientOffer;
