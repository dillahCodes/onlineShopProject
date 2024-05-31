import authServices from "../services/auth-services";
import { useState } from "react";
import translateLoginErrorMessage from "../services/translate-login-error-message";
import { useNavigate } from "react-router-dom";

const useUserLogin = () => {
  const [errorMessage, setErrorMessage] = useState("");
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
      const token = response.token;
      localStorage.setItem("token", token);
      const localStorageToken = localStorage.getItem("token");

      if (localStorageToken) {
        navigate("/", { replace: true });
        window.location.reload();
      }
    } catch (error) {
      const errorHasTranslated = translateLoginErrorMessage(error.response?.data.errors);
      setErrorMessage(errorHasTranslated);
      console.error("error during login", error);
    } finally {
      clearErrorMessage();
    }
  };

  return { loginUser, errorMessage };
};

export default useUserLogin;
