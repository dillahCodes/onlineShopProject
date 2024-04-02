import PropTypes from "prop-types";
import ButtonComponent from "../../components/ui/button-component";
import { IoIosStar } from "react-icons/io";
import { AiOutlineCamera } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const DetailsProductMobileButtonsInfo = ({ productData }) => {
  const navigate = useNavigate();
  const getProductRatingLength = () => {
    return productData && productData?.review?.filter((review) => review.rating !== 0, 0).length;
  };
  const getProductRatingAverage = () => {
    return (
      productData &&
      (
        productData.review.reduce((acc, curr) => acc + curr.rating, 0) / productData.review.length
      ).toFixed(1)
    );
  };

  return (
    <div className="flex flex-wrap items-center w-full gap-2 p-5 mt-2 bg-white gap-x-5">
      <span className="capitalize font-space-grotesk">terjual 0 rb+</span>
      <div className="flex flex-wrap w-full gap-x-3">
        <ButtonComponent
          onClick={() => navigate(`/product/${productData.product_id}/reviews`)}
          icon={<IoIosStar className="text-xl" />}
          className={"flex items-center gap-x-1"}
        >
          <span>
            <span> {getProductRatingAverage()}</span>
            <span> ({getProductRatingLength()})</span>
          </span>
        </ButtonComponent>
        <ButtonComponent
          icon={<AiOutlineCamera className="text-xl" />}
          className={"flex items-center gap-x-1"}
        >
          <span>0</span>
        </ButtonComponent>
        <ButtonComponent
          icon={<TiMessages className="text-xl" />}
          className={"flex items-center gap-x-1"}
        >
          <span>0</span>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default DetailsProductMobileButtonsInfo;

DetailsProductMobileButtonsInfo.propTypes = {
  productData: PropTypes.object,
};
