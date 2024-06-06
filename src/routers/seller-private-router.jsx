import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/user-auth-context";

const SellerPrivateRouter = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/user" />;
};

export default SellerPrivateRouter;
