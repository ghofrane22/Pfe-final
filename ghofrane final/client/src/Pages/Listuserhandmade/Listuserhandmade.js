import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";

const Listuserhandmade = () => {
  const [listUsershandmade, setListUsershandmade] = useState([]);

  //   // Fonction pour récupérer la liste des utilisateurs handmade acceptés depuis l'API
  //   const fetchAcceptedHandmadeUsers = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/users/accepted");
  //       const data = await response.json();
  //       setListUsershandmade(data);
  //     } catch (error) {
  //       console.error("Error fetching accepted handmade users:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchAcceptedHandmadeUsers();
  //   }, []);

  // Fonction pour supprimer un utilisateur
  //   const handleDeleteUser = async (id) => {
  //     // Utilisez une boîte de dialogue pour demander confirmation
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then(async (result) => {
  //       if (result.isConfirmed) {
  //         try {
  //           // Faites votre requête à l'API pour supprimer l'utilisateur avec l'ID spécifié
  //           await fetch(`http://localhost:5000/users/${id}`, {
  //             method: "DELETE",
  //           });
  //           // Mettez à jour la liste des utilisateurs après la suppression
  //           setListUsershandmade((prevUsers) =>
  //             prevUsers.filter((user) => user._id !== id)
  //           );
  //           Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //         } catch (error) {
  //           console.error("Error deleting user:", error);
  //         }
  //       }
  //     });
  //   };

  // Colonnes pour la table des utilisateurs
  const columns = [
    {
      title: "First Name",
      dataIndex: "FirstName",
      key: "FirstName",
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
      title: "Delete",
      render: (text, record) => (
        <Button
          style={{ color: "#FF0000" }}
          shape="round"
          icon={<DeleteOutlined />}
          //   onClick={() => handleDeleteUser(record._id)}
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
      <div className="container-xxl p-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              List Handmade Users Accepted
            </h6>
            <br />
            <br />
            <Table dataSource={listUsershandmade} columns={columns} />
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

export default Listuserhandmade;
