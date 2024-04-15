import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsProductMobilePhoto from "./details-product-mobile-photo";
import DetailsProductMobileTitleAndPrice from "./details-product-mobile-title-and-price";
import DetailsProductMobileButtonsInfo from "./details-product-mobile-buttons-info";
import DetailsProductMobileDescriptionProduct from "./details-product-mobile-description-product";
import DetailsProductMobileOwnerProductProfile from "./details-product-mobile-owner-product-profile";
import DetailsProductMobileRatingThisProduct from "./details-product-mobile-rating-this-product";
import DetailsProductMobilePageLoader from "./details-product-mobile-page-loader";

const DetailsProductMobilePage = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(import.meta.env.VITE_API_URL + `products/${productId}`)
        .then(function (response) {
          setCurrentProduct(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    if (productId) fetchData();
  }, [productId]);

  if (!currentProduct) return <DetailsProductMobilePageLoader active={!currentProduct} />;

  return (
    <div className="w-full">
      <DetailsProductMobilePhoto imageProductData={currentProduct.images} />
      <DetailsProductMobileTitleAndPrice productData={currentProduct} />
      <DetailsProductMobileButtonsInfo productData={currentProduct} />
      <DetailsProductMobileDescriptionProduct productData={currentProduct} />
      <DetailsProductMobileOwnerProductProfile productData={currentProduct} />
      <DetailsProductMobileRatingThisProduct productData={currentProduct} />
    </div>
  );
};

export default DetailsProductMobilePage;
