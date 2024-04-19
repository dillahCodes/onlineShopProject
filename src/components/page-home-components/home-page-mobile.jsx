import HeroPageSelider from "./home-page-hero-slider";
import HomePageMobileAllFeatures from "./home-page-mobile-all-features";
import HomePageMobileOperatorCredit from "./home-page-mobile-operator-credit";
import HomePageMobileShopForYou from "./home-page-mobile-shop-for-you";
import HomePageMobileSpecialDiscount from "./home-page-mobile-special-discount";
import HomePageMobileTodayPromoChoices from "./home-page-mobile-today-promo-choices";
import HomePageMobileYourShoppingInspirationCategory from "./home-page-mobile-your-shopping-inspiration-category";
import HomePageMobileTodayToppersFavorite from "./home-page-today-toppers-favorite";

const HonePageMobile = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <HeroPageSelider />
      <HomePageMobileAllFeatures />
      <HomePageMobileOperatorCredit />
      <HomePageMobileSpecialDiscount />
      <HomePageMobileShopForYou />
      <HomePageMobileYourShoppingInspirationCategory />
      <HomePageMobileTodayToppersFavorite />
      <HomePageMobileTodayPromoChoices />
    </div>
  );
};

export default HonePageMobile;
