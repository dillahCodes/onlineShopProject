import { isMobile } from "react-device-detect";
import HonePageMobile from "../components/page-home-components/home-page-mobile";
import HomePageDekstop from "../components/page-home-components/home-page-desktop";

const HomePage = () => {
  return (
    <div className={`h-screen ${!isMobile ? "p-5" : "p-0 "}`}>
      {isMobile ? <HonePageMobile /> : <HomePageDekstop />}
    </div>
  );
};

export default HomePage;
