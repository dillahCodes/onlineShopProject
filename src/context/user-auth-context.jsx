import { createContext, useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ScreenLoader from "../components/ui-components/screen-loader";
import authServices from "../features/auth/services/auth-services";
import useSWR from "swr";
import { cache } from "swr/_internal";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import ButtonComponent from "../components/ui-components/button-component";
import { Modal } from "antd";

const isSesionExpired = (errorMessage, locationPathName) => errorMessage === "Invalid or expired token" && locationPathName !== "/login";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { contextHolder } = Modal.useModal();
  const isFirstRenderModal = useRef(true);
  const location = useLocation();
  const navigate = useNavigate();

  const [userId, setUserId] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? jwtDecode(token).userId : null;
  });

  const handleOnOk = () => {
    localStorage.removeItem("token");
    setUserId(null);
    Modal.destroyAll();
    navigate("/login");
  };

  const handleOnCancel = () => {
    localStorage.removeItem("token");
    setUserId(null);
    Modal.destroyAll();
  };

  const modalConfig = {
    title: <h1 className="text-base font-bold font-space-grotesk">sesi login kadaluarsa</h1>,
    content: <p className="text-sm font-space-grotesk">sesi login kadaluarsa, silahkan login kembali.</p>,
    footer: (
      <div className="mt-5 flex items-center gap-x-2 ">
        <ButtonComponent className="border ml-auto font-space-grotesk capitalize" onClick={handleOnCancel}>
          batal
        </ButtonComponent>
        <ButtonComponent type="primary" className="bg-[#00AA5B] font-space-grotesk capitalize" onClick={handleOnOk}>
          login
        </ButtonComponent>
      </div>
    ),
  };

  const fetcherUserById = async (id) => {
    try {
      const res = await authServices.getUserById(id);
      return res.data.data;
    } catch (error) {
      if (isSesionExpired(error.response.data.message, location.pathname) && isFirstRenderModal.current) {
        Modal.warning(modalConfig);
        isFirstRenderModal.current = false;
      } else {
        console.error("Error fetching user:", error);
      }
    }
  };

  const { data: userData, isValidating } = useSWR(userId ? `/api/user/${userId}` : null, () => fetcherUserById(userId), {
    revalidateOnFocus: true,
  });

  const cachedData = cache.get(`/api/user/${userId}`);

  if (cachedData) {
    console.log("Data from cache:", cachedData.data);
  } else {
    console.log("Data not found in cache");
  }

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      if (!token) setUserId(null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (isValidating) return <ScreenLoader />;

  const contextValue = {
    user: userData || null,
    setUserId,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {contextHolder}
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, useAuth };
