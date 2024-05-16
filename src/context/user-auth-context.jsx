import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";
import ScreenLoader from "../components/ui-components/screen-loader";
import authServices from "../features/auth/services/auth-services";
import useSWR from "swr";
import { cache } from "swr/_internal";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // local state for storage user data
  const [userId, setUserId] = useState(
    localStorage.getItem("token") ? jwtDecode(localStorage.getItem("token")).userId : null
  );

  const fetcherUserById = async (id) => {
    try {
      const res = await authServices.getUserById(id);
      return res.data.data;
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  // SWR hook for loading user data
  const { data: userData, isValidating } = useSWR(userId ? `/api/user/${userId}` : null, () => fetcherUserById(userId));

  // current cache user data
  const cachedData = cache.get(`/api/user/${userId}`);

  if (cachedData) {
    console.log("Data from cache:", cachedData.data);
  } else {
    console.log("Data not found in cache");
  }

  // handle watch local storage delete user if token not exist
  useEffect(() => {
    const handleStorageChange = () => {
      const getToken = localStorage.getItem("token");
      if (!getToken) setUserId(null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Loader
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  if (isValidating || isLoading) return <ScreenLoader />;

  // Context value
  const contextValue = {
    user: userData || null,
    setUserId,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };

AuthProvider.propTypes = {
  children: PropTypes.node,
};
