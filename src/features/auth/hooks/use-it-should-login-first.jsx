import { useEffect } from "react";
import { useAuth } from "../../../context/user-auth-context";
import { useNavigate } from "react-router-dom";

const useItShouldLoginFirst = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login", { replace: true });
  }, [user, navigate]);
};

export default useItShouldLoginFirst;
