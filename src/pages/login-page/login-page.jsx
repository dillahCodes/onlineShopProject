import { Layout } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/user-auth-context";
import useLoginFieldInputValidation from "../../features/auth/hooks/use-login-field-input-validation";
import FormAuthLogin from "../../components/form-auth/form-auth-login";
import authServices from "../../features/auth/services/auth-services";
import { jwtDecode } from "jwt-decode";
import translateLoginErrorMessage from "../../features/auth/services/translate-login-error-message";
const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { validationLoginInputErrorMessage, validateFieldLoginInput } =
    useLoginFieldInputValidation(loginData);

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLoginInputChange = (event) => {
    const { value, name } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    validateFieldLoginInput(loginData);
    if (validationLoginInputErrorMessage) {
      setErrorMessage(validationLoginInputErrorMessage);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);

      return;
    }

    try {
      const userLogin = await authServices.login(loginData);
      const response = userLogin.data;
      localStorage.setItem("token", response.token);
      const { userId } = jwtDecode(response.token);
      const userData = await authServices.getUserById(userId);
      setUser(userData.data);
      navigate("/");
    } catch (error) {
      const errorHasTranslated = translateLoginErrorMessage(error.response.data.error);
      setErrorMessage(errorHasTranslated);
      console.error("error during login", error);
    } finally {
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <Layout className="flex items-center justify-center h-screen p-5">
      <div className="w-full md:w-[50%] lg:w-[30%] mx-auto border-[2px] border-black p-5 rounded-md">
        <FormAuthLogin
          handleLoginInputChange={handleLoginInputChange}
          handleLoginSubmit={handleLoginSubmit}
          loginData={loginData}
          errorMessage={errorMessage}
        />
      </div>
    </Layout>
  );
};

export default LoginPage;
