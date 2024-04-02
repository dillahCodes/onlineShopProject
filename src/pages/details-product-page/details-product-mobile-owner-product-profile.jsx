import { Avatar } from "antd";
import PropTypes from "prop-types";
import { FaRegUser } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import ButtonComponent from "../../components/ui/button-component";

const DetailsProductMobileOwnerProductProfile = ({ productData }) => {
  const getProductRatingAverage = () => {
    return (
      productData &&
      (
        productData.review.reduce((acc, curr) => acc + curr.rating, 0) / productData.review.length
      ).toFixed(1)
    );
  };

  return (
    <div className="w-full p-5 mt-2 bg-white ">
      {/* owner profile */}
      <div className="flex items-center w-full gap-x-5">
        <div className="text-base">
          <Avatar size={45} icon={<FaRegUser />} />
        </div>
        <div className="flex flex-col w-full">
          <h1 className="text-base font-bold font-space-grotesk">{productData.owner.name}</h1>
          <span className="text-sm font-space-grotesk">
            <span>online</span> <span className="font-bold">0 jam lalu</span>
          </span>
          <span className="text-sm font-space-grotesk">jakarta utara</span>
        </div>
      </div>
      {/* owner description */}
      <div className="flex items-center justify-between w-full mt-3 font-space-grotesk">
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-x-1">
            <IoIosStarOutline className="text-lg" />
            <span>
              <span className="flex gap-x-1">
                <span className="font-bold">{getProductRatingAverage()}</span>
                <span>rata - rata ulasan</span>
              </span>
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <IoTimeOutline className="text-lg" />
            <span className="flex gap-x-1">
              <span className="font-bold">± 0 jam</span>
              <span>pesanan di proses</span>
            </span>
          </div>
        </div>
        <ButtonComponent className={"border-black font-bold font-space-grotesk capitalize"}>
          follow
        </ButtonComponent>
      </div>
    </div>
  );
};
export default DetailsProductMobileOwnerProductProfile;

DetailsProductMobileOwnerProductProfile.propTypes = {
  productData: PropTypes.object,
};
