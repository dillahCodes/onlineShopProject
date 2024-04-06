import { Avatar } from "antd";
import { FaRegUser } from "react-icons/fa";
import PropTypes from "prop-types";
import ButtonComponent from "../ui/button-component";
import { useState } from "react";
import ModalComponent from "../ui/modal-component";
import FormAuthLogin from "../form/form-auth-login";
import FormAuthRegister from "../form/form-auth-register";
import { useAuth } from "../../context/user-auth-context";
import loginFunction from "../../features/auth/login-function";
import registerFunction from "../../features/auth/register-function";
import useRegisterPasswordValidation from "../../features/auth/hooks/use-register-password-validation";
import useRegisterFieldInputValidation from "../../features/auth/hooks/use-register-field-input-validation";
import useLoginFieldInputValidation from "../../features/auth/hooks/use-login-field-input-validation";

const NavbarUserAuth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [islogin, setIsLogin] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    nama: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const { validationRegisterInputErrorMessage, validateFieldRegisterInput } = useRegisterFieldInputValidation(registerData);
  const { validationCheckCondition, resetValidationCheckCondition, validatePassword, validationPasswordErrorMessage } =
    useRegisterPasswordValidation(registerData);
  const { validationLoginInputErrorMessage, validateFieldLoginInput } = useLoginFieldInputValidation(loginData);
  const { user, setUser } = useAuth();

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsLogin(false);
    setRegisterData({
      nama: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setLoginData({
      email: "",
      password: "",
    });
    setErrorMessage("");
    resetValidationCheckCondition();
  };

  const handleRegisterInputChange = (event) => {
    const { value, name } = event.target;
    setRegisterData({ ...registerData, [name]: value });

    if (name === "password") {
      validatePassword(value, registerData.confirmPassword);
    } else if (name === "confirmPassword") {
      validatePassword(registerData.password, value);
    }
  };

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
        setIsOpen(false);
        setIsLogin(false);
      }
      setUser(userData);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
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
      if (isRegister) setIsLogin(true);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <div>
      {/* auth modal */}
      <ModalComponent isModalOpen={isOpen} modalFooter={null} handleCancel={handleCloseModal}>
        {islogin ? (
          <FormAuthLogin
            handleLoginInputChange={handleLoginInputChange}
            handleLoginSubmit={handleLoginSubmit}
            loginData={loginData}
            errorMessage={errorMessage}
          />
        ) : (
          <FormAuthRegister
            handleRegisterInputChange={handleRegisterInputChange}
            handleRegister={handleRegisterSubmit}
            validationCheckCondition={validationCheckCondition}
            errorMessage={errorMessage}
            registerData={registerData}
          />
        )}
      </ModalComponent>
      {user && <Avatar size={40} icon={<FaRegUser />} />}

      {!user && (
        <div className="flex gap-x-3">
          <ButtonComponent
            className={"bg-transparent  border-black capitalize"}
            onClick={() => {
              setIsOpen(true);
              setIsLogin(true);
            }}
          >
            masuk
          </ButtonComponent>
          <ButtonComponent type="primary" className={"capitalize"} onClick={() => setIsOpen(true)}>
            daftar
          </ButtonComponent>
        </div>
      )}
    </div>
  );
};

export default NavbarUserAuth;

NavbarUserAuth.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
};
