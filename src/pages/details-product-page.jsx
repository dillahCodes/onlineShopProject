import DetailsProductDekstopPage from "../components/page-details-product-components/details-product-dekstop-page";
import DetailsProductMobilePage from "../components/page-details-product-components/details-product-mobile-page";
import { isMobile } from "react-device-detect";

const DetailsProductPage = () => {
  return (
    <div className={`w-full ${!isMobile && "p-5"}`}>
      {isMobile ? <DetailsProductMobilePage /> : <DetailsProductDekstopPage />}
    </div>
  );
};

export default DetailsProductPage;
