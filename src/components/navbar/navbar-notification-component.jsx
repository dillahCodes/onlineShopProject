import { Avatar, Badge } from "antd";
import { HiOutlineBell } from "react-icons/hi2";
import PropTypes from "prop-types";

const NavbarNotificationComponent = ({ size }) => {
  return (
    <Badge count={1}>
      <Avatar
        size={size}
        shape="square"
        className={`  text-black bg-transparent cursor-pointer`}
        icon={<HiOutlineBell className="text-2xl" />}
      />
    </Badge>
  );
};

export default NavbarNotificationComponent;

NavbarNotificationComponent.propTypes = {
  size: PropTypes.number,
};
