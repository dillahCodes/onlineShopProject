import defaultimage from "../../assets/defaultimage.jpg";
import PropTypes from "prop-types";

import formatCurrencyToIDR from "../../utils/format-currency";
import { TiStarFullOutline } from "react-icons/ti";

const CardProductDisplay = ({
  imageUrl,
  productTitle,
  price,
  rating,
  totalSold,
  onClick,
  productLocationFrom,
  className,
}) => {
  function truncateString(text, maxLength) {
    return maxLength && text?.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  }

  return (
    <div className={className} onClick={onClick}>
      {/* image card */}
      <div className="w-full rounded-[inherit]">
        <img
          src={imageUrl ? imageUrl : defaultimage}
          width={"200px"}
          className="object-cover w-full rounded-[inherit] rounded-b-none"
          alt=""
        />
      </div>
      <div className="w-full p-2">
        {/* title */}
        <h1 className="font-medium font-space-grotesk">{truncateString(productTitle, 40)}</h1>
        {/* price */}
        <h2 className=" text-base font-bold font-space-grotesk">
          {formatCurrencyToIDR(price)}
        </h2>

        {/* rating */}
        <span className="flex  items-center w-full  gap-x-1 text-[#6d7588] ">
          <span className="flex items-center gap-x-1 ">
            <TiStarFullOutline className="text-[#FFC400]" />
            <span className="text-sm">{rating > 0 ? rating : "0.0"}</span>
          </span>
          <span>•</span>
          <span className="truncate">{totalSold ? totalSold : 0} terjual</span>
        </span>

        <span className="">
          <span className="flex items-center gap-x-2 ">
            <span
              className="h-5 w-5"
              style={{
                background: `url("https://images.tokopedia.net/img/official_store_badge.png")`,
                backgroundSize: "cover",
              }}
            />
            <span>{productLocationFrom ? productLocationFrom : "Indonesia"}</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default CardProductDisplay;

CardProductDisplay.propTypes = {
  imageUrl: PropTypes.string,
  productTitle: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.string,
  totalSold: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string,
  productLocationFrom: PropTypes.string,
};
