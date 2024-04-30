import { Avatar } from "antd";
import { IoIosSearch } from "react-icons/io";
import PropTypes from "prop-types";

const NavbarSearchComponent = ({ size, onClick }) => {
  return (
    <Avatar
      size={size}
      shape="square"
      className={` text-black bg-transparent cursor-pointer`}
      icon={
        <div className="text-2xl">
          <IoIosSearch />
        </div>
      }
      onClick={onClick}
    />
  );
};

export default NavbarSearchComponent;

NavbarSearchComponent.propTypes = {
  size: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};
