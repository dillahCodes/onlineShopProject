import { isMobile } from "react-device-detect";
import HeroPageSelider from "../../features/home/home-page-hero-slider";
import HomePageMainCategoriesTab from "../../features/home/home-page-main-categories-tab";
import HomePageTopUpTabs from "../../features/home/home-page-top-up-tabs";
import HomePageProdutcsCategories from "../../features/home/home-page-products-categories";

const HomePage = () => {
  return (
    <div className={`h-screen ${!isMobile ? "p-5" : "p-0"}`}>
      <HeroPageSelider />
      <div
        className={` ${
          !isMobile && "w-[90%] mx-auto"
        }  justify-between lg:flex-nowrap flex-wrap   gap-x-5 flex shadow-md p-5 rounded-xl mt-5`}
      >
        <HomePageProdutcsCategories />
        <HomePageTopUpTabs />
      </div>
      <HomePageMainCategoriesTab />
    </div>
  );
};

export default HomePage;
