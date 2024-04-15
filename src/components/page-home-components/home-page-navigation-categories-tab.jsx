import { motion } from "framer-motion";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./style/home-page-navigation-categories-tab.css";
import { Avatar } from "antd";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import { isMobile } from "react-device-detect";

// line animation
const LineAnimation = ({ isClicked }) => {
  const [animationWidth, setAnimationWidth] = useState("0%");

  useEffect(() => {
    setAnimationWidth(isClicked ? `${isMobile ? "40%" : "20%"}` : "0%");
  }, [isClicked]);

  return (
    <div className="relative w-full h-1">
      <motion.div
        initial={{ width: animationWidth }}
        animate={{ width: animationWidth }}
        transition={{ duration: 0.2, ease: "linear" }}
        className="absolute top-0 left-0 h-full bg-white rounded-full"
      />
    </div>
  );
};

LineAnimation.propTypes = {
  isClicked: PropTypes.bool,
};

const categoryTitle = [
  "for you",
  "perawatan kulit",
  "vitamin & suplement",
  "gadget terbaru",
  "baju & perlengkapan bayi",
  "baju renang muslim",
  "baju renang muslim3",
];

const NavigationCategoriesTabComponent = ({ currCategory }) => {
  const [currSliderLocation, setCurrSliderLocation] = useState(categoryTitle[0]);
  const [slideIndex, setSlideIndex] = useState({
    oldIndex: 0,
    activeSlide: 0,
    activeSlideAfterChange: 0,
  });
  const [isDisable, setIsDisable] = useState({
    prev: false,
    next: false,
  });
  const [ishover, setIsHover] = useState(false);
  let sliderRef = useRef(null);

  useEffect(() => {
    currCategory(currSliderLocation);
  }, [currCategory, currSliderLocation]);

  useEffect(() => {
    const isMinSlide = slideIndex.activeSlide === 0 && slideIndex.activeSlideAfterChange === 0;

    const isMaxSlide =
      Object.values(slideIndex).every((val) => val === slideIndex.activeSlide) &&
      Object.values(slideIndex).every((val) => val !== 0);
    setIsDisable({
      prev: isMinSlide,
      next: isMaxSlide,
    });
  }, [slideIndex]);

  const handleBeforeChange = (current, next) => {
    setSlideIndex((prevState) => ({
      ...prevState,
      oldIndex: current,
      activeSlide: next,
    }));
  };

  const handleAfterChange = (current) => {
    setSlideIndex((prevState) => ({
      ...prevState,
      activeSlideAfterChange: current,
    }));
  };

  const navigationElements = categoryTitle.map((item, index) => (
    <div
      key={index}
      className={`max-w-full p-2 ${
        isMobile ? "h-[60px]" : "h-[50px]"
      } text-white bg-black rounded-md cursor-pointer`}
      onClick={() => setCurrSliderLocation(item)}
    >
      <LineAnimation isClicked={currSliderLocation === item} />
      <h1
        className={` ${
          isMobile ? "text-xs" : "text-sm"
        } font-bold   capitalize font-space-grotesk`}
      >
        {item}
      </h1>
    </div>
  ));

  const settings = {
    infinite: false,
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div
      className="w-[90%] mx-auto mt-5 px-5 relative"
      id="navigationCategories"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >
        {navigationElements.map((element) => (
          <div key={element.key}>{element}</div>
        ))}
      </Slider>

      {/* slider button */}
      {isDisable.prev === false && (
        <Avatar
          size={40}
          className={`absolute z-[5] bg-white shadow-md top-[10%] -left-5 cursor-pointer`}
          icon={<IoIosArrowBack className="text-black" />}
          onClick={() => sliderRef.slickPrev()}
        />
      )}
      {isDisable.next === false && (
        <Avatar
          size={40}
          className={`absolute z-[5] bg-white shadow-md top-[10%] -right-5 cursor-pointer`}
          icon={<IoIosArrowForward className="text-black" />}
          onClick={() => sliderRef.slickNext()}
        />
      )}
    </div>
  );
};

export default NavigationCategoriesTabComponent;

NavigationCategoriesTabComponent.propTypes = {
  currCategory: PropTypes.func,
};
