import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Input, Modal, Row, Col } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";

import {
  add_admin_category,
  delete_admin_category,
  get_admin_job_category,
} from "../../redux/actions/adminAction";
import UpdateCategory from "./UpdateCategory";
import Navbar from "../../layouts/Navbar/Navbar";

import Swal from "sweetalert2";

const Category = () => {
  const { category } = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_admin_job_category());
  }, [dispatch]);

  const [categoryJobName, setCategoryJobName] = useState("");
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);

  const handleChange = (e) => {
    setCategoryJobName(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(add_admin_category({ category: categoryJobName }));
    setCategoryJobName("");
  };

  const handleShow = (id) => {
    setId(id);
    setShow(true);
  };

  const handleHide = () => {
    setShow(false);
    setId(null);
  };

  const handleDelete = (id) => {
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
        dispatch(delete_admin_category(id));
        Swal.fire("Deleted!", "Your category has been deleted.", "success");
      }
    });
  };

  const columns = [
    {
      title: "Category Name",
      dataIndex: "jobName",
      key: "jobName",
    },
    {
      title: "Update",
      render: (text, record) => (
        <Button
          style={{ color: "#389e0d" }}
          shape="round"
          icon={<EditOutlined />}
          onClick={() => handleShow(record._id)}
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
          onClick={() => handleDelete(record._id)}
        />
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              List of job name
            </h6>
            <br />
            <Table dataSource={category} columns={columns} rowKey="_id" />
          </div>
        </div>
      </div>
      <Row justify="center" gutter={[16, 16]} style={{ marginTop: "20px" }}>
        <Col span={18}>
          <Input
            type="text"
            value={categoryJobName}
            onChange={handleChange}
            placeholder="Enter job name"
            style={{
              padding: "10px",
              borderRadius: "5px",
              borderColor: "#52c41a",
            }}
          />
        </Col>
        <Col span={6}>
          <Button
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            onClick={handleSubmit}
            style={{
              backgroundColor: "#52c41a",
              borderColor: "#52c41a",
              width: "100%",
              height: "100%",
            }}
          >
            Add jobName
          </Button>
        </Col>
      </Row>
      <UpdateCategory handleShow={handleHide} show={show} id={id} />
      <br />
      <br /> <br /> <br />
    </>
  );
};

export default Category;
