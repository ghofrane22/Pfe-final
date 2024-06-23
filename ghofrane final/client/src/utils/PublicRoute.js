import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function PublicRoute({ children }) {
  const loggedIn = localStorage.getItem("accessToken");
  const userRole = loggedIn ? jwt_decode(loggedIn).role : null;

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return children;
}

export { PublicRoute };
