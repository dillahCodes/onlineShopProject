import { Avatar } from "antd";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import { carouselFakeImageDisplayData2 } from "../../components/carousel-fake-image-display-data";
import { useRef, useState } from "react";
import "./style/home-page-products-categories-slider.css";
import { isMobile } from "react-device-detect";

const HomePageProdutcsCategoriesSlider = () => {
  const [ishover, setIsHover] = useState(false);
  let sliderRef = useRef(null);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      id="sliderProductsCategories"
      className="relative w-full"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className="m-0 mt-5 rounded-md"
      >
        {carouselFakeImageDisplayData2.map((item) => (
          <div
            key={item.id}
            className="p-1 rounded-md shadow-sm outline-none w-fit max-h-[130px] md:h-[160px] border-[2px] border-black "
          >
            <img
              src={item.image}
              className={`object-cover rounded-md ${isMobile ? "h-[80px]" : "h-[100px]"}`}
              alt=""
            />
            <h1 className={` font-medium text-center font-space-grotesk pb-3 mt-2 `}>{item.text}</h1>
          </div>
        ))}
      </Slider>

      {/* slider button */}
      {!isMobile && (
        <Avatar
          size={40}
          className={`absolute ${
            ishover ? null : "hidden"
          } bg-white shadow-md top-[35%] -left-2 cursor-pointer`}
          icon={<IoIosArrowBack className="text-black" />}
          onClick={() => sliderRef.slickPrev()}
        />
      )}
      {!isMobile && (
        <Avatar
          size={40}
          className={`absolute ${
            ishover ? null : "hidden"
          } bg-white shadow-md top-[35%] -right-2 cursor-pointer`}
          icon={<IoIosArrowForward className="text-black" />}
          onClick={() => sliderRef.slickNext()}
        />
      )}
    </div>
  );
};

export default HomePageProdutcsCategoriesSlider;
