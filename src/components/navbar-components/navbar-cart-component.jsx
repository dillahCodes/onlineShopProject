import { Avatar, Badge } from "antd";
import PropTypes from "prop-types";
import { IoCartOutline } from "react-icons/io5";

const NavbarCartComponent = ({ size }) => {
  return (
    <Badge count={1} size="small">
      <Avatar
        size={size}
        shape="square"
        className={`text-black bg-transparent cursor-pointer`}
        icon={
          <div className="text-2xl">
            <IoCartOutline />
          </div>
        }
      />
    </Badge>
  );
};

export default NavbarCartComponent;

NavbarCartComponent.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};
