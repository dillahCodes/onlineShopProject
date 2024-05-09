import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return { logout };
};

export default useLogout;
