import { Avatar } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import PropTypes from "prop-types";

const NavbarHamburgerMenu = ({ size }) => {
  return (
    <Avatar
      size={size}
      shape="square"
      className={` text-black bg-transparent cursor-pointer`}
      icon={<RxHamburgerMenu className="text-2xl" />}
    />
  );
};

export default NavbarHamburgerMenu;

NavbarHamburgerMenu.propTypes = {
  size: PropTypes.number,
};
