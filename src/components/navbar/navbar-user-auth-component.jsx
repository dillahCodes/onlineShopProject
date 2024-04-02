import { Avatar } from "antd";
import { FaRegUser } from "react-icons/fa";
import PropTypes from "prop-types";
import ButtonComponent from "../ui/button-component";
import { useState } from "react";
import ModalComponent from "../ui/modal-component";
import FormAuthLogin from "../form/form-auth-login";
import FormAuthRegister from "../form/form-auth-register";

const NavbarUserAuth = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [islogin, setIsLogin] = useState(false);
  const { user } = props;

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
        {islogin ? <FormAuthLogin /> : <FormAuthRegister />}
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
