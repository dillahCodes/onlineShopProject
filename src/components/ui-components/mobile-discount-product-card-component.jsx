import formatCurrencyToIDR from "../../utils/format-currency";
import PropTypes from "prop-types";

const MobileDiscountProductCardComponent = ({ product, onClick }) => {
  return (
    <div
      className={`h-[237px] min-w-[140px] max-w-[140px] bg-white rounded-md relative`}
      onClick={onClick}
    >
      {/* ribbon */}
      <div className="flex flex-col absolute top-2 -left-1 ">
        <span
          className="text-[12px] bg-red-500 px-3 py-1 font-bold text-white font-space-grotesk"
          style={{
            borderRadius: "500px 999px 999px 0",
          }}
        >
          {product.discount}%
        </span>
        <span className="w-1 h-1 bg-red-600 rounded-bl-full mt-[0.1px] " />
      </div>
      {/* product image */}
      <div className="w-full h-[132px] rounded-[inherit]">
        <img src={product.image} className="rounded-b-none rounded-[inherit]" />
      </div>
      {/* product stock */}
      <div className="w-full bg-[rgba(0,_0,_0,_0.1)] pt-4 rounded-b-lg p-2 justify-between flex items-center ">
        <span className="font-bold text-xs text-[#6d7588]">segera habis</span>
        {/* stock progress bar */}
        <div className=" w-[40px] rounded-full  bg-gray-300 flex items-center relative ">
          <div
            className="rounded-[inherit] rounded-r-none"
            style={{
              height: 3,
              width: `${product.stock}%`,
              background: "#F94D63",
            }}
          />
          <svg
            className={`t3F4IedlSlG6w1b0d57S w-[13px] absolute `}
            viewBox="0 0 16 16"
            style={{ left: `calc(${product.stock}% - 6px)`, top: `-8` }}
          >
            <path
              d="M10.999 13.5C8.1388 12.5709 5.8187 9.9414 5.70869 5.41188C5.70869 4.94732 5.04864 4.83118 4.93863 5.29574C4.16857 8.43156 3.50852 12.1481 4.49859 13.1934C6.99902 16 10.999 14 10.999 13.5Z"
              fill="#ffffff"
            />
            <path
              d="M13.2657 9.33432C13.2657 7.20098 12.2657 4.86765 11.7324 3.86765C11.5324 3.53432 11.0657 3.40098 10.7324 3.66765C10.3991 3.93432 9.99905 4.26765 9.66572 4.53432C8.99905 3.86765 8.26572 2.46765 7.66572 1.60098C7.46572 1.33432 7.06572 1.20098 6.73239 1.40098C5.53239 2.20098 3.06572 4.93432 2.73239 8.46765C2.53239 10.6677 3.53239 12.6677 5.13239 13.801C5.13239 13.801 4.06572 10.5343 5.39906 7.33432C5.53239 7.06765 5.93239 7.13432 5.93239 7.46765C5.86572 9.80098 6.26572 14.5343 9.99905 14.2677C11.9991 14.001 13.2657 11.601 13.2657 9.40098C13.2657 9.40098 13.2657 9.40098 13.2657 9.33432Z"
              fill="var(--RN500, #F94D63)"
            />
          </svg>
        </div>
      </div>
      {/* product price */}
      <div className="w-full flex items-center p-2 gap-x-2">
        <h1 className="text-sm font-bold truncate w-[70%]">
          {formatCurrencyToIDR(product.price - product.price * (product.discount / 100))}
        </h1>
        <h1 className="text-[10px] truncate text-gray-400 line-through">
          {formatCurrencyToIDR(product.price)}
        </h1>
      </div>
    </div>
  );
};

export default MobileDiscountProductCardComponent;
MobileDiscountProductCardComponent.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};
