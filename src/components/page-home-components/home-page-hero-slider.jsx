import Slider from "react-slick";
import "./style/home-page-hero-slider.css";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

// image
import sliderImage1 from "../../assets/home-page/home-page-slider1.jpg";
import sliderImage2 from "../../assets/home-page/home-page-slider2.jpg";
import sliderImage3 from "../../assets/home-page/home-page-slider3.jpg";
import { useEffect, useState } from "react";
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
  const [sliderIndex, setSliderIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const sliderTimer = 3300;

  useEffect(() => {
    // Increment progress every 100ms until it reaches 100%
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + (100 / sliderTimer) * 100);
    }, 100);

    // Clear interval when progress reaches 100%
    if (progress >= 100) clearInterval(interval);

    return () => clearInterval(interval);
  }, [sliderIndex, progress]);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: sliderTimer,
    pauseOnHover: false,
    beforeChange: () => setProgress(0),
    afterChange: (current) => {
      setSliderIndex(current);
    },
  };

  return (
    // slider container
    <div className={`relative w-full `}>
      {/* slider */}
      <Slider {...settings} className={`w-full m-0 overflow-hidden `}>
        {sliderImage.map((item) => (
          <div key={item.id} className={`outline-none`}>
            <img loading="lazy" src={item.image} className={` w-full  h-full`} alt="" />
          </div>
        ))}
      </Slider>

      {/* timer container */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-x-1">
        {sliderImage.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer bg-[#ffffff67]  rounded-full  w-fit h-fit`}
          >
            {index === sliderIndex ? (
              <ProgressBar percent={progress} />
            ) : (
              <span className="w-1.5 h-1.5 block  rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroPageSelider;

const ProgressBar = ({ percent }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ width: `${percent}%` });
  }, [percent, controls]);

  return (
    <motion.div
      className={`relative w-[40px]   h-1.5 bg-[#ffffff67] rounded-full overflow-hidden`}
    >
      <motion.div
        className="h-full bg-white rounded-full"
        initial={{ width: "0%" }}
        animate={controls}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
};
