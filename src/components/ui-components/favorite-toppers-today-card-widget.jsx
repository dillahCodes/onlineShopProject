import formatCurrencyToIDR from "../../utils/format-currency";
import PropTypes from "prop-types";
import isTextOverflow from "../../utils/is-text-overflow";
import { TiStarFullOutline } from "react-icons/ti";
import productSoldCountFormatter from "../../utils/product-sold-count-formatter";

const FavouriteToppersTodayCardWidget = ({ ProductData, className, onClick, ...rest }) => {
  const { image, name, price, sold, rating, itemNumber } = ProductData;

  if (!ProductData) return null;

  return (
    <div
      className={`w-full h-[125px]  flex cursor-pointer overflow-hidden ${className} rounded-md  `}
      {...rest}
    >
      {/* image */}
      <div className="w-[116px] h-full ml-3 mr-3 select-none relative">
        {/* ribbon */}
        <div className="flex flex-col absolute top-2 -left-1 ">
          <span
            className="text-[9px] bg-gradient-to-r from-yellow-400 to-yellow-600 px-3 py-1 font-bold text-white font-space-grotesk"
            style={{
              borderRadius: "500px 999px 999px 0",
            }}
          >
            #{itemNumber}
          </span>
          <span className="w-1 h-1 bg-yellow-700 rounded-bl-full mt-[0.1px] " />
        </div>
        <div className="w-[108px] h-[108px]">
          <img src={image} alt="" className="object-center rounded-md" />
        </div>
      </div>

      {/* details */}
      <div
        className={`w-full h-fit  ${
          isTextOverflow(name, 80) && "truncate"
        } flex flex-col select-none `}
        onClick={onClick}
      >
        <h1
          className={`text-xs font-semibold font-space-grotesk  ${
            isTextOverflow(name, 80) && "truncate"
          }`}
        >
          {name}
        </h1>
        <span className="font-bold font-space-grotesk ">{formatCurrencyToIDR(price)}</span>
        <div className="w-full flex  items-center gap-x-1 text-gray-400 font-medium text-xs">
          <span className="flex items-center gap-x-1 ">
            <span>
              <TiStarFullOutline className="text-[#FFC400]" />
            </span>
            <span className="">{rating}</span>
          </span>
          <span>•</span>
          <span className="flex  items-center gap-x-2">
            <span>{productSoldCountFormatter(sold)} Terjual</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FavouriteToppersTodayCardWidget;

FavouriteToppersTodayCardWidget.propTypes = {
  ProductData: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
