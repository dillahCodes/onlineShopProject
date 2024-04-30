import PropTypes from "prop-types";
import { IoHeartOutline } from "react-icons/io5";
import ButtonComponent from "../ui-components/button-component";
import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import formatCurrencyToIDR from "../../utils/format-currency";

const DetailsProductMobileTitleAndPrice = ({ productData }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistAndUnwishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="w-full p-3 bg-white">
      <div className="w-full">
        <span className="flex items-center gap-x-1">
          <span className="text-xl font-bold font-space-grotesk">
            {formatCurrencyToIDR(productData.price)}
          </span>
          <div className="max-w-16">
            <img
              src="https://images.tokopedia.net/img/bebas-ongkir-engine/bebas-ongkir/bo_reg_20k.png"
              alt="beli 20rb gratis ongkir"
              className="object-cover"
            />
          </div>
        </span>
      </div>
      <div className="flex items-center justify-between w-full gap-x-5">
        <span className="  w-full">
          <img
            src="https://images.tokopedia.net/img/pdp/icons/label-icon-beli-lokal.png"
            alt="label lokal"
            height={14}
            className="h-[18px] inline mr-1"
          />
          <span className="text-base font-medium font-space-grotesk">{productData.name}</span>
        </span>
        <ButtonComponent
          onClick={handleWishlistAndUnwishlist}
          className="flex items-center text-3xl bg-transparent border-none shadow-none"
          icon={isWishlisted ? <IoMdHeart className="text-red-600" /> : <IoHeartOutline />}
        />
      </div>
    </div>
  );
};

export default DetailsProductMobileTitleAndPrice;

DetailsProductMobileTitleAndPrice.propTypes = {
  productData: PropTypes.object,
};
