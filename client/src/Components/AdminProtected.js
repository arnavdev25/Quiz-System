import React from "react";
import { useSelector } from "react-redux";
import Login from "../Pages/Login/Login";
const AdminProtectedRoute = ({ Component }) => {
  const {  userData } = useSelector((state) => state.auth);
  let role=userData.role
  return (
    <div>
    {role==="admin"?  <Component />:<Login/>}
    </div>
  );
};

export default AdminProtectedRoute;
