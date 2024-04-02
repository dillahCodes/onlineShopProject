import { Checkbox, Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosStar } from "react-icons/io";
import PropTypes from "prop-types";
import ButtonComponent from "../../components/ui/button-component";
import BottomDrawer from "../../components/ui/bottom-drawer";
import { IoClose } from "react-icons/io5";
import { isMobile } from "react-device-detect";
import { IoIosArrowDown } from "react-icons/io";
import CommnetsComponent from "../../components/ui/comments-component";
import RatingStatistics from "../../components/ui/rating-statistics";
import "./style/all-product-reviews-mobile.css";

const menuButtons = ["foto & video", "rating", "variant", "topik", "urutkan"];
const sortFilterMenu = ["rating tertinggi", "rating terendah", "paling baru", "paling membantu"];
const getAverageRating = (currentProductData) => {
  if (currentProductData?.review.length === 0 || !currentProductData) return 0;
  return (
    currentProductData?.review.reduce((acc, curr) => acc + curr.rating, 0) /
    currentProductData.review.length
  ).toFixed(1);
};

const getPercentOfRatings = (currentProductData) => {
  if (currentProductData?.review.length === 0 || !currentProductData) return 0;
  const filteredReviews = currentProductData?.review.filter((review) => {
    return review.rating === 5 || review.rating === 4;
  });
  return Math.round((filteredReviews.length / currentProductData?.review.length) * 100);
};

const AllProductReviewsMobile = ({ currentProductData }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState(false);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState({
    isOpen: false,
    photo: false,
    rating: false,
    variant: false,
    topik: false,
    urutkan: false,
  });
  const [filterSelected, setFilterSelected] = useState({
    urutkan: "",
    topik: "",
    variant: "",
    rating: "",
  });

  useEffect(() => {
    const initialScroll = 88;
    const handleScroll = () => {
      if (Math.round(window.scrollY) >= initialScroll) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBack = () => history.back();
  const handleOpenAndCloseBottomDrawer = () => setIsBottomDrawerOpen(!isBottomDrawerOpen);
  const handleFilterDrawerOpen = (name) => {
    setFilterDrawerOpen((prevState) => ({
      ...prevState,
      [name]: !filterDrawerOpen[name],
      isOpen: name !== "foto & video" ? !filterDrawerOpen.isOpen : false,
      // if user click photo filter don't open drawer
    }));
  };
  const handleFilterDrawerClose = () => {
    setFilterDrawerOpen((prevState) => ({
      ...prevState,
      isOpen: false,
      rating: false,
      variant: false,
      photo: false,
      topik: false,
      urutkan: false,
    }));
  };

  return (
    <Layout>
      <Header className="fixed top-0 left-0 right-0 z-20 flex p-5 bg-white ">
        <div className="flex items-center gap-x-5">
          <div className="text-4xl text-gray-400" onClick={handleBack}>
            <IoIosArrowRoundBack />
          </div>
          <h1 className="text-xl font-bold capitalize font-space-grotesk">ulasan pembeli</h1>
        </div>
      </Header>
      <Layout className={`pt-[60px]   border border-orange-600`}>
        <section className="flex w-full p-5 bg-white gap-x-5">
          {/* average rating  */}
          <div className="flex items-center gap-x-2 font-space-grotesk">
            <div className="text-2xl">
              <IoIosStar />
            </div>
            <div className="font-space-grotesk">
              <span className="text-2xl font-bold ">{getAverageRating(currentProductData)}</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-400">5.0</span>
            </div>
          </div>
          {/* percentage of buyer satisfaction */}
          <div className="flex flex-col w-full ">
            <ButtonComponent className={"w-fit h-fit p-0 shadow-none border-none bg-transparent"}>
              <span
                className="self-start text-sm font-bold truncate whitespace-normal sm:text-base md:text-lg font-space-grotesk"
                onClick={handleOpenAndCloseBottomDrawer}
              >
                {getPercentOfRatings(currentProductData)} % pembeli merasa puas &gt;
              </span>
            </ButtonComponent>
            {/* rating statistics drawer */}
            <BottomDrawer
              drawerTitle={
                <ButtonComponent
                  icon={<IoClose />}
                  className="p-0 text-4xl border-none shadow-none "
                  onClick={handleOpenAndCloseBottomDrawer}
                />
              }
              className="rounded-t-lg"
              isOpen={isBottomDrawerOpen}
              onClose={handleOpenAndCloseBottomDrawer}
            >
              <div className="flex flex-col w-full ">
                <span className="text-lg font-bold font-space-grotesk">
                  {getPercentOfRatings(currentProductData)} % pembeli merasa puas belanja barang ini
                </span>
                <span className="text-xs font-light capitalize font-space-grotesk">
                  Dihitung dari jumlah rating positif (bintang 4 dan 5) dibagi dengan total rating.
                </span>
              </div>
              <RatingStatistics currentProductData={currentProductData} className={"mt-5"} />
            </BottomDrawer>
            <div className="flex items-center w-full text-sm font-medium gap-x-2 font-space-grotesk">
              <span>
                {currentProductData?.review.filter((review) => review.rating).length || 0} rating
              </span>
              <span>•</span>
              <span>
                {currentProductData?.review.filter((review) => review.comment).length || 0} ulasan
              </span>
            </div>
          </div>
        </section>
        {/* filter slider */}
        <section className="w-full bg-white ">
          <div
            className={`sticky flex overflow-x-auto w-full z-10 bg-white   p-5 no-scrollbar  flex-nowrap justify-between  ${
              isMobile && "max-w-[900px]"
            } top-16 gap-x-5`}
            id="filterReviewsMobileVersion"
          >
            {menuButtons.map((item, index) => (
              <ButtonComponent
                key={index}
                icon={<IoIosArrowDown />}
                className={` w-full flex items-center  capitalize ${
                  filterSelected[item] && "border border-black"
                } `}
                onClick={() => handleFilterDrawerOpen(item)}
              >
                {item}
              </ButtonComponent>
            ))}
          </div>
          <div className="z-0 w-full p-5 pt-0">
            <CommnetsComponent comentData={currentProductData?.review} sortTo={filterSelected.urutkan} />
          </div>
        </section>
        {/* drawer filter */}
        <BottomDrawer
          drawerHeight={"fit-content"}
          drawerTitle={
            <ButtonComponent
              icon={<IoClose />}
              className="p-0 text-4xl border-none shadow-none "
              onClick={handleFilterDrawerClose}
            />
          }
          className="rounded-t-lg "
          isOpen={filterDrawerOpen.isOpen}
          onClose={handleFilterDrawerClose}
        >
          {filterDrawerOpen.urutkan && (
            <SortFilter
              setFilterSelected={setFilterSelected}
              checkedWithSameValue={filterSelected.urutkan}
            />
          )}

          {(filterDrawerOpen.rating || filterDrawerOpen.topik || filterDrawerOpen.variant) && (
            <div className="font-bold capitalize font-space-grotesk">coming soon</div>
          )}
        </BottomDrawer>
      </Layout>
    </Layout>
  );
};

export default AllProductReviewsMobile;

AllProductReviewsMobile.propTypes = {
  currentProductData: PropTypes.object,
};

const SortFilter = ({ setFilterSelected, checkedWithSameValue }) => {
  const [selectedFilter, setSelectedFilter] = useState(checkedWithSameValue);

  useEffect(() => {
    setFilterSelected((prev) => ({ ...prev, urutkan: selectedFilter }));
  }, [selectedFilter, setFilterSelected]);

  // handle for checkbox and uncheckbox
  const handleSelectFilter = (item) => () => {
    // if item is already selected and user click again, uncheck it
    setSelectedFilter(item === selectedFilter ? "" : item);
  };

  return (
    <div className={`flex flex-col w-full gap-y-5`}>
      {sortFilterMenu.map((item, index) => (
        <div className="flex items-center justify-between w-full pb-5 border-b" key={index}>
          <span className="font-bold capitalize">{item}</span>
          <Checkbox
            onChange={handleSelectFilter(item)}
            checked={checkedWithSameValue === item || item === selectedFilter}
          />
        </div>
      ))}
    </div>
  );
};

SortFilter.propTypes = {
  setFilterSelected: PropTypes.func,
  checkedWithSameValue: PropTypes.string,
};
