import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";
import getUserById from "../features/auth/get-user-by-id-function";
import ScreenLoader from "../components/ui/screen-loader";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Isloading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      const getToken = localStorage.getItem("token");
      setUserToken(getToken);
      if (!getToken) setUser(null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Load user data with user token
  useEffect(() => {
    const loadUserData = async () => {
      try {
        if (userToken) {
          const { userId } = jwtDecode(userToken);
          const userData = await getUserById(userId);
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error loading user data:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, [userToken]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (Isloading) return <ScreenLoader />;

  console.log(user);

  return <authContext.Provider value={{ user, setUser }}>{children}</authContext.Provider>;
};

const useAuth = () => useContext(authContext);
export { AuthProvider, useAuth };

AuthProvider.propTypes = {
  children: PropTypes.node,
};
