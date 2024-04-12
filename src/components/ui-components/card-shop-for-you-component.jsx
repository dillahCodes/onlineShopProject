import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import PropTypes from "prop-types";

const CardShopForYouComponent = ({ shop, onClick }) => {
  return (
    <section
      className="h-[216px] w-[132px] shadow-md rounded-md overflow-hidden"
      onClick={onClick}
    >
      {/* product image */}
      <img src={shop.productHeaderImage} alt="" className="block" />
      <div className=" relative">
        {/* shop image */}
        <div className="absolute border border-white left-1/2 -translate-x-1/2  -top-8 w-[70px] h-[70px] bg-white  rounded-full">
          <div className="w-full rounded-[inherit] relative">
            <img src={shop.shopProfileImage} alt="" className="w-full  rounded-[inherit]" />
            <div className="w-6 h-6 absolute right-0 bottom-0">
              <img src={shop.shopBadge} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* shop name */}
      <div className="w-full text-center mt-11">
        <h1 className="text-xs">{shop.shopName}</h1>
        <div className="flex w-full">
          <div className="flex mx-auto text-sm mt-1">
            {[...Array(shop.rating)].map((_, index) => {
              return <TiStarFullOutline className="text-[#FFC400]" key={index} />;
            })}
            {[...Array(5 - shop.rating)].map((_, index) => {
              return <TiStarOutline className="text-[#FFC400]" key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardShopForYouComponent;

CardShopForYouComponent.propTypes = {
  shop: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};
