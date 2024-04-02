import { Skeleton } from "antd";
import { isMobile } from "react-device-detect";
import Slider from "react-slick";

const settings = {
  arrows: false,
  dots: false,
  infinite: false,
  slidesToShow: 5,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 2,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 250,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
    },
  ],
};

const PhotoCommnentsSlider = () => {
  return (
    <div className="w-full mt-3" id="commentsImageSlider">
      <Slider {...settings} className={`w-full m-0 overflow-hidden `}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className={`outline-none relative ${!isMobile && "h-fit"}`}>
            {index === 5 && (
              <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center text-white capitalize bg-black bg-opacity-50 rounded-md font-space-grotesk">
                +30
              </div>
            )}
            <Skeleton.Image className="w-full z-[1]" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoCommnentsSlider;
