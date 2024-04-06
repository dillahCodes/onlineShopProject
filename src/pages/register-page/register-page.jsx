import { Layout } from "antd";
import FormAuthRegister from "../../components/form/form-auth-register";
import { useState } from "react";
import registerFunction from "../../features/auth/register-function";
import { useNavigate } from "react-router-dom";
import useRegisterFieldInputValidation from "../../features/auth/hooks/use-register-field-input-validation";
import useRegisterPasswordValidation from "../../features/auth/hooks/use-register-password-validation";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    nama: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { validationRegisterInputErrorMessage, validateFieldRegisterInput } = useRegisterFieldInputValidation(registerData);
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
      const isRegister = await registerFunction(registerData, setErrorMessage);
      if (isRegister) navigate("/login");
    } catch (error) {
      console.error(error);
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
