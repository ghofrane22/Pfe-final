import "./App.css";
import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";

// Navigate
// import { PrivateRoute } from "./utils/ProtectedRoute";
import { PublicRoute } from "./utils/PublicRoute";
import Updatenamejob from "./Pages/Updatejobname/Updatenamejob";
import { useDispatch, useSelector } from "react-redux";
import Signup from "./Pages/SignUp/Signup";
import Listuser from "./Pages/List user/Listuser";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Listjob from "./Pages/ListJobName/ListJob";
import Addjobname from "./Pages/Addjobnamelist/Addjobname";
import Listproject from "./Pages/Listproject/Listproject";
import Updateproject from "./Pages/Updateproject/Updateproject";
import Addproject from "./Pages/Addprojet/Addprojet";
import Profilhandmade from "./Pages/Profilhandmade/Profilhandmade";
import Listdemandehandmade from "./Pages/Listdemandehandmade/Listdemandehandmade";
import Listuserhandmade from "./Pages/Listuserhandmade/Listuserhandmade";
import { useEffect } from "react";
import { current } from "./redux/actions/Actions";
import HandMadeServices from "./Pages/HandMadeServices/HandMadeServices";
import Layout from "./layouts/Layout";
import HandMadeServicesDetails from "./Pages/HandMadeServicesDetails/HandMadeServicesDetails";
import ClientOffer from "./Pages/client/ClientOffer/ClientOffer";
import { PrivateRoute } from "./utils/ProtectedRoute";
import HandMadeProfile from "./Pages/handMadeProfile/handMadeProfile";
import HandMadeOffer from "./Pages/HandMadeOffer/HandMadeOffer";
import Messages from "./Pages/Messages/Messages";
import HandMadeUsers from "./Pages/Admin/HandMadeUsers";
import ClientUsers from "./Pages/Admin/ClientUsers";
import HandMadeApproval from "./Pages/Admin/HandMadeApproval";
import Category from "./Pages/Admin/Category";
import Offers from "./Pages/Admin/Offers";
import ClientProfile from "./Pages/client/ClientProfile";

function App() {
  const { user } = useSelector((state) => state.LoginReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute user={user}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/services-list"
          element={
            <Layout>
              <HandMadeServices />
            </Layout>
          }
        />
        <Route
          path="/service/details/:id"
          element={
            <Layout>
              <HandMadeServicesDetails />
            </Layout>
          }
        />
        <Route
          path="/client/offer-list"
          element={
            <PrivateRoute user={"client"}>
              <Layout>
                <ClientOffer />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/handMade/profile"
          element={
            <PrivateRoute user={"handMade"}>
              <Layout>
                <HandMadeProfile />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/client/profile"
          element={
            <PrivateRoute user={"client"}>
              <Layout>
                <ClientProfile />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/handMade/offer-list"
          element={
            <PrivateRoute user={"handMade"}>
              <Layout>
                <HandMadeOffer />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/handmade-list"
          element={
            <PrivateRoute user={"admin"}>
              <Layout>
                <HandMadeUsers />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/client-list"
          element={
            <PrivateRoute user={"admin"}>
              <Layout>
                <ClientUsers />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/handMade-approval"
          element={
            <PrivateRoute user={"admin"}>
              <Layout>
                <HandMadeApproval />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/category"
          element={
            <PrivateRoute user={"admin"}>
              <Layout>
                <Category />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/offer-list"
          element={
            <PrivateRoute user={"admin"}>
              <Layout>
                <Offers />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/messages"
          element={
            <>
              <Layout>
                <Messages />
              </Layout>
            </>
          }
        />
        <Route path="/" element={<Home />} />

        <Route
          path="/signup"
          element={
            <PublicRoute user={user}>
              <Signup />
            </PublicRoute>
          }
        />

        {/* ******************* */}
        <Route
          path="/About"
          element={
            <PublicRoute user={user}>
              <About />
            </PublicRoute>
          }
        />

        <Route
          path="/listuser"
          element={
            <PublicRoute user={user}>
              <Listuser />
            </PublicRoute>
          }
        />
        <Route
          path="/listjobname"
          element={
            <PublicRoute user={user}>
              <Listjob />
            </PublicRoute>
          }
        />
        <Route
          path="/Updatenamejob"
          element={
            <PublicRoute user={user}>
              <Updatenamejob />
            </PublicRoute>
          }
        />
        <Route
          path="/Addjobname"
          element={
            <PublicRoute user={user}>
              <Addjobname />
            </PublicRoute>
          }
        />
        <Route
          path="/Listproject"
          element={
            <PublicRoute user={user}>
              <Listproject />
            </PublicRoute>
          }
        />
        <Route
          path="/Updateproject"
          element={
            <PublicRoute user={user}>
              <Updateproject />
            </PublicRoute>
          }
        />
        <Route
          path="/Addproject"
          element={
            <PublicRoute user={user}>
              <Addproject />
            </PublicRoute>
          }
        />
        <Route
          path="/Profilhandmade"
          element={
            <PublicRoute user={user}>
              <Profilhandmade />
            </PublicRoute>
          }
        />
        <Route
          path="/Listdemandehandmade"
          element={
            <PublicRoute user={user}>
              <Listdemandehandmade />
            </PublicRoute>
          }
        />

        <Route
          path="/Listuserhandmade"
          element={
            <PublicRoute user={user}>
              <Listuserhandmade />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
