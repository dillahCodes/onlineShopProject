import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../../context/user-auth-context";
import authServices from "../services/auth-services";
import { useState } from "react";
import translateLoginErrorMessage from "../services/translate-login-error-message";
import { useNavigate } from "react-router-dom";
import { mutate } from "swr";

const useUserLogin = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { setUserId } = useAuth();
  const navigate = useNavigate();

  const clearErrorMessage = () => setTimeout(() => setErrorMessage(""), 3000);

  const validateFieldLoginInput = (inputData) => {
    let isLoginError = false;
    const { password } = inputData;
    const isEmpty = Object.values(inputData).some((value) => value === "");
    const isMin8char = password.length < 8;
    const isIncludeBlankSpace = Object.values(inputData).some((value) => /\s/.test(value));

    if (isIncludeBlankSpace) {
      setErrorMessage("input tidak boleh berisi spasi");
      isLoginError = true;
      clearErrorMessage();
    } else if (isEmpty) {
      setErrorMessage("Harap isi semua input yang diperlukan");
      isLoginError = true;
      clearErrorMessage();
    } else if (isMin8char) {
      setErrorMessage("password harus memiliki setidaknya 8 karakter");
      isLoginError = true;
      clearErrorMessage();
    } else {
      setErrorMessage("");
    }

    return isLoginError;
  };

  const loginUser = async (loginData) => {
    // login  validation
    const validationResult = validateFieldLoginInput(loginData);
    if (validationResult) return;

    try {
      const userLogin = await authServices.login(loginData);
      const response = userLogin.data;
      localStorage.setItem("token", response.token);
      const { userId } = jwtDecode(response.token);
      setUserId(userId);
      mutate(`/api/user/${userId}`);
      if (userId) navigate("/");
    } catch (error) {
      const errorHasTranslated = translateLoginErrorMessage(error.response?.data.error);
      setErrorMessage(errorHasTranslated);
      console.error("error during login", error);
    } finally {
      clearErrorMessage();
    }
  };

  return { loginUser, errorMessage };
};

export default useUserLogin;
