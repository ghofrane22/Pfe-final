import React from "react";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import { Table, Button } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { useEffect, useState } from "react";
// import axiosApi from "../../config/axios";
import Swal from "sweetalert2";

const Listproject = () => {
  const [listproject, setlistproject] = useState([]);

  //get all
  //   const getAllprojet = () => {
  //     axiosApi
  //       .get("http://localhost:5000/handMadeDetails")
  //       .then((res) => {
  //         //console.log(res, "response users ****************")
  //         setlistproject(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   };

  //   useEffect(() => {
  //     getAllprojet();
  //   }, []);

  //deleteprojet
  //   const deletejobname = (id) => {
  //     axiosApi
  //       .delete("http://localhost:5000/handMadeDetails/" + id)
  //       .then(() => {
  //         let arr = [...listproject];
  //         setlistproject(arr.filter((c) => c._id !== id));
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   };
  //   ////////////////////////////////////////////////////
  const columns = [
    {
      title: " name",
      dataIndex: " name",
      key: " name",
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "file",
      dataIndex: "file",
      key: "file",
    },

    {
      title: "Update",
      render: (text, record) => (
        <Button
          style={{ color: "#389e0d" }}
          shape="round"
          icon={<EditOutlined />}
        />
      ),
    },
    {
      title: "Delete",
      render: (text, record) => (
        <Button
          style={{ color: "#FF0000" }}
          shape="round"
          icon={<DeleteOutlined />}
          onClick={() =>
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                // deleteprojet(record._id);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            })
          }
        />
      ),
    },
  ];
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              List Project
            </h6>
            <br />
            <br />
            <Table dataSource={listproject} columns={columns} />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Listproject;
