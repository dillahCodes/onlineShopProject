import { Drawer } from "antd";
import PropTypes from "prop-types";

const BottomDrawer = ({ isOpen, onClose, children, drawerTitle, drawerHeight, className, ...props }) => {
  return (
    <Drawer
      styles={{ body: { padding: 0 } }}
      title={drawerTitle}
      height={drawerHeight}
      placement="bottom"
      className={className}
      closable={false}
      onClose={onClose}
      open={isOpen}
      {...props}
    >
      {children}
    </Drawer>
  );
};

export default BottomDrawer;

BottomDrawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  drawerTitle: PropTypes.node,
  drawerHeight: PropTypes.string || PropTypes.number,
  className: PropTypes.string,
};
