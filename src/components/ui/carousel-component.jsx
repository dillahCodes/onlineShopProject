import { Carousel } from "antd";
import PropTypes from "prop-types";

const CarouselComponent = ({ children, ...rest }) => {
  return (
    <Carousel {...rest} autoplay>
      {children}
    </Carousel>
  );
};

export default CarouselComponent;

CarouselComponent.propTypes = {
  children: PropTypes.node,
};
