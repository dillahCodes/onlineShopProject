import { Avatar } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import PropTypes from "prop-types";

const NavbarHamburgerMenu = ({ size, onClick }) => {
  return (
    <Avatar
      size={size}
      shape="square"
      className={` text-black bg-transparent cursor-pointer`}
      icon={<RxHamburgerMenu className="text-2xl" />}
      onClick={onClick}
    />
  );
};

export default NavbarHamburgerMenu;

NavbarHamburgerMenu.propTypes = {
  size: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};
