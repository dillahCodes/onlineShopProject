import { Layout } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRegisterFieldInputValidation from "../features/auth/hooks/use-register-field-input-validation";
import useRegisterPasswordValidation from "../features/auth/hooks/use-register-password-validation";
import FormAuthRegister from "../components/form-auth-components/form-auth-register";
import authServices from "../features/auth/services/auth-services";
import translateRegisterErrorMessage from "../features/auth/services/translate-register-error-message";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    nama: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { validationRegisterInputErrorMessage, validateFieldRegisterInput } =
    useRegisterFieldInputValidation(registerData);
  const { validationCheckCondition, validatePassword, validationPasswordErrorMessage } =
    useRegisterPasswordValidation(registerData);
  const navigate = useNavigate();

  const handleRegisterInputChange = (event) => {
    const { value, name } = event.target;
    setRegisterData({ ...registerData, [name]: value });

    if (name === "password") {
      validatePassword(value, registerData.confirmPassword);
    } else if (name === "confirmPassword") {
      validatePassword(registerData.password, value);
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    validateFieldRegisterInput(registerData);

    if (validationRegisterInputErrorMessage) {
      setErrorMessage(validationRegisterInputErrorMessage);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    if (validationPasswordErrorMessage) {
      setErrorMessage(validationPasswordErrorMessage);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);

      return;
    }

    try {
      await authServices.register(registerData);
      navigate("/login");
    } catch (error) {
      const errorHasTranslated = translateRegisterErrorMessage(error.response.data.error);
      setErrorMessage(errorHasTranslated);
      console.error(error.response);
    } finally {
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <Layout className="flex items-center justify-center min-h-screen p-5">
      <div className="w-full md:w-[50%] lg:w-[30%] mx-auto border-[2px] border-black p-5 rounded-md">
        <FormAuthRegister
          handleRegisterInputChange={handleRegisterInputChange}
          registerData={registerData}
          handleRegister={handleRegisterSubmit}
          errorMessage={errorMessage}
          validationCheckCondition={validationCheckCondition}
        />
      </div>
    </Layout>
  );
};

export default RegisterPage;
