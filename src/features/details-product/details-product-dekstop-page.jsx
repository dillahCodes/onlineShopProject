import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailsProductDekstopPhoto from "./details-product-dekstop-photo";
import DetailsProductDekstopInfo from "./details-product-desktop-info";
import DetailsProductDekstopProductCountAndMessage from "./details-product-dekstop-product-count-and-message";
import DetailsProductDekstopRatingThisProduct from "./details-product-desktop-rating-this-product";
import DetailsProductRecomendedProducts from "./details-product-recomended-products";
import DetailsProductDesktopPageLoader from "../../pages/details-product-page/details-product-dekstop-page-loader";

const DetailsProductDekstopPage = () => {
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

  if (!currentProduct) return <DetailsProductDesktopPageLoader currentProduct={currentProduct} />;

  return (
    // main container for product details, product image, product count
    <div className="flex flex-col w-full gap-y-5">
      {/* product image and count */}
      <div className="flex justify-between w-full gap-x-5 ">
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-5">
            <DetailsProductDekstopPhoto photoData={currentProduct?.images} />
            <div className="flex flex-col gap-5">
              <DetailsProductDekstopInfo currentProductData={currentProduct ? currentProduct : null} />
            </div>
          </div>
          <div className="flex flex-col w-full gap-y-5">
            <DetailsProductDekstopRatingThisProduct currentProductData={currentProduct} />
          </div>
        </div>
        <div className="sticky top-5 h-fit border-[2px] rounded-md p-5">
          <DetailsProductDekstopProductCountAndMessage currentProductData={currentProduct} />
        </div>
      </div>
      <div className="w-full rounded-md h-fit">
        <DetailsProductRecomendedProducts currentProductId={productId} />
      </div>
    </div>
  );
};

export default DetailsProductDekstopPage;
