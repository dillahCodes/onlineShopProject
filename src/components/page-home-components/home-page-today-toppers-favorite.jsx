import { IoIosArrowForward } from "react-icons/io";
import ButtonComponent from "../ui-components/button-component";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./style/home-page-today-toppers-favorite.css";
import FavouriteToppersTodayCardWidget from "../ui-components/favorite-toppers-today-card-widget";
import { motion, useMotionValue } from "framer-motion";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "antd";

const HomePageMobileTodayToppersFavorite = () => {
  // state for slider button navigate
  const [buttonSliderIndex, setButtonSliderIndex] = useState(0);
  const filterDataBySliderButtonNavigateIndex =
    navigationMenuDataList[buttonSliderIndex].pagination;

  // state for content display slider
  const [sliderContentIndex, setSliderContentIndex] = useState(0);

  const dragX = useMotionValue(0);

  const navigate = useNavigate();

  // if button navigation slider is change the index set slider content index back to 0
  useEffect(() => {
    const backSliderContentIndextoZero = () => setSliderContentIndex(0);
    buttonSliderIndex && backSliderContentIndextoZero();
  }, [buttonSliderIndex]);

  // slider content slide function
  const onDragEndHandler = () => {
    const x = Math.round(dragX.get());
    const isSmallDrag = x === 0 || x === -1 || x === 1;

    if (isSmallDrag) return;

    const DRAG_BUFFER = 20;
    const maxIndex = filterDataBySliderButtonNavigateIndex.length - 1;
    const minIndex = 0;
    const isFirstIndexContent = navigationMenuDataList[0].name;
    const isLastIndexContent = navigationMenuDataList[navigationMenuDataList.length - 1].name;

    const gotoNextSlideContent = x < -DRAG_BUFFER && sliderContentIndex < maxIndex;
    const goToPrevSlideContent = x > DRAG_BUFFER && sliderContentIndex > minIndex;

    const gotoNextSlideContentWithAnotherContentType =
      x < -DRAG_BUFFER &&
      sliderContentIndex === maxIndex &&
      navigationMenuDataList[buttonSliderIndex].name !== isLastIndexContent;

    const goToPrevSlideContentWithAnotherContentType =
      x > DRAG_BUFFER &&
      sliderContentIndex === minIndex &&
      navigationMenuDataList[buttonSliderIndex].name !== isFirstIndexContent;

    if (goToPrevSlideContentWithAnotherContentType) {
      setButtonSliderIndex((prev) => prev - 1);
    } else if (gotoNextSlideContentWithAnotherContentType) {
      setButtonSliderIndex((prev) => prev + 1);
    } else if (gotoNextSlideContent) {
      setSliderContentIndex((prev) => prev + 1);
    } else if (goToPrevSlideContent) {
      setSliderContentIndex((prev) => prev - 1);
    } else {
      setSliderContentIndex(0);
      setButtonSliderIndex(0);
    }
  };

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
      <SliderNavigation
        {...{
          setButtonSliderIndex,
          buttonSliderIndex,
        }}
      />
      {/* slider content */}
      <div className="w-full h-fit  relative    pr-[25%]  overflow-x-hidden mt-2  ">
        <motion.div
          drag="x"
          style={{ x: dragX }}
          dragConstraints={{ left: 0, right: 0 }}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
          animate={{
            translateX: `${sliderContentIndex * -105}%`,
          }}
          className="w-full flex h-full  relative"
          onDragEnd={onDragEndHandler}
        >
          {/* slider content */}
          {filterDataBySliderButtonNavigateIndex?.map((item) => (
            <div className="min-w-full h-full flex flex-col gap-y-4 mr-5" key={item.id}>
              {item.listProduct?.map((product, index) => (
                <FavouriteToppersTodayCardWidget
                  className={`${(index === 0 || index === 1) && "border-b"}`}
                  key={index}
                  ProductData={product}
                  onClick={() => navigate(`coming-soon`)}
                />
              ))}
            </div>
          ))}
          <div className="w-full h-full flex flex-col gap-y-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="w-full   h-full  mb-3 flex gap-x-3" key={index}>
                <Skeleton.Image active className="w-[108px] h-[108px]" />
                <div className="flex flex-col gap-y-2">
                  <Skeleton.Input active className="w-full h-5" />
                  <Skeleton.Button active className="w-6 h-4" />
                  {[...Array.from({ length: 3 })].map((_, index) => (
                    <Skeleton.Button key={index} active className="w-full h-3" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* slider dots */}
      <Dots
        currentDataLength={filterDataBySliderButtonNavigateIndex?.length}
        currentContentIndex={sliderContentIndex}
        setSliderContentIndexWithDots={setSliderContentIndex}
        setButtonNavigationIndexWithDots={setButtonSliderIndex}
        isFirstIndexContentType={
          navigationMenuDataList[buttonSliderIndex].name === navigationMenuDataList[0].name
        }
        isLastIndexContentType={
          navigationMenuDataList[buttonSliderIndex].name ===
          navigationMenuDataList[navigationMenuDataList.length - 1].name
        }
      />
    </div>
  );
};

export default HomePageMobileTodayToppersFavorite;

const SliderNavigation = ({ setButtonSliderIndex, buttonSliderIndex }) => {
  let sliderRef = useRef(null);

  // change slider button navigate index if  user scroll the slider content
  useEffect(() => {
    sliderRef.slickGoTo(buttonSliderIndex);
  }, [buttonSliderIndex]);

  // slider settings
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    swipeToSlide: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const handleOnClick = (index) => {
    // change slider button index
    sliderRef.slickGoTo(index);

    // set active index
    setButtonSliderIndex(index);
  };

  return (
    <div className=" overflow-hidden ml-2" id="Toppers_Favorite_Today_Slider">
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
              index === buttonSliderIndex
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

SliderNavigation.propTypes = {
  setButtonSliderIndex: PropTypes.func.isRequired,
  buttonSliderIndex: PropTypes.number.isRequired,
};

const Dots = ({
  currentDataLength,
  currentContentIndex,
  isFirstIndexContentType,
  isLastIndexContentType,
}) => {
  return (
    <div className="w-full justify-center  flex items-center  gap-x-1">
      {!isFirstIndexContentType && (
        <div className={`w-[4px] h-[4px]  bg-[#6d758850] rounded-full cursor-pointer`} />
      )}
      {[...Array.from({ length: currentDataLength })].map((_, index) => (
        <div
          className={`w-[5px] h-[5px]  ${
            currentContentIndex === index ? "bg-[#00AA5B]" : "bg-[#6d758850]"
          } rounded-full cursor-pointer`}
          key={index}
        />
      ))}
      {!isLastIndexContentType && (
        <div className={`w-[4px] h-[4px]  bg-[#6d758850] rounded-full cursor-pointer`} />
      )}
    </div>
  );
};

Dots.propTypes = {
  currentDataLength: PropTypes.number.isRequired,
  currentContentIndex: PropTypes.number.isRequired,
  isFirstIndexContentType: PropTypes.bool.isRequired,
  isLastIndexContentType: PropTypes.bool.isRequired,
};

const navigationMenuDataList = [
  {
    name: "blouse wanita",
    pagination: [
      {
        id: 1,
        listProduct: [
          {
            name: "Baju Atasan Smith -hijauOri",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/3/7/435cce0a-4885-4119-acbb-adebd4535511.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 250,
            price: 82000,
            itemNumber: 1,
          },
          {
            name: "This Is April - Atasan Blouse Wanita Mikayla Top - Black",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/17/5142a56e-7a3e-422c-b336-424dea2f6ded.jpg.webp?ect=4g",
            rating: 5,
            sold: 70,
            price: 179000,
            itemNumber: 2,
          },
          {
            name: "Atasan batwing jumbo Putih [Baju Atasan Wanita 0140] merk TA1A",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/1/11/2c82a3fa-6294-4b37-b185-e47291541059.jpg.webp?ect=4g",
            rating: 4.2,
            sold: 750,
            price: 59000,
            itemNumber: 3,
          },
        ],
      },
      {
        id: 2,
        listProduct: [
          {
            name: "Baju Atasan Smith -hijauOri",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/3/7/435cce0a-4885-4119-acbb-adebd4535511.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 250,
            price: 82000,
            itemNumber: 4,
          },
          {
            name: "This Is April - Atasan Blouse Wanita Mikayla Top - Black",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/17/5142a56e-7a3e-422c-b336-424dea2f6ded.jpg.webp?ect=4g",
            rating: 5,
            sold: 70,
            price: 179000,
            itemNumber: 5,
          },
          {
            name: "Atasan batwing jumbo Putih [Baju Atasan Wanita 0140] merk TA1A",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/1/11/2c82a3fa-6294-4b37-b185-e47291541059.jpg.webp?ect=4g",
            rating: 4.2,
            sold: 750,
            price: 59000,
            itemNumber: 6,
          },
        ],
      },
      {
        id: 3,
        listProduct: [
          {
            name: "Baju Atasan Smith -hijauOri",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/3/7/435cce0a-4885-4119-acbb-adebd4535511.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 250,
            price: 82000,
            itemNumber: 7,
          },
          {
            name: "This Is April - Atasan Blouse Wanita Mikayla Top - Black",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/17/5142a56e-7a3e-422c-b336-424dea2f6ded.jpg.webp?ect=4g",
            rating: 5,
            sold: 70,
            price: 179000,
            itemNumber: 8,
          },
          {
            name: "Atasan batwing jumbo Putih [Baju Atasan Wanita 0140] merk TA1A",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/1/11/2c82a3fa-6294-4b37-b185-e47291541059.jpg.webp?ect=4g",
            rating: 4.2,
            sold: 750,
            price: 59000,
            itemNumber: 9,
          },
        ],
      },
    ],
  },
  {
    name: "disposable  consumable",
    pagination: [
      {
        id: 1,
        listProduct: [
          {
            name: "Masker Duckbill 3D kn95 3ply 3 Ply Duck Bill earloop Tali isi 50 Pcs",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/2/2/aac1c36e-b6e7-40fc-a9ef-6cb34787d0f1.png.webp?ect=4g",
            rating: 4.9,
            sold: 100000,
            price: 5188,
            itemNumber: 1,
          },
          {
            name: "Masker Kf94 KF 94 4Ply 4 ply Emboss Orlee evo 3D Kemenkes isi 10 pcs - Putih",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/2/4/8942732f-a159-4dca-a9f5-cb8bd8351955.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 5000000,
            price: 8500,
            itemNumber: 2,
          },
          {
            name: "Masker Kf94 KF 94 4Ply 4 ply Emboss Orlee evo 3D Kemenkes isi 10 pcs - Putih",
            image:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2024/2/6/76eff661-1f27-4cff-8936-5c3f6285cfcc.jpg.webp?ect=4g",
            rating: 4.8,
            sold: 1000000,
            price: 79000,
            itemNumber: 3,
          },
        ],
      },
      {
        id: 2,
        listProduct: [
          {
            name: "Masker Duckbill 3D kn95 3ply 3 Ply Duck Bill earloop Tali isi 50 Pcs",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/2/2/aac1c36e-b6e7-40fc-a9ef-6cb34787d0f1.png.webp?ect=4g",
            rating: 4.9,
            sold: 100000,
            price: 5188,
            itemNumber: 4,
          },
          {
            name: "Masker Kf94 KF 94 4Ply 4 ply Emboss Orlee evo 3D Kemenkes isi 10 pcs - Putih",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/2/4/8942732f-a159-4dca-a9f5-cb8bd8351955.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 5000000,
            price: 8500,
            itemNumber: 5,
          },
          {
            name: "Masker Kf94 KF 94 4Ply 4 ply Emboss Orlee evo 3D Kemenkes isi 10 pcs - Putih",
            image:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2024/2/6/76eff661-1f27-4cff-8936-5c3f6285cfcc.jpg.webp?ect=4g",
            rating: 4.8,
            sold: 1000000,
            price: 79000,
            itemNumber: 6,
          },
        ],
      },
      {
        id: 3,
        listProduct: [
          {
            name: "Masker Duckbill 3D kn95 3ply 3 Ply Duck Bill earloop Tali isi 50 Pcs",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/2/2/aac1c36e-b6e7-40fc-a9ef-6cb34787d0f1.png.webp?ect=4g",
            rating: 4.9,
            sold: 100000,
            price: 5188,
            itemNumber: 7,
          },
          {
            name: "Masker Kf94 KF 94 4Ply 4 ply Emboss Orlee evo 3D Kemenkes isi 10 pcs - Putih",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/2/4/8942732f-a159-4dca-a9f5-cb8bd8351955.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 5000000,
            price: 8500,
            itemNumber: 8,
          },
          {
            name: "Masker Kf94 KF 94 4Ply 4 ply Emboss Orlee evo 3D Kemenkes isi 10 pcs - Putih",
            image:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2024/2/6/76eff661-1f27-4cff-8936-5c3f6285cfcc.jpg.webp?ect=4g",
            rating: 4.8,
            sold: 1000000,
            price: 79000,
            itemNumber: 9,
          },
        ],
      },
    ],
  },
  {
    name: "celana jeans wanita",
    pagination: [
      {
        id: 1,
        listProduct: [
          {
            name: "JINISO - 1set Kancing Pengecil Jeans Adjustable Unisex",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/2/c58abdd1-99d8-4a99-8437-af57041c5c8f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 35500,
            itemNumber: 1,
          },
          {
            name: "JINISO - 1set Kancing Pengecil Jeans Adjustable Unisex",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/2/c58abdd1-99d8-4a99-8437-af57041c5c8f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 35500,
            itemNumber: 2,
          },
          {
            name: "JINISO - 1set Kancing Pengecil Jeans Adjustable Unisex",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/2/c58abdd1-99d8-4a99-8437-af57041c5c8f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 35500,
            itemNumber: 3,
          },
        ],
      },
      {
        id: 2,
        listProduct: [
          {
            name: "JINISO - 1set Kancing Pengecil Jeans Adjustable Unisex",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/2/c58abdd1-99d8-4a99-8437-af57041c5c8f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 35500,
            itemNumber: 4,
          },
          {
            name: "JINISO - 1set Kancing Pengecil Jeans Adjustable Unisex",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/2/c58abdd1-99d8-4a99-8437-af57041c5c8f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 35500,
            itemNumber: 5,
          },
          {
            name: "JINISO - 1set Kancing Pengecil Jeans Adjustable Unisex",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/2/c58abdd1-99d8-4a99-8437-af57041c5c8f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 35500,
            itemNumber: 6,
          },
        ],
      },
      {
        id: 3,
        listProduct: [
          {
            name: "JINISO - 1set Kancing Pengecil Jeans Adjustable Unisex",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/2/c58abdd1-99d8-4a99-8437-af57041c5c8f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 35500,
            itemNumber: 7,
          },
          {
            name: "JINISO - 1set Kancing Pengecil Jeans Adjustable Unisex",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/2/c58abdd1-99d8-4a99-8437-af57041c5c8f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 35500,
            itemNumber: 8,
          },
          {
            name: "JINISO - 1set Kancing Pengecil Jeans Adjustable Unisex",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/2/c58abdd1-99d8-4a99-8437-af57041c5c8f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 35500,
            itemNumber: 9,
          },
        ],
      },
    ],
  },
  {
    name: "kaos wanita",
    pagination: [
      {
        id: 1,
        listProduct: [
          {
            name: "Rodeo - Koas Wanita - Glad Tee - Grey",
            image:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2021/11/22/fa14aaa1-f555-4c4e-9fce-d1fce46d51f7.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 35500,
            itemNumber: 1,
          },
          {
            name: "Rodeo - Koas Wanita - Glad Tee - Grey",
            image:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2021/11/22/fa14aaa1-f555-4c4e-9fce-d1fce46d51f7.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 35500,
            itemNumber: 2,
          },
          {
            name: "Rodeo - Koas Wanita - Glad Tee - Grey",
            image:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2021/11/22/fa14aaa1-f555-4c4e-9fce-d1fce46d51f7.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 35500,
            itemNumber: 3,
          },
        ],
      },
      {
        id: 2,
        listProduct: [
          {
            name: "Rodeo - Koas Wanita - Glad Tee - Grey",
            image:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2021/11/22/fa14aaa1-f555-4c4e-9fce-d1fce46d51f7.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 35500,
            itemNumber: 4,
          },
          {
            name: "Rodeo - Koas Wanita - Glad Tee - Grey",
            image:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2021/11/22/fa14aaa1-f555-4c4e-9fce-d1fce46d51f7.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 35500,
            itemNumber: 5,
          },
          {
            name: "Rodeo - Koas Wanita - Glad Tee - Grey",
            image:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2021/11/22/fa14aaa1-f555-4c4e-9fce-d1fce46d51f7.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 35500,
            itemNumber: 6,
          },
        ],
      },
      {
        id: 3,
        listProduct: [
          {
            name: "Rodeo - Koas Wanita - Glad Tee - Grey",
            image:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2021/11/22/fa14aaa1-f555-4c4e-9fce-d1fce46d51f7.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 35500,
            itemNumber: 7,
          },
          {
            name: "Rodeo - Koas Wanita - Glad Tee - Grey",
            image:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2021/11/22/fa14aaa1-f555-4c4e-9fce-d1fce46d51f7.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 35500,
            itemNumber: 8,
          },
          {
            name: "Rodeo - Koas Wanita - Glad Tee - Grey",
            image:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2021/11/22/fa14aaa1-f555-4c4e-9fce-d1fce46d51f7.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 35500,
            itemNumber: 9,
          },
        ],
      },
    ],
  },
  {
    name: "kemeja pria",
    pagination: [
      {
        id: 1,
        listProduct: [
          {
            name: "kemeja flannel flanel branded premium - M",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/1/19/7fb48682-30c8-463b-82df-3f1c5bb9ee3b.png.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 75500,
            itemNumber: 1,
          },
          {
            name: "kemeja flannel flanel branded premium - M",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/1/19/7fb48682-30c8-463b-82df-3f1c5bb9ee3b.png.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 75500,
            itemNumber: 2,
          },
          {
            name: "kemeja flannel flanel branded premium - M",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/1/19/7fb48682-30c8-463b-82df-3f1c5bb9ee3b.png.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 75500,
            itemNumber: 3,
          },
        ],
      },
      {
        id: 2,
        listProduct: [
          {
            name: "kemeja flannel flanel branded premium - M",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/1/19/7fb48682-30c8-463b-82df-3f1c5bb9ee3b.png.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 75500,
            itemNumber: 4,
          },
          {
            name: "kemeja flannel flanel branded premium - M",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/1/19/7fb48682-30c8-463b-82df-3f1c5bb9ee3b.png.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 75500,
            itemNumber: 5,
          },
          {
            name: "kemeja flannel flanel branded premium - M",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/1/19/7fb48682-30c8-463b-82df-3f1c5bb9ee3b.png.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 75500,
            itemNumber: 6,
          },
        ],
      },
      {
        id: 3,
        listProduct: [
          {
            name: "kemeja flannel flanel branded premium - M",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/1/19/7fb48682-30c8-463b-82df-3f1c5bb9ee3b.png.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 75500,
            itemNumber: 7,
          },
          {
            name: "kemeja flannel flanel branded premium - M",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/1/19/7fb48682-30c8-463b-82df-3f1c5bb9ee3b.png.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 75500,
            itemNumber: 8,
          },
          {
            name: "kemeja flannel flanel branded premium - M",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/1/19/7fb48682-30c8-463b-82df-3f1c5bb9ee3b.png.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 75500,
            itemNumber: 9,
          },
        ],
      },
    ],
  },
  {
    name: "rok wanita",
    pagination: [
      {
        id: 1,
        listProduct: [
          {
            name: "Midi Flare Skirt - Black",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/24/943f948b-518f-4965-b7c4-b8c0ad55aedc.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 79500,
            itemNumber: 1,
          },
          {
            name: "Midi Flare Skirt - Black",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/24/943f948b-518f-4965-b7c4-b8c0ad55aedc.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 79500,
            itemNumber: 2,
          },
          {
            name: "Midi Flare Skirt - Black",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/24/943f948b-518f-4965-b7c4-b8c0ad55aedc.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 79500,
            itemNumber: 3,
          },
        ],
      },
      {
        id: 2,
        listProduct: [
          {
            name: "Midi Flare Skirt - Black",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/24/943f948b-518f-4965-b7c4-b8c0ad55aedc.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 79500,
            itemNumber: 4,
          },
          {
            name: "Midi Flare Skirt - Black",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/24/943f948b-518f-4965-b7c4-b8c0ad55aedc.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 79500,
            itemNumber: 5,
          },
          {
            name: "Midi Flare Skirt - Black",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/24/943f948b-518f-4965-b7c4-b8c0ad55aedc.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 79500,
            itemNumber: 6,
          },
        ],
      },
      {
        id: 3,
        listProduct: [
          {
            name: "Midi Flare Skirt - Black",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/24/943f948b-518f-4965-b7c4-b8c0ad55aedc.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 79500,
            itemNumber: 7,
          },
          {
            name: "Midi Flare Skirt - Black",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/24/943f948b-518f-4965-b7c4-b8c0ad55aedc.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 79500,
            itemNumber: 8,
          },
          {
            name: "Midi Flare Skirt - Black",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/24/943f948b-518f-4965-b7c4-b8c0ad55aedc.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 4000,
            price: 79500,
            itemNumber: 9,
          },
        ],
      },
    ],
  },
  {
    name: "tunik muslim",
    pagination: [
      {
        id: 1,
        listProduct: [
          {
            name: "BAJU ATASAN WANITA TERBARU FISA TUNIK TUNIC KATUN MUSLIM TERBARU",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/9/0231a8a2-4db1-43b7-a6c6-24e48d42946f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 59500,
            itemNumber: 1,
          },
          {
            name: "BAJU ATASAN WANITA TERBARU FISA TUNIK TUNIC KATUN MUSLIM TERBARU",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/9/0231a8a2-4db1-43b7-a6c6-24e48d42946f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 59500,
            itemNumber: 2,
          },
          {
            name: "BAJU ATASAN WANITA TERBARU FISA TUNIK TUNIC KATUN MUSLIM TERBARU",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/9/0231a8a2-4db1-43b7-a6c6-24e48d42946f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 59500,
            itemNumber: 3,
          },
        ],
      },
      {
        id: 2,
        listProduct: [
          {
            name: "BAJU ATASAN WANITA TERBARU FISA TUNIK TUNIC KATUN MUSLIM TERBARU",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/9/0231a8a2-4db1-43b7-a6c6-24e48d42946f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 59500,
            itemNumber: 4,
          },
          {
            name: "BAJU ATASAN WANITA TERBARU FISA TUNIK TUNIC KATUN MUSLIM TERBARU",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/9/0231a8a2-4db1-43b7-a6c6-24e48d42946f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 59500,
            itemNumber: 5,
          },
          {
            name: "BAJU ATASAN WANITA TERBARU FISA TUNIK TUNIC KATUN MUSLIM TERBARU",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/9/0231a8a2-4db1-43b7-a6c6-24e48d42946f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 59500,
            itemNumber: 6,
          },
        ],
      },
      {
        id: 3,
        listProduct: [
          {
            name: "BAJU ATASAN WANITA TERBARU FISA TUNIK TUNIC KATUN MUSLIM TERBARU",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/9/0231a8a2-4db1-43b7-a6c6-24e48d42946f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 59500,
            itemNumber: 7,
          },
          {
            name: "BAJU ATASAN WANITA TERBARU FISA TUNIK TUNIC KATUN MUSLIM TERBARU",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/9/0231a8a2-4db1-43b7-a6c6-24e48d42946f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 59500,
            itemNumber: 8,
          },
          {
            name: "BAJU ATASAN WANITA TERBARU FISA TUNIK TUNIC KATUN MUSLIM TERBARU",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/9/0231a8a2-4db1-43b7-a6c6-24e48d42946f.jpg.webp?ect=4g",
            rating: 4.9,
            sold: 100,
            price: 59500,
            itemNumber: 9,
          },
        ],
      },
    ],
  },
  {
    name: "hijab segi empat",
    pagination: [
      {
        id: 1,
        listProduct: [
          {
            name: "Bella Square Hijab Segiempat Part 1 - Hazelnut",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/7/565bbbfe-7737-48ec-a264-dad011a6138b.png.webp?ect=4g",
            rating: 4.8,
            sold: 1000000,
            price: 10900,
            itemNumber: 1,
          },
          {
            name: "Bella Square Hijab Segiempat Part 1 - Hazelnut",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/7/565bbbfe-7737-48ec-a264-dad011a6138b.png.webp?ect=4g",
            rating: 4.8,
            sold: 1000000,
            price: 10900,
            itemNumber: 2,
          },
          {
            name: "Bella Square Hijab Segiempat Part 1 - Hazelnut",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/7/565bbbfe-7737-48ec-a264-dad011a6138b.png.webp?ect=4g",
            rating: 4.8,
            sold: 1000000,
            price: 10900,
            itemNumber: 3,
          },
        ],
      },
      {
        id: 2,
        listProduct: [
          {
            name: "Bella Square Hijab Segiempat Part 1 - Hazelnut",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/7/565bbbfe-7737-48ec-a264-dad011a6138b.png.webp?ect=4g",
            rating: 4.8,
            sold: 1000000,
            price: 10900,
            itemNumber: 4,
          },
          {
            name: "Bella Square Hijab Segiempat Part 1 - Hazelnut",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/7/565bbbfe-7737-48ec-a264-dad011a6138b.png.webp?ect=4g",
            rating: 4.8,
            sold: 1000000,
            price: 10900,
            itemNumber: 5,
          },
          {
            name: "Bella Square Hijab Segiempat Part 1 - Hazelnut",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/7/565bbbfe-7737-48ec-a264-dad011a6138b.png.webp?ect=4g",
            rating: 4.8,
            sold: 1000000,
            price: 10900,
            itemNumber: 6,
          },
        ],
      },
      {
        id: 3,
        listProduct: [
          {
            name: "Bella Square Hijab Segiempat Part 1 - Hazelnut",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/7/565bbbfe-7737-48ec-a264-dad011a6138b.png.webp?ect=4g",
            rating: 4.8,
            sold: 1000000,
            price: 10900,
            itemNumber: 7,
          },
          {
            name: "Bella Square Hijab Segiempat Part 1 - Hazelnut",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/7/565bbbfe-7737-48ec-a264-dad011a6138b.png.webp?ect=4g",
            rating: 4.8,
            sold: 1000000,
            price: 10900,
            itemNumber: 8,
          },
          {
            name: "Bella Square Hijab Segiempat Part 1 - Hazelnut",
            image:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/7/565bbbfe-7737-48ec-a264-dad011a6138b.png.webp?ect=4g",
            rating: 4.8,
            sold: 1000000,
            price: 10900,
            itemNumber: 9,
          },
        ],
      },
    ],
  },
];
