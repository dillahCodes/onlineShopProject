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
  // Navbar related state
  const [isShow] = useNavbarChangeWhenScroll(30);

  // Product detail navigation
  const [selectedSection, setSelectedSection] = useState(
    detailProductNavList[0],
  );

  // Fetching current product data
  const { currentProduct, isLoading } = useGetProductById();
  const productImages = currentProduct?.images
    .filter((data) => !data.name && !data.url && !data.quantity)
    .map((data) => data.img_url);
  console.log(productImages);

  // Fetching related product data
  const [anotherSamePrductInThisMerchant] =
    useGetProductWithMerchantAndSameCategory(
      currentProduct?.owner.owner_id,
      currentProduct?.category,
    );
  const [currentProductDataWithSameCategory] = useGetProductByCategory(
    currentProduct?.category,
  );
  const [currentProductFromYourSearch] = useGetProductFromYourSearch(2);

  // Checking if the product has reviews
  const isReviewNotEmpty = currentProduct?.review?.length > 0;

  // Params and user authentication
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
  if (isLoading || !currentProduct)
    return (
      <DetailsProductMobilePageLoader active={isLoading || !currentProduct} />
    );

  return (
    <div className="relative min-h-screen w-full">
      {/* nav detail and review */}
      <section
        className={`fixed z-20 mt-[-3px] flex w-full max-w-[500px] -translate-y-full bg-white transition-all duration-300 ${
          isShow ? "translate-y-0" : ""
        }`}
      >
        {detailProductNavList.map((item, index) => (
          <section
            key={index}
            onClick={() => handleClick(item)}
            className={`w-full cursor-pointer truncate text-center text-base font-bold capitalize ${
              selectedSection === item ? "text-[#00AA5B]" : "text-[#6D7588]"
            } font-space-grotesk`}
          >
            <span className="block truncate py-3">{item}</span>
            <LineAnimation isClicked={selectedSection === item} />
          </section>
        ))}
      </section>
      <DetailsProductMobilePhoto imageProductData={productImages} />
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
        className={"mt-2 bg-white p-3"}
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
          className={"mt-2 bg-white p-3"}
        />
      </section>

      {/* same product from your search */}
      {user && (
        <SliderProductComponent
          title={"dari pencarianmu"}
          dataProduct={currentProductFromYourSearch}
          className={"mt-2 bg-white p-3"}
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
    <div className="relative h-1 w-full">
      <motion.div
        initial={{ width: animationWidth }}
        animate={{ width: animationWidth }}
        transition={{ duration: 0.2, ease: "linear" }}
        className="mx-auto h-full rounded-full bg-[#00AA5B]"
      />
    </div>
  );
};

LineAnimation.propTypes = {
  isClicked: PropTypes.bool.isRequired,
};
