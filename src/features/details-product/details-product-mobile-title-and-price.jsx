import PropTypes from "prop-types";
import { IoHeartOutline } from "react-icons/io5";
import ButtonComponent from "../../components/ui/button-component";
import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import formatCurrencyToIDR from "../../utils/format-currency";

const DetailsProductMobileTitleAndPrice = ({ productData }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistAndUnwishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="w-full p-5 bg-white">
      <div className="w-full">
        <h1 className="text-xl font-bold font-space-grotesk">
          {formatCurrencyToIDR(productData.price)}
        </h1>
      </div>
      <div className="flex items-center justify-between w-full gap-x-5">
        <h1 className="text-base font-medium font-space-grotesk">{productData.name}</h1>
        <ButtonComponent
          onClick={handleWishlistAndUnwishlist}
          className="flex items-center text-3xl bg-transparent border-none shadow-none"
          icon={isWishlisted ? <IoMdHeart /> : <IoHeartOutline />}
        />
      </div>
    </div>
  );
};

export default DetailsProductMobileTitleAndPrice;

DetailsProductMobileTitleAndPrice.propTypes = {
  productData: PropTypes.object,
};
