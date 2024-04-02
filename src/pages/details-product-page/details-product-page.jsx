import DetailsProductMobilePage from "./details-product-mobile-page";
import DetailsProductDekstopPage from "./details-product-dekstop-page";
import { isMobile } from "react-device-detect";

const DetailsProductPage = () => {
  return (
    <div className={`w-full ${!isMobile && "p-5"}`}>
      {isMobile ? <DetailsProductMobilePage /> : <DetailsProductDekstopPage />}
    </div>
  );
};

export default DetailsProductPage;
