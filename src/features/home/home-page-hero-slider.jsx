import Slider from "react-slick";
import carouselFakeImageDisplayData from "../../components/carousel-fake-image-display-data";
import "./style/home-page-hero-slider.css";
import { Avatar } from "antd";

// icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";
import { isMobile } from "react-device-detect";

const HeroPageSelider = () => {
  let sliderRef = useRef(null);
  const [ishover, setIsHover] = useState(false);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div
      className={`relative w-full ${!isMobile && "max-w-[90%] mx-auto"}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className={`w-full m-0 overflow-hidden ${!isMobile && "rounded-xl"} `}
      >
        {carouselFakeImageDisplayData.map((item) => (
          <div key={item.id} className={`outline-none ${!isMobile && "h-fit"}`}>
            <img src={item.image} className={`object-cover w-full ${isMobile && "h-[150px]"}`} alt="" />
          </div>
        ))}
      </Slider>

      {/* slider button */}
      {!isMobile && (
        <Avatar
          size={40}
          className={`absolute ${
            ishover ? null : "hidden"
          } bg-white shadow-md top-[45%] -left-5 cursor-pointer`}
          icon={<IoIosArrowBack className="text-black" />}
          onClick={() => sliderRef.slickPrev()}
        />
      )}
      {!isMobile && (
        <Avatar
          size={40}
          className={`absolute ${
            ishover ? null : "hidden"
          } bg-white shadow-md top-[45%] -right-5 cursor-pointer`}
          icon={<IoIosArrowForward className="text-black" />}
          onClick={() => sliderRef.slickNext()}
        />
      )}
    </div>
  );
};

export default HeroPageSelider;