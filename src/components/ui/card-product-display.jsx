import defaultimage from "../../assets/defaultimage.jpg";
import { AiFillShop } from "react-icons/ai";
import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";

const CardProductDisplay = ({
  imageUrl,
  productTitle,
  price,
  rating,
  totalSold,
  onClick,
  productOwnerName,
}) => {
  function truncateString(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  }

  function formatCurrencyToIDR(amount) {
    const currencyFormatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return currencyFormatter.format(amount);
  }
  return (
    <div
      className={`w-[45%] cursor-pointer  sm:w-[30%]   lg:w-[18%] xl:w-[15%] border-[2px] rounded-md border-black  `}
      onClick={onClick}
    >
      <div className="w-full rounded-[inherit]">
        <img
          src={imageUrl ? imageUrl : defaultimage}
          width={"200px"}
          className="object-cover w-full rounded-[inherit] rounded-b-none"
          alt=""
        />
      </div>
      <div className="w-full p-2">
        <h1 className="font-medium font-space-grotesk">{truncateString(productTitle, 40)}</h1>
        <h2 className="my-2 text-base font-bold font-space-grotesk">{formatCurrencyToIDR(price)}</h2>
        <span className="flex items-center gap-x-2">
          <AiFillShop />
          {productOwnerName ? productOwnerName : "unknown"}
        </span>
        <span className="flex items-center w-full mt-2 gap-x-3">
          <span className="flex items-center gap-x-1">
            <CiStar /> {rating > 0 ? rating : "0.0"}
          </span>
          <div className="inline-block rounded-full  w-[1px] h-[15px] bg-black" />
          <span>{totalSold ? totalSold : 0} terjual</span>
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
  productOwnerName: PropTypes.string,
};
