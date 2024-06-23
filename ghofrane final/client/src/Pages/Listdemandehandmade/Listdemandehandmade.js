import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";

const Listdemandehandmade = () => {
  const [listDemandes, setListDemandes] = useState([]);

  // Fonction pour récupérer la liste des demandes depuis l'API
  // const fetchDemandes = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/demandes");
  //     const data = await response.json();
  //     setListDemandes(data);
  //   } catch (error) {
  //     console.error("Error fetching demandes:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchDemandes();
  // }, []);

  // Fonction pour accepter une demande
  // const handleAcceptDemande = async (id) => {
  //   try {
  //     await fetch(`http://localhost:5000/demandes/${id}/accept`, {
  //       method: "POST",
  //     });
  //     const updatedList = listDemandes.filter((demande) => demande._id !== id);
  //     setListDemandes(updatedList);
  //     Swal.fire("Accepted!", "The demand has been accepted.", "success");
  //   } catch (error) {
  //     console.error("Error accepting demand:", error);
  //   }
  // };

  // // Fonction pour refuser une demande
  // const handleRejectDemande = async (id) => {
  //   try {
  //     await fetch(`http://localhost:5000/demandes/${id}/reject`, {
  //       method: "POST",
  //     });
  //     const updatedList = listDemandes.filter((demande) => demande._id !== id);
  //     setListDemandes(updatedList);
  //     Swal.fire("Rejected!", "The demand has been rejected.", "error");
  //   } catch (error) {
  //     console.error("Error rejecting demand:", error);
  //   }
  // };

  // Colonnes pour la table des demandes
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Cin",
      dataIndex: "cin",
      key: "cin",
    },

    {
      title: " City",
      dataIndex: " city",
      key: " city",
    },

    {
      title: "Town",
      dataIndex: "town",
      key: "town",
    },
    {
      title: "Diplome",
      dataIndex: "diplome",
      key: "diplome",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Actions",
      render: (text, record) => (
        <>
          <Button
            style={{ color: "#1890ff" }}
            shape="round"
            icon={<CheckOutlined />}
            // onClick={() => handleAcceptDemande(record._id)}
          >
            Accept
          </Button>{" "}
          <Button
            style={{ color: "#FF0000" }}
            shape="round"
            icon={<CloseOutlined />}
            // onClick={() => handleRejectDemande(record._id)}
          >
            Reject
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="container-xxl p-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              List Handmade Demands
            </h6>
            <br />
            <br />
            <Table dataSource={listDemandes} columns={columns} />
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

export default Listdemandehandmade;
