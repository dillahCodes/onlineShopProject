import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";
import ScreenLoader from "../components/ui/screen-loader";
import authServices from "../features/auth/services/auth-services";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  // handle set userId by token
  useEffect(() => {
    const setUserIdByToken = () => {
      const getToken = localStorage.getItem("token");
      if (getToken) {
        const { userId } = jwtDecode(getToken);
        setUserId(userId);
      } else {
        setUserId(null);
        setUser(null);
      }
    };

    if (!userId) setUserIdByToken();
  }, [userId, user]);

  // handle watch local storage delete user if token not exist
  useEffect(() => {
    const handleStorageChange = () => {
      const getToken = localStorage.getItem("token");
      if (!getToken) {
        setUser(null);
        setUserId(null);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // handle load user with userId
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await authServices.getUserById(userId);
        setUser(userData.data);
      } catch (error) {
        console.error("Error loading user data:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId && !user) loadUserData();
  }, [userId, user]);

  // loader
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  console.log(user);

  if (isLoading) return <ScreenLoader />;

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };

AuthProvider.propTypes = {
  children: PropTypes.node,
};
