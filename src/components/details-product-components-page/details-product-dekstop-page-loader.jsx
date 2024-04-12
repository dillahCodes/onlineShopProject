import DetailsProductSkelekton from "../ui-components/details-product-skelekton";
import DetailsProductImageSkeleton from "../ui-components/details-product-image-skelekton";
import DetailsProudctRatingThisProductSkelekton from "../ui-components/details-product-rating-this-product-skelekton";
import PropTypes from "prop-types";
import DetailsProductProductCountAndMessageSkelekton from "../ui-components/details-product-product-count-and-message-skelekton";

const DetailsProductDesktopPageLoader = ({ currentProduct }) => {
  return (
    <div className="flex flex-col w-full gap-y-5">
      {/* product image and count */}
      <div className="flex w-full gap-x-20 ">
        <div className="flex flex-col w-[70%] gap-y-5">
          <div className="flex w-full gap-x-5">
            <DetailsProductImageSkeleton active={!currentProduct} />
            <div className="flex flex-col w-full gap-5">
              <DetailsProductSkelekton active={!currentProduct} />
            </div>
          </div>
          <div className="flex flex-col w-full gap-y-5">
            <DetailsProudctRatingThisProductSkelekton active={!currentProduct} />
          </div>
        </div>
        <div className="sticky top-5 w-[30%] h-fit border-[2px] rounded-md p-5">
          <DetailsProductProductCountAndMessageSkelekton active={!currentProduct} />
        </div>
      </div>
      <div className="w-full rounded-md h-fit">
        {/* <DetailsProductRecomendedProducts currentProductId={productId} /> */}
      </div>
    </div>
  );
};

export default DetailsProductDesktopPageLoader;
DetailsProductDesktopPageLoader.propTypes = {
  currentProduct: PropTypes.object,
};
