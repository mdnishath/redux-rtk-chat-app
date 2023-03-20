import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const isLogedIn = useAuth();
  return isLogedIn ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;
