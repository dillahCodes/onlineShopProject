import DetailsProductMobilePhoto from "./details-product-mobile-photo";
import DetailsProductMobileTitleAndPrice from "./details-product-mobile-title-and-price";
import DetailsProductMobileButtonsInfo from "./details-product-mobile-buttons-info";
import DetailsProductMobileDescriptionProduct from "./details-product-mobile-description-product";
import DetailsProductMobileOwnerProductProfile from "./details-product-mobile-owner-product-profile";
import DetailsProductMobileRatingThisProduct from "./details-product-mobile-rating-this-product";
import DetailsProductMobilePageLoader from "./details-product-mobile-page-loader";
import DetailsProductMobileReportThisProduct from "./details-product-mobile-report-this-product";
import useGetProductById from "../../features/product/hooks/use-get-product-by-id";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import smoothScrollTo from "../../utils/smoth-scroll-to";
import useNavbarChangeWhenScroll from "../../hooks/use-navbar-change-when-scroll";
import SliderProductComponent from "../ui-components/slider-product-component";
import useGetProductWithMerchantAndSameCategory from "../../features/product/hooks/use-get-product-with-merchant-and-same-category";
import useGetProductByCategory from "../../features/product/hooks/use-get-product-by-category";
import { useParams } from "react-router-dom";
import useSetUserSearchHistory from "../../features/auth/hooks/use-set-user-search-history";
import useGetProductFromYourSearch from "../../features/product/hooks/use-get-product-from-your-search";
import { useAuth } from "../../context/user-auth-context";

const detailProductNavList = ["detail produk", "ulasan", "rekomendasi"];

const DetailsProductMobilePage = () => {
  const [isShow] = useNavbarChangeWhenScroll(30);
  const [selectedSection, setSelectedSection] = useState(detailProductNavList[0]);
  const { currentProduct, isLoading } = useGetProductById();
  const [anotherSamePrductInThisMerchant] = useGetProductWithMerchantAndSameCategory(
    currentProduct?.owner.owner_id,
    currentProduct?.category
  );
  const [currentProductDataWithSameCategory] = useGetProductByCategory(currentProduct?.category);
  const [currentProductFromYourSearch] = useGetProductFromYourSearch(2);
  const isReviewNotEmpty = currentProduct?.review?.length > 0;
  const { productId } = useParams();
  const { user } = useAuth();

  useSetUserSearchHistory(currentProduct);

  // scroll to top when component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  // handle click scroll
  const handleClick = (section) => {
    setSelectedSection(section);
    if (section === detailProductNavList[0]) {
      smoothScrollTo("product_description");
    } else if (section === detailProductNavList[1]) {
      smoothScrollTo("product_review");
    } else if (section === detailProductNavList[2]) {
      smoothScrollTo("recomended_same_product");
    }
  };

  // skeleton loader
  if (isLoading || !currentProduct) return <DetailsProductMobilePageLoader active={isLoading || !currentProduct} />;

  return (
    <div className="w-full min-h-screen relative">
      {/* nav detail and review */}
      <section
        className={`w-full bg-white fixed z-20 mt-[-3px]  -translate-y-full transition-all duration-300 flex max-w-[500px] ${
          isShow ? "translate-y-0" : ""
        }`}
      >
        {detailProductNavList.map((item, index) => (
          <section
            key={index}
            onClick={() => handleClick(item)}
            className={`capitalize w-full truncate text-base cursor-pointer text-center font-bold ${
              selectedSection === item ? "text-[#00AA5B]" : "text-[#6D7588]"
            } font-space-grotesk`}
          >
            <span className="py-3 block truncate">{item}</span>
            <LineAnimation isClicked={selectedSection === item} />
          </section>
        ))}
      </section>
      <DetailsProductMobilePhoto imageProductData={currentProduct.images} />
      <DetailsProductMobileTitleAndPrice productData={currentProduct} />
      <DetailsProductMobileButtonsInfo productData={currentProduct} />

      <section className="w-full" id="product_description">
        <DetailsProductMobileDescriptionProduct productData={currentProduct} />
      </section>
      <DetailsProductMobileOwnerProductProfile productData={currentProduct} />

      {/* same product, same category, and same merchant */}
      <SliderProductComponent
        dataProduct={anotherSamePrductInThisMerchant}
        title={"lainnya di toko ini"}
        className={"mt-2  bg-white p-3"}
      />
      {isReviewNotEmpty && (
        <section className="w-full" id="product_review">
          <DetailsProductMobileRatingThisProduct productData={currentProduct} />
        </section>
      )}
      <DetailsProductMobileReportThisProduct />

      {/* same category, and same product */}
      <section id="recomended_same_product">
        <SliderProductComponent
          title={"pilihan lainnya untukmu"}
          dataProduct={currentProductDataWithSameCategory}
          className={"mt-2  bg-white p-3"}
        />
      </section>

      {/* same product from your search */}
      {user && (
        <SliderProductComponent
          title={"dari pencarianmu"}
          dataProduct={currentProductFromYourSearch}
          className={"mt-2  bg-white p-3"}
        />
      )}
    </div>
  );
};

export default DetailsProductMobilePage;

const LineAnimation = ({ isClicked }) => {
  const [animationWidth, setAnimationWidth] = useState("0%");

  useEffect(() => {
    setAnimationWidth(isClicked ? `100%` : "0%");
  }, [isClicked]);

  return (
    <div className="relative w-full h-1 ">
      <motion.div
        initial={{ width: animationWidth }}
        animate={{ width: animationWidth }}
        transition={{ duration: 0.2, ease: "linear" }}
        className="h-full bg-[#00AA5B] rounded-full mx-auto "
      />
    </div>
  );
};

LineAnimation.propTypes = {
  isClicked: PropTypes.bool.isRequired,
};
