import HeroPageSelider from "./home-page-hero-slider";
import HomePageMainCategoriesTab from "./home-page-main-categories-tab";
import HomePageTopUpTabs from "./home-page-top-up-tabs";
import HomePageProdutcsCategories from "./home-page-products-categories";
import { isMobile } from "react-device-detect";

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
