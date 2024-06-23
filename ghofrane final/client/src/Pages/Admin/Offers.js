import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_offers_list } from "../../redux/actions/adminAction";

const Offers = () => {
  const { offers } = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_offers_list());
  }, [dispatch]);

  return (
    <div className="page-wraper">
      <div id="content">
        <div className="content-admin-main">
          <div className="aon-admin-heading">
            <h4>Offers</h4>
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
                                  >
                                    <thead>
                                      <tr>
                                        <th
                                          className="sorting"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "515.2px",
                                            padding: "20px",
                                          }}
                                        >
                                          Client FullName
                                        </th>
                                        <th
                                          className="sorting"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "235.2px",
                                            padding: "20px",
                                          }}
                                        >
                                          HandMade FullName
                                        </th>
                                        <th
                                          className="sorting"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "172.2px",
                                            padding: "20px",
                                          }}
                                        >
                                          Description
                                        </th>
                                        <th
                                          className="sorting"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "172.2px",
                                            padding: "20px",
                                          }}
                                        >
                                          Time
                                        </th>
                                        <th
                                          className="sorting"
                                          rowSpan={1}
                                          colSpan={1}
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
                                      {offers?.map((el, index) => (
                                        <tr
                                          key={el._id || index}
                                          className={`${
                                            index % 2 === 0 ? "even" : "odd"
                                          }`}
                                        >
                                          <td
                                            style={{
                                              padding: "20px",
                                            }}
                                          >
                                            {el.client?.fullName || "N/A"}
                                          </td>
                                          <td
                                            style={{
                                              padding: "20px",
                                            }}
                                          >
                                            {el.handMade?.fullName || "N/A"}
                                          </td>
                                          <td
                                            style={{
                                              padding: "20px",
                                            }}
                                          >
                                            {el.description || "N/A"}
                                          </td>
                                          <td
                                            style={{
                                              padding: "20px",
                                            }}
                                          >
                                            {el.time
                                              ? `${el.time.slice(
                                                  8,
                                                  10
                                                )}-${el.time.slice(
                                                  5,
                                                  7
                                                )}-${el.time.slice(
                                                  0,
                                                  4
                                                )} AT ${el.time.slice(11, 16)}`
                                              : "N/A"}
                                          </td>
                                          <td
                                            style={{
                                              padding: "20px",
                                            }}
                                          >
                                            {el.status || "N/A"}
                                          </td>
                                        </tr>
                                      ))}
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

export default Offers;
