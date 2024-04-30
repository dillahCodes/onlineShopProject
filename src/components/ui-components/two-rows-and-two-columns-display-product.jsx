import { useNavigate } from "react-router-dom";
import CardProductDisplay from "./card-product-display";
import CardProductDisplaySkeleton from "./card-product-display-skeleton";
import PropTypes from "prop-types";

const TwoRowsAndTwoColumnsDisplayProduct = ({ leftDisplayData, rightDisplayData, isLoading }) => {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <section className="w-full flex mt-2 gap-x-1 overflow-x-auto no-scrollbar">
        <div className="flex flex-col w-full">
          {Array.from({ length: 3 }).map((_, index) => (
            <section className=" w-full p-2" key={index}>
              {/* skeleton */}
              <CardProductDisplaySkeleton />
            </section>
          ))}
        </div>
        <div className="flex flex-col w-full">
          {Array.from({ length: 3 }).map((_, index) => (
            <section className=" w-full p-2" key={index}>
              {/* skeleton */}
              <CardProductDisplaySkeleton />
            </section>
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className="w-full flex mt-2 gap-x-1 ">
        <div className="flex flex-col w-full">
          {leftDisplayData?.map((productData, index) => (
            <section className=" w-full p-2" key={index} onClick={() => navigate(`/product/${productData.product_id}`)}>
              <CardProductDisplay
                imageUrl={productData.images[0].img_url}
                productTitle={productData.name}
                price={productData.price}
                className="w-full"
              />
            </section>
          ))}
        </div>
        <div className="flex flex-col w-full">
          {rightDisplayData?.map((productData, index) => (
            <section className=" w-full p-2" key={index} onClick={() => navigate(`/product/${productData.product_id}`)}>
              <CardProductDisplay
                imageUrl={productData.images[0].img_url}
                productTitle={productData.name}
                price={productData.price}
                className="w-full"
              />
            </section>
          ))}
        </div>
      </section>
    );
  }
};

export default TwoRowsAndTwoColumnsDisplayProduct;

TwoRowsAndTwoColumnsDisplayProduct.propTypes = {
  leftDisplayData: PropTypes.array,
  rightDisplayData: PropTypes.array,
  isLoading: PropTypes.bool,
};
