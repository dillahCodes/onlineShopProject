import { Statistic } from "antd";
import PropTypes from "prop-types";

const CountDownComponent = ({ deadline, onFinish, ...props }) => {
  const { Countdown } = Statistic;
  return <Countdown value={deadline} onFinish={onFinish} {...props} />;
};

CountDownComponent.propTypes = {
  deadline: PropTypes.number,
  onFinish: PropTypes.func,
  className: PropTypes.string,
};

export default CountDownComponent;
