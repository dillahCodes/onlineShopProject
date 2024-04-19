import Slider from "react-slick";
import "./style/home-page-hero-slider.css";
import { Avatar } from "antd";

// icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";
import { isMobile } from "react-device-detect";

// image
import sliderImage1 from "../../assets/home-page/home-page-slider1.jpg";
import sliderImage2 from "../../assets/home-page/home-page-slider2.jpg";
import sliderImage3 from "../../assets/home-page/home-page-slider3.jpg";
const sliderImage = [
  {
    id: 1,
    image: sliderImage1,
  },
  {
    id: 2,
    image: sliderImage2,
  },
  {
    id: 3,
    image: sliderImage3,
  },
];

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
    // slider container
    <div
      className={`relative w-full ${!isMobile && "max-w-[90%] mx-auto"}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* slider */}
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className={`w-full m-0 overflow-hidden ${!isMobile && "rounded-xl"} `}
      >
        {sliderImage.map((item) => (
          <div key={item.id} className={`outline-none ${!isMobile && "h-fit"}`}>
            <img loading="lazy" src={item.image} className={` w-full  h-full`} alt="" />
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
