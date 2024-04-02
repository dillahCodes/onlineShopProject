import PropTypes from "prop-types";
import { IoHeartOutline } from "react-icons/io5";
import ButtonComponent from "../../components/ui/button-component";
import { useState } from "react";
import { IoMdHeart } from "react-icons/io";

const DetailsProductMobileTitleAndPrice = ({ productData }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistAndUnwishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

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
