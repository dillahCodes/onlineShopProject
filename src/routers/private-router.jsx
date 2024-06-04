import { createContext, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useAuth } from "../context/user-auth-context";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRouter = createContext();

const PrivateRouterProvider = ({ children }) => {
  const { user } = useAuth() || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login", { replace: true });
  }, [user, navigate]);

  return user ? <PrivateRouter.Provider value={null}>{children}</PrivateRouter.Provider> : <Navigate to="/login" replace />;
};
PrivateRouterProvider.propTypes = {
  children: PropTypes.node,
};

const usePrivateRouter = () => useContext(PrivateRouter);

// eslint-disable-next-line react-refresh/only-export-components
export { PrivateRouterProvider, usePrivateRouter };
