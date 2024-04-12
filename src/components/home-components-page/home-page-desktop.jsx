import HomePageDesktopTopUpTabs from "./home-page-dekstop-top-up-tabs";
import HomePageDesktopProdutcsCategories from "./home-page-desktop-products-categories";
import HeroPageSelider from "./home-page-hero-slider";
import HomePageMainCategoriesTab from "./home-page-main-categories-tab";

const HomePageDekstop = () => {
  return (
    <div className="w-full">
      <HeroPageSelider />
      <div
        className={`w-[90%] mx-autojustify-between lg:flex-nowrap flex-wrap   gap-x-5 flex shadow-md p-5 rounded-xl mt-5`}
      >
        <HomePageDesktopProdutcsCategories />
        <HomePageDesktopTopUpTabs />
      </div>
      <HomePageMainCategoriesTab />
    </div>
  );
};

export default HomePageDekstop;
