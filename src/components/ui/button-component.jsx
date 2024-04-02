import { Button } from "antd";
import PropTypes from "prop-types";

const ButtonComponent = (props) => {
  const { className, children, isLoading, ...rest } = props;
  return (
    <Button loading={isLoading} {...rest} className={className}>
      {!isLoading && children}
      {isLoading ? "please wait" : null}
    </Button>
  );
};

export default ButtonComponent;

ButtonComponent.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
};
