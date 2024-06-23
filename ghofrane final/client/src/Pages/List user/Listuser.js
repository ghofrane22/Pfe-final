import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import { Table, Button } from "antd";
import "./Listuser.css";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { useEffect, useState } from "react";
// import axiosApi from "../../config/axios";
import Swal from "sweetalert2";
///////////////////////////////
const Listuser = () => {
  ///////////////////////////////////
  const [listusers, setlistusers] = useState([]);
  console.log(listusers, "liste users ******");

  //get all
  //   const getAllUsers = () => {
  //     axiosApi
  //       .get("http://localhost:5000/users")
  //       .then((res) => {
  //         //console.log(res, "response users ****************")
  //         setlistusers(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   };

  //   useEffect(() => {
  //     getAllUsers();
  //   }, []);

  //delete users
  //   const deleteUsers = (id) => {
  //     axiosApi
  //       .delete("http://localhost:5000/users/" + id)
  //       .then(() => {
  //         let arr = [...listusers];
  //         setlistusers(arr.filter((c) => c._id !== id));
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   };
  //   ////////////////////////////////////////////////////
  const columns = [
    {
      title: "First Name",
      dataIndex: "FirstName",
      key: "FirstName",
    },
    {
      title: "lastName",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Adress",
      dataIndex: "adress",
      key: "adress",
    },
    {
      title: "Phone",
      dataIndex: "pphoneNumber",
      key: "phone",
    },
    {
      title: "Role ",
      dataIndex: "role",
      key: "Role",
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
                // deleteUsers(record._id);
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
      <div className="container-xxl p  y-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              List Users
            </h6>
            <br />
            <br />
            <Table dataSource={listusers} columns={columns} />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Listuser;
