import PropTypes from "prop-types";
import Slider from "react-slick";
import defaultImage from "../../assets/defaultimage.jpg";

const DetailsProductMobilePhoto = ({ imageProductData }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="w-full bg-white">
      <Slider {...settings} id="sliderProductsCategories">
        {imageProductData?.map((item, id) => (
          <div className="h-full w-full" key={id}>
            <img
              src={defaultImage || item}
              width={100}
              className="max-h-[400px] w-full object-contain"
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DetailsProductMobilePhoto;

DetailsProductMobilePhoto.propTypes = {
  imageProductData: PropTypes.array,
};
