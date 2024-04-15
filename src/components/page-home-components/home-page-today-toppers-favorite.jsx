import { IoIosArrowForward } from "react-icons/io";
import ButtonComponent from "../ui-components/button-component";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "./style/home-page-today-toppers-favorite.css";

const HomePageTodayToppersFavorite = () => {
  return (
    <div className="w-full ">
      {/* title */}
      <div className="w-full p-4 pb-3 flex justify-between items-center">
        <div>
          <h1 className="font-bold font-space-grotesk text-lg capitalize">
            favorit toppers hari ini
          </h1>
        </div>
        <div className="p-2 border rounded-full text-lg">
          <IoIosArrowForward />
        </div>
      </div>
      {/* slider navigation */}
      <SliderNavigation />
      {/* slider content */}
      <div className="w-full h-[443px] border border-red-600 pr-[30%] pl-4 pb-4 ">
        <div className="w-full h-full border border-green-600 "></div>
      </div>
    </div>
  );
};

export default HomePageTodayToppersFavorite;

const SliderNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);
  let sliderRef = useRef(null);

  // slider settings
  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    swipeToSlide: true,
    arrows: false,

    beforeChange: (_, next) => {
      setNextSlide(next);
    },

    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleOnClick = (index) => {
    const next =
      ((activeIndex > nextSlide && index > activeIndex) || index > nextSlide) &&
      nextSlide !== index;

    if (next) {
      sliderRef.slickNext();
    } else {
      sliderRef.slickPrev();
    }

    setActiveIndex(index);
  };

  console.log({ activeIndex, nextSlide });

  return (
    <div className=" overflow-hidden" id="Toppers_Favorite_Today_Slider">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className={` no-scrollbar pb-3 `}
      >
        {navigationMenuDataList.map((item, index) => (
          <ButtonComponent
            key={index}
            onClick={() => handleOnClick(index)}
            className={`bg-transparent  justify-center ${
              index === activeIndex
                ? "text-[#00AA5B] border-[#00AA5B] bg-[#ECFEF4]"
                : "text-[#6D7588]"
            }  rounded-lg capitalize   max-w-full flex items-center p-3  border `}
          >
            <h3 className="truncate">{item.name}</h3>
          </ButtonComponent>
        ))}
      </Slider>
    </div>
  );
};

const navigationMenuDataList = [
  {
    name: "blouse wanita",
  },
  {
    name: "disposable consumable",
  },
  {
    name: "celana jeans wanita",
  },
  {
    name: "kaos wanita",
  },
  {
    name: "kemeja pria",
  },
  {
    name: "rok wanita",
  },
  {
    name: "tunik muslim",
  },
  {
    name: "hijab segi empat",
  },
];
