import PropTypes from "prop-types";
import Slider from "react-slick";

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
        {imageProductData?.map((item) => (
          <div className="w-full h-full " key={item.img_id}>
            <img src={item.img_url} width={100} className="w-full object-contain max-h-[400px]" alt="" />
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
