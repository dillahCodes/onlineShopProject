import { Avatar } from "antd";
import { IoShareSocialOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const NavbarShareComponent = ({ size, onClick }) => {
  return (
    <Avatar
      onClick={onClick}
      size={size}
      shape="square"
      className={`text-black bg-transparent cursor-pointer`}
      icon={
        <div className="text-2xl">
          <IoShareSocialOutline />
        </div>
      }
    />
  );
};

export default NavbarShareComponent;

NavbarShareComponent.propTypes = {
  size: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};
