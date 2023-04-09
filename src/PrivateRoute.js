import { Route, Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const PrivateRoutes = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  return token ? <Outlet /> : <Navigate to="/sign_up" />;
};

export default PrivateRoutes;
