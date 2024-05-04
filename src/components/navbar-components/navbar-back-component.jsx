import { Avatar } from "antd";
import PropTypes from "prop-types";
import { IoIosArrowRoundBack } from "react-icons/io";

const NavbarBackComponent = ({ size, onClick, className }) => {
  return (
    <Avatar
      onClick={onClick}
      size={size}
      shape="square"
      className={`text-black bg-transparent cursor-pointer ${className}`}
      icon={
        <div className="text-4xl">
          <IoIosArrowRoundBack />
        </div>
      }
    />
  );
};

export default NavbarBackComponent;

NavbarBackComponent.propTypes = {
  size: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
