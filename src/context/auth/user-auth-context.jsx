import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";
import getUserById from "../../features/auth/get-user-by-id-function";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      getUserById(decodedToken.userId).then((data) => setUser(data));
    } else {
      setUser(null);
    }
  }, []);

  return <authContext.Provider value={{ user }}>{children}</authContext.Provider>;
};

const useAuth = () => useContext(authContext);
export { AuthProvider, useAuth };

AuthProvider.propTypes = {
  children: PropTypes.node,
};
