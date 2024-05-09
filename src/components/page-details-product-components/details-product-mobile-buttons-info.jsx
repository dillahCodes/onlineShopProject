import PropTypes from "prop-types";
import ButtonComponent from "../ui-components/button-component";
import { AiOutlineCamera } from "react-icons/ai";
import { TiMessages, TiStarFullOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import productSoldCountFormatter from "../../utils/product-sold-count-formatter";

const DetailsProductMobileButtonsInfo = ({ productData }) => {
  const navigate = useNavigate();
  const getProductRatingLength = () => {
    return productData && productData?.review?.filter((review) => review.rating !== 0, 0).length;
  };
  const getProductRatingAverage = () => {
    return (
      productData &&
      (productData.review.reduce((acc, curr) => acc + curr.rating, 0) / productData.review.length).toFixed(1)
    );
  };

  return (
    <div className="flex items-center w-full gap-2 p-3 mt-2 bg-white gap-x-5 overflow-x-auto no-scrollbar">
      <span className="capitalize font-space-grotesk min-w-fit">
        {productSoldCountFormatter(productData?.sold_count)} terjual
      </span>
      <div className="flex  gap-x-3">
        <ButtonComponent
          onClick={() => navigate(`/product/${productData.product_id}/reviews`)}
          icon={<TiStarFullOutline className="text-xl text-[#FFC400]" />}
          className={"flex items-center gap-x-1"}
        >
          <span>
            <span> {getProductRatingAverage()}</span>
            <span> ({getProductRatingLength()})</span>
          </span>
        </ButtonComponent>
        <ButtonComponent icon={<AiOutlineCamera className="text-xl" />} className={"flex items-center gap-x-1"}>
          <span>0</span>
        </ButtonComponent>
        <ButtonComponent
          onClick={() => navigate(`/product/${productData.product_id}/talk`)}
          icon={<TiMessages className="text-xl" />}
          className={"flex items-center gap-x-1"}
        >
          <span>{productData?.discus.length}</span>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default DetailsProductMobileButtonsInfo;

DetailsProductMobileButtonsInfo.propTypes = {
  productData: PropTypes.object,
};
