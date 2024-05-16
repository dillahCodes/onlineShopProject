import { useNavigate } from "react-router-dom";
import { mutate } from "swr";
import { useAuth } from "../../../context/user-auth-context";

const useLogout = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { user_id } = user || {};
  const logout = () => {
    if (!user || !user_id) return;
    localStorage.removeItem("token");
    mutate(`/api/user/${user_id}`, null, false);
    navigate("/");
  };

  return { logout };
};

export default useLogout;
