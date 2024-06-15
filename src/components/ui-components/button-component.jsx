import { forwardRef } from "react";
import { Button } from "antd";
import PropTypes from "prop-types";

const ButtonComponent = forwardRef((props, ref) => {
  const { className, children, isLoading, ...rest } = props;
  return (
    <Button loading={isLoading} {...rest} className={className} ref={ref}>
      {!isLoading && children}
      {isLoading ? "please wait" : null}
    </Button>
  );
});

ButtonComponent.displayName = "ButtonComponent";

ButtonComponent.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
};

export default ButtonComponent;
