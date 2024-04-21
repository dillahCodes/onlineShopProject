import { Avatar, Badge } from "antd";
import { IoMailOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const NavbarMailComponent = ({ size }) => {
  return (
    <Badge count={1} size="small">
      <Avatar
        size={size}
        shape="square"
        className={`text-black bg-transparent cursor-pointer`}
        icon={
          <div className="text-2xl">
            <IoMailOutline />
          </div>
        }
      />
    </Badge>
  );
};

export default NavbarMailComponent;

NavbarMailComponent.propTypes = {
  size: PropTypes.number,
};
