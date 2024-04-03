import { Avatar } from "antd";
import { FaRegUser } from "react-icons/fa";
import PropTypes from "prop-types";
import ButtonComponent from "../ui/button-component";
import { useState } from "react";
import ModalComponent from "../ui/modal-component";
import FormAuthLogin from "../form/form-auth-login";
import FormAuthRegister from "../form/form-auth-register";
import { useAuth } from "../../context/auth/user-auth-context";
import loginFunction from "../../features/auth/login-function";
import registerFunction from "../../features/auth/register-function";

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
  });
  const { user } = useAuth();

  const handleInputChange = (event, type) => {
    if (type === "login") {
      const { name, value } = event.target;
      setLoginData({ ...loginData, [name]: value });
    } else if (type === "register") {
      const { name, value } = event.target;
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    loginFunction(loginData);
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    registerFunction(registerData);
  };

  return (
    <div>
      {/* auth modal */}
      <ModalComponent
        isModalOpen={isOpen}
        modalFooter={null}
        handleCancel={() => {
          setIsOpen(false);
          setIsLogin(false);
        }}
      >
        {islogin ? (
          <FormAuthLogin
            handleInputChange={(event) => handleInputChange(event, "login")}
            handleLoginSubmit={handleLoginSubmit}
            loginData={loginData}
          />
        ) : (
          <FormAuthRegister
            handleInputChange={(event) => handleInputChange(event, "register")}
            handleRegister={handleRegisterSubmit}
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
