import FormAuthLogin from "../../components/form/form-auth-login";
import { Layout } from "antd";
import { useState } from "react";
import loginFunction from "../../features/auth/login-function";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/user-auth-context";
import useLoginFieldInputValidation from "../../features/auth/hooks/use-login-field-input-validation";
const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { validationLoginInputErrorMessage, validateFieldLoginInput } = useLoginFieldInputValidation(loginData);
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
      const userData = await loginFunction(loginData, setErrorMessage);
      if (userData) {
        setUser(userData);
        return navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  console.log(loginData);

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
