import { useNavigate } from "react-router-dom";
import CardProductDisplay from "./card-product-display";
import CardProductDisplaySkeleton from "./card-product-display-skeleton";
import PropTypes from "prop-types";

const TwoRowsAndTwoColumnsDisplayProduct = ({
  leftDisplayData,
  rightDisplayData,
  isLoading,
  className,
}) => {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <section
        className={`flex w-full ${className} gap-x-1 overflow-x-auto no-scrollbar`}
      >
        <div className="flex w-full flex-col">
          {Array.from({ length: 4 }).map((_, index) => (
            <section className="w-full p-2" key={index}>
              {/* skeleton */}
              <CardProductDisplaySkeleton />
            </section>
          ))}
        </div>
        <div className="flex w-full flex-col">
          {Array.from({ length: 4 }).map((_, index) => (
            <section className="w-full p-2" key={index}>
              {/* skeleton */}
              <CardProductDisplaySkeleton />
            </section>
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className="flex w-full gap-x-1 overflow-x-auto bg-white no-scrollbar">
        <div className="flex w-full flex-col">
          {leftDisplayData?.map((productData, index) => (
            <section
              className="w-full p-2"
              key={index}
              onClick={() => navigate(`/product/${productData.product_id}`)}
            >
              <CardProductDisplay
                imageUrl={productData?.images[0]?.img_url || null}
                productTitle={productData.name}
                price={productData.price}
                className="w-full"
              />
            </section>
          ))}
        </div>
        <div className="flex w-full flex-col">
          {rightDisplayData?.map((productData, index) => (
            <section
              className="w-full p-2"
              key={index}
              onClick={() => navigate(`/product/${productData.product_id}`)}
            >
              <CardProductDisplay
                imageUrl={productData?.images[0]?.img_url || null}
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
  className: PropTypes.string,
};
