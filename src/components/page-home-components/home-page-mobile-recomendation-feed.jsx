import { useEffect, useRef, useState } from "react";
import ButtonComponent from "../ui-components/button-component";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import useGetProductHomePageMobileRecomendationFeed, {
  homePageNavigationFeed,
} from "../../features/product/hooks/use-get-product-home-page-mobile-recomendation-feed";
import TwoRowsAndTwoColumnsDisplayProduct from "../ui-components/two-rows-and-two-columns-display-product";

const HomePageMobileRecomendationFeed = () => {
  const [buttonActiveIndex, setButtonActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(homePageNavigationFeed[0].name);
  const [currentProductData, isLoading] = useGetProductHomePageMobileRecomendationFeed(selectedCategory, 10);

  const sectionRef = useRef(null);

  //division of data into 2 columns
  const halfLength = Math.ceil(currentProductData?.length / 2);
  const leftColumnData = currentProductData?.slice(0, halfLength);
  const rightColumnData = currentProductData?.slice(halfLength);

  const handleButtonClick = (index) => {
    setButtonActiveIndex(index);
    const scrollUnit = 80;
    const sectionElement = sectionRef.current;
    const scrollAmount = index * scrollUnit;

    if (sectionElement) {
      sectionElement.scroll({
        left: scrollAmount,
        behavior: "smooth",
      });
    }

    setSelectedCategory(homePageNavigationFeed[index].name.replace(/\s/g, ""));
  };

  return (
    <div className="w-full">
      {/* navigation bar */}
      <section
        ref={sectionRef}
        className="flex overflow-x-scroll no-scrollbar border-t py-2   bg-white sticky z-50 top-[52px] "
      >
        {homePageNavigationFeed.map((navigationData, index) => (
          <div key={index} className="flex flex-col">
            <ButtonComponent
              onClick={() => handleButtonClick(index, navigationData.name)}
              key={index}
              className={`border-none rounded-none shadow-none outline-none px-2.5`}
            >
              <span
                className={`font-bold capitalize font-space-grotesk ${index === buttonActiveIndex && "text-[#00AA5B]"}`}
              >
                {navigationData.name}
              </span>
            </ButtonComponent>
            <LineAnimation isClicked={index === buttonActiveIndex} />
          </div>
        ))}
      </section>

      {/* product display */}
      <TwoRowsAndTwoColumnsDisplayProduct
        leftDisplayData={leftColumnData}
        rightDisplayData={rightColumnData}
        isLoading={isLoading}
      />
    </div>
  );
};

export default HomePageMobileRecomendationFeed;

const LineAnimation = ({ isClicked }) => {
  const [animationWidth, setAnimationWidth] = useState("0%");

  useEffect(() => {
    setAnimationWidth(isClicked ? `50%` : "0%");
  }, [isClicked]);

  return (
    <div className="relative w-full h-1 ">
      <motion.div
        initial={{ width: animationWidth }}
        animate={{ width: animationWidth }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="h-full bg-[#00AA5B] rounded-full mx-auto "
      />
    </div>
  );
};

LineAnimation.propTypes = {
  isClicked: PropTypes.bool.isRequired,
};
