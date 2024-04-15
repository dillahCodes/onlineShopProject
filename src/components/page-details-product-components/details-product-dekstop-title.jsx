import PropTypes from "prop-types";
import { IoIosStar } from "react-icons/io";
import formatCurrencyToIDR from "../../utils/format-currency";

const DetailsProductDekstopTitle = ({ currentProductData }) => {
  return (
    <div className="w-full">
      <h1 className="text-xl font-bold font-space-grotesk">{currentProductData.name}</h1>
      <div className="flex items-center w-full my-2 gap-x-3">
        <span> Terjual {0}</span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <IoIosStar className="text-base" />
          {(
            currentProductData.review.reduce((acc, curr) => acc + curr.rating, 0) /
            currentProductData.review.length
          ).toFixed(1)}

          <span> ({currentProductData.review.length} rating)</span>
        </span>
      </div>
      <span className="text-3xl font-medium font-space-grotesk">
        {formatCurrencyToIDR(currentProductData.price)}
      </span>
    </div>
  );
};

export default DetailsProductDekstopTitle;

DetailsProductDekstopTitle.propTypes = {
  currentProductData: PropTypes.object,
};
